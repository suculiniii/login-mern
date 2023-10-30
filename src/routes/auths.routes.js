import { Router } from "express";
import { register, login, logout, profile } from "../controllers/aut.controller";
import { requiredAuth } from "../middlewares/tokenValidation.js"
import { loginSchema, registerSchema } from "../schemas/auth.schema.js";
import { validateSchema } from "../middlewares/validator.middlewares.js";

const router=Router();

router.post('/register', validateSchema(registerSchema), register);
router.post('/login', validateSchema(loginSchema), login);
router.post('/logout', logout);
router.get('/verify');
router.get('/profile', requiredAuth, profile);


export default router;