import axios from "axios";
// const baseURL = "https://roomque-server.onrender.com/";
const baseURL = "http://localhost:5000/";
const axiosInstance  = axios.create({baseURL:baseURL})

export const adminLogin = async(email,password)=>{
    const data = await axiosInstance.post('/login',{email,password});
    return data
}