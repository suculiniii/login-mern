import express from 'express';
import morgan from 'morgan';
import authsRoutes from './routes/auths.routes.js';
import cookieParser from 'cookie-parser';

const app=express();
app.use(express.json());
app.use(morgan('dev'));
app.use("/api", authsRoutes);
app.use(cookieParser());


export default app;