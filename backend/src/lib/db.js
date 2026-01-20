import mongoose from "mongoose";

export const connectDB = async () => {
    
    try{
         const conn = await mongoose.connect(process.env.MONGO_URL);
         console.log("Connected to the database :" , conn.connection.host);
    
    }catch(error){
         console.error("MongoDB connection failed:" , error);
          process.exit(1); // 1 status code means fail, 0 means success
    }
    
};