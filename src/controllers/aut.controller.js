import User from '../models/user.models.js';
import bcrypt from 'bcryptjs';
import { createTokenAccess } from '../libs/jwt.js';
import jwt from 'jsonwebtoken'
import { TOKEN_SECRET } from '../config.js';

export const register= async (req, res) => {
    const {email, password, username}= req.body;
    try {
        const userFound= await UserfindOne({email})
        if(userFound) return res.status(400).json(["el email ya esta en uso"]);

        const passwordHash = await bcrypt.hash(password, 20)
        const newUser = new User({
            username,
            email,
            password: passwordHash
        });
    } catch (error) {
            res.status(500).json({ message: error.message });
        
    }
};

export const login=async (req, res) => {
    const{email, password, username}= req.body;

    console.log(email, password);
    res.send('registrando');
    try { 
        const userFound= await User.findOne({ email });
        if(!userFound) return res.status(400).json({ message: "no funca" });

        const isMatch = await bcrypt.compare(password, userFound.password);
        if (!isMatch)
        return res.status(400).json({ message: "error en las credenciales" });
        const token =await createTokenAccess({id: userFound._id});
        res.cookie('token',token)
        res.status(201).json({
            id: userFound._id,
            username: userFound,
            email: userFound.email
        });
    } catch (error) {
        res.status(500).json({message:error.message});
    }
};

export const logout=(req, res) => {
    res.cookie('token', '', {
        expires: new Date(0),
    });
    return res.sendStatus(200);
};
export const profile= async (req, res) => {
    const userFound= await User.findById(req.user.id);
    if(userFound) return res.status(400).json({ message: "usuario no funca" });
    res.status(201).json({
        id: userFound._id,
        username: userFound,
        email: userFound.email
    });
}

export const verifyToken = async (req, res) => {
    const { token } = req.cookie
    if (!token) return res.status(401).json({message: "Unauthorized"})
        
    jwt.verify(token, TOKEN_SECRET, async (err, user)=>{
        if(err) return res.status(401).json({message: "Unauthorized"})

        const userFound = await User.findById(user.id)
        if(!userFound) return res.status(401).json({message: "Unauthorized"})

        return res.json({
            id: userFound.id,
            username: userFound.username,
            email: userFound.email
        })
    })
}