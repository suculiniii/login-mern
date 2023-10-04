import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from '../config.js';

export function createTokenAccess (payload){
    return new Promise((resolve, reject) => {
       payload,
       TOKEN_SECRET,
       {
        expiresIn: "2d"
       },
       (err, token) => {
        if(err) reject(err);
        resolve(token)
       }
    });
}