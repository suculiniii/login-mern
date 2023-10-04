import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config";

export const requiredAuth = (req, res, next)=> {
    //console.log(req.headers);
    const { token } = req.cookies;
    console.log(token);
    if(!token)
    return res.status(401).json({message: "no token, autorizacion denegada"});

    jwt.verify(token, TOKEN_SECRET, (err,user)=>{
        if(err) res.status(403).json({ message: "token invalido" });
        req.user= user;
        next();
    })
}