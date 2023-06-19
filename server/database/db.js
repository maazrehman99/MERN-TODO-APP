import mongoose from "mongoose";
import dotenv from "dotenv";


dotenv.config();

const user = process.env.DB_USERNAME
const pass = process.env.DB_PASSWORD

const connectDB =  () => {
    const MONGODB_URI =
      `mongodb+srv://${user}:${pass}@cluster0.9lek3vx.mongodb.net/?retryWrites=true&w=majority`;
    mongoose.connect(MONGODB_URI,{useNewUrlParser:true})
}

mongoose.connection.on("connected",()=>{
    console.log("connected to db");
})
mongoose.connection.on("disconnected",(err)=>{
    console.log("disconnected");
})
mongoose.connection.on("error",(err)=>{
    console.log(err.message);
})

export default connectDB;