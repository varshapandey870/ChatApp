import jwt from "jsonwebtoken";

export const generateToken =  (userId , res ) => {
    const JWT_SECRET = process.env.JWT_SECRET;
    //generating token 
    const token = jwt.sign({userId} , JWT_SECRET , {
        expiresIn : "7d"
    });

    //setting token in cookies to send back to the client
    res.cookie("jwt" , token , {
        maxAge : 7*24*60*60*1000, //7d
        httpOnly : true , //prevents xxs attacks : cross-site scripting
        sameSite: "strict", // CSRF attacks
        secure: process.env.NODE_ENV === "development" ? false : true,
        
    });
   
    return token;
};


// http://localhost -- development 
// https://dsmakmk.com -- production https(secure)