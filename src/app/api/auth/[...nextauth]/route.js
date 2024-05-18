import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";
import User from "@/modals/User" ;
import {verifyPassword} from "@/utils/auth";
import connectDB from "@/utils/connectDB" ;

const authOptions = {
    session : {strategy: "jwt"},
    providers: [
        CredentialsProvider({
            async authorize(credentials) {
                const {email, password}= credentials;
                try {
                    await connectDB()
                } catch (error) {
                    throw new Error("مشکلی در سرور رخ داده است")
                }
                if(!email || !password) {
                    throw new Error("لطفا اطلاعات معتبر وارد کنبد")
                }
                const user= await User.findOne({email});
                if(!user) throw new Error("لطفا ابتدا حساب کاربری  ایجاد نمایید")
                const isValid = await verifyPassword(password, user.password)
                if(!isValid) throw new Error("ایمیل یا رمز عبور اشتباه است")
                return{email};
            },
        }),
    ],
};

const handler = NextAuth(authOptions);
export{handler as GET, handler as POST}