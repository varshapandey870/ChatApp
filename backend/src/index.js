import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cookieParser from "cookie-parser";
import {connectDB} from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";
//import messageRoutes from "./routes/message.route.js";

const app = express();
app.use(express.json());
app.use(cookieParser());
connectDB();

const port = process.env.PORT || 3000;



app.get("/" , (req,res) =>{
    try{
        res.json("hello");
    }catch(err){
        console.log(err);
    }
})

app.use("/api/auth" , authRoutes);
 //app.use("/api/messages" , messageRoutes);
app.listen(port,() =>{
    console.log("server is running....");
    
});
