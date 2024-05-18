import {NextResponse} from "next/server" ;
import User from "@/models/User" ;
import connectDB from "@/utils/connectDB";
import {hashPassword} from "@/utils/auth";

export async function POST(req) {
    try {
        await connectDB();
        const body= await req.json()
        const {email, password}= body;
        console.log({email, password});
        if(!email || !password) {
            return NextResponse.json(
                {error:"لطفا اطلاعات معتبر وارد کنید"},
                {status:422}
            );
        }
        const existingUser = await User.findOne({email});
        console.log(existingUser);
        if(existingUser){
            return NextResponse.json({error:"این حساب کاربری وجود دارد"} , {status:422})
        }

        const hashedPassword = await hashPassword(password);
        const newUser = await User.create({
            email: email,
            password: hashedPassword,
        });
        console.log(newUser);
        return NextResponse.json({message:"حساب کاربری ایجاد شد"})
        
    } catch (error) {
        console.log(err);
        return NextResponse.json({error:"مشکلی در سرور رخ داده است"},
    
    {status:500})
    }
}