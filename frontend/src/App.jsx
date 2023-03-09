import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {
  Route,
  Routes,
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
} from "react-router-dom";
import './App.css'
import Map from './map'

export default function App(){
  return(
    <BrowserRouter>
   <Routes>
    <Route path = '/map' element = {<Map />}/>
   </Routes>
   </BrowserRouter>
   )
}