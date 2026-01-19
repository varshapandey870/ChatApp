import express from "express";
import dotenv from "dotenv";

const app = express();

dotenv.config();
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
    console.log("server is running....")
});
