import dotenv from "dotenv";
dotenv.config();
import express from "express";
import {connectDB} from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";


const app = express();
app.use(express.json());
connectDB();

const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/" , (req,res) =>{
    try{
        res.json("hello");
    }catch(err){
        console.log(err);
    }
})

app.use("/api/auth" , authRoutes);
app.listen(port,() =>{
    console.log("server is running....");
    
});
