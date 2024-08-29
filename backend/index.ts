
import express from "express";
import { connectDb } from "./config/db";
import dotenv from 'dotenv'
import userRoutes from './Routes/userRoutes'

const app=express();
dotenv.config()


connectDb()
app.use('/users',userRoutes)

app.listen(3000,()=>{
    
    console.log("server listening");
    
})