import express from 'express';
import router from "./routes/routes.js";
import cors from 'cors';
import DBConnection from './database/data.js';

const app=express();

app.use(cors());
app.use('/',router);
const port=process.env.PORT || 8000;

DBConnection();
app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})