import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import QuotationForm from './pages/QuotationForm';
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/add-quotation" element={<QuotationForm />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App