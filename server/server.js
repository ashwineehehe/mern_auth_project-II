import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import connectDB from './config/mongodb.js'
import authRouter from './routes/authRoutes.js'

import { config } from "dotenv"; //added
import userRouter from "./routes/userRoutes.js";
config() //added

const app= express();
const port= process.env.PORT || 4000
connectDB();

const allowedOrigins = ['http://localhost:5173']

app.use(express.json());
app.use(cookieParser());
app.use(cors({origin: allowedOrigins, credentials: true}))

// API end point
app.get('/', (req, res)=> res.send("API Working"));
app.use('/api/auth', authRouter)
app.use('/api/user', userRouter)

app.listen(port, ()=> console.log(`Server started on PORT:${port}
`));

