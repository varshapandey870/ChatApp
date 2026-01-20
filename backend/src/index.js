import express from "express";
import dotenv from "dotenv";
import {connectDB} from "./lib/db.js";
dotenv.config();

const app = express();
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
app.listen(port,() =>{
    console.log("server is running....");
    
});
