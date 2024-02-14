import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from "./Layout.jsx";
import { RouterProvider, createBrowserRouter, Route, createRoutesFromElements } from "react-router-dom";
import App from './App.jsx'


import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact-us/Contact.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact-us' element={<Contact/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
