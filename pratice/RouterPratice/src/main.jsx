import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import App from './App.jsx'
import './index.css'

import Layout from './Layout.jsx';
import {Home} from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Blog from './components/Blog.jsx'
import Github, {githubInfoFnc} from './components/Github.jsx'


// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout />}>
//       <Route path='' element={<Home />} />
//       <Route path='about' element={<About />} />
//       <Route path='contact' element={<Contact />} />
//       <Route path='github' element={<Github />} />
//     </Route>
//   )
// )
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About />} />
      <Route path='blog/:bid' element={<Blog />} />
      <Route path='contact' element={<Contact />} />
      <Route loader={githubInfoFnc} path='github' element={<Github />} />
      {/* <Route loader={githubInfoLoader} path='github' element={<Github />} /> */}
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
