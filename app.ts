import express from "express"
import type { Application, Request, Response } from "express";

const app:Application = express();

app.use(express.json());


app.get('/alltracker',(req:Request,res:Response)=>{
    res.send("it's working");
})

export default app;