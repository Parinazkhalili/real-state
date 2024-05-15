
import mongoose from "mongoose" ;

async function connectDB() {
    console.log("Connecting to DB ...")
    if(mongoose.connections[0].readyState) return;
    mongoose.set("strictQuery" , false) ;
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connecting to DB ...")
}

export default connectDB;