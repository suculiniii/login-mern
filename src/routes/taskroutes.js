import { Router } from "express";
import { getTask, getTasks, createTask, deleteTask, updateTask } from "../controllers/task.controller.js";
import { requiredAuth } from '../middlewares/tokenValidation.js';
import { createTaskSchema } from '../schemas/task.schema.js'
import { validateSchema } from "../middlewares/validator.middlewares.js";

const router= Router();
router.get('/tasks', requiredAuth, getTask )
router.post('/task', requiredAuth, validateSchema(createTaskSchema), createTask)
router.get('/task/:id',requiredAuth,  getTasks)
router.put('/task/:id', requiredAuth, updateTask )
router.delete('/task/:id', requiredAuth, deleteTask )

export default router;