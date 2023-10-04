import { Router } from "express";
import { register, login, logout, profile } from "../controllers/aut.controller";
import { requiredAuth } from "../middlewares/tokenValidation.js"

const router=Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.get('/profile', requiredAuth, profile);


export default router;