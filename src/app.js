import express from 'express';
import morgan from 'morgan';
import authsRoutes from './routes/auths.routes.js';
import cookieParser from 'cookie-parser';
import taskRouter from './routes/taskroutes.js';
import cors from 'cors'

const app=express();
app.use(cors({
    origin: " http://localhost:5173",
    creddentials: true,
}));
app.use(express.json());
app.use(morgan('dev'));
app.use("/api", authsRoutes);
app.use("/api", taskRouter);
app.use(cookieParser());


export default app;