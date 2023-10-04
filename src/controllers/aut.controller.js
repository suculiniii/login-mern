import User from '../models/user.models.js';
import bcrypt from 'bcryptjs';
import { createTokenAccess } from '../libs/jwt.js';

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