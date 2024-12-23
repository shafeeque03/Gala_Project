import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dbconnect from './config/database.js'
import http from 'http'
import adminRoute from './routes/adminRoute.js';

dotenv.config();
dbconnect();
let app = express();
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cors({
    origin:"http://localhost:5175",
    methods:['GET','POST','PUT','PATCH'],
    credentials:true
}));
app.use('/',adminRoute);

const server = http.createServer(app);
server.listen(5000,()=>console.log('App working on port 5000'))


