import express from "express";
import { adminLogin } from "../controller/adminController.js";
const adminRoute = express();

adminRoute.post('/login',adminLogin);


export default adminRoute;