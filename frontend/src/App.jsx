import reactLogo from './assets/react.svg'
import Homepage from './Homepage';
import {
  Route,
  Routes,
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
} from "react-router-dom";

import './App.css'
import Map from './map'
import SearchBar from './searchBar'
import Header from './header'
import Slider from './imageSlider'

import logo from './logo.svg';
import { Login} from "./login"
import { Register} from "./register"

import Navbar from './Navbar'
import './Navbar.css'

export default function App(){
  return(
    <BrowserRouter>
   <Routes>
    <Route path = '/map' element = {<Map />}/>
    <Route path = '/' element = {<Homepage />}/>
   </Routes>
   </BrowserRouter>
   )
  
  
}