import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router";

import App from './App.jsx'
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import ServiceDetails from './pages/ServiceDetails.jsx';
import AllServices from './pages/AllServices.jsx';
import SingleService from './pages/SingleService.jsx';
import AdminDashboard from './pages/Admin/AdminDashboard.jsx';
import AdminLayout from './pages/Admin/AdminLayout.jsx';
import AdminAbout from './pages/Admin/AdminAbout.jsx';

createRoot(document.getElementById('root')).render(

  <StrictMode>

   <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path='services'>
        <Route element={<ServiceDetails/>} index/>
        <Route element={<AllServices/>} path='all'/>
        <Route element={<SingleService/>} path=':title'/>
      </Route>
      <Route path='admin' element={<AdminLayout/>} >
        <Route index element={<AdminDashboard/>}/>
        <Route path='about' element={<AdminAbout/>}/>
         </Route>
    </Routes>
  </BrowserRouter>,

  </StrictMode>,
)
