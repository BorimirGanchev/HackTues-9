import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './searchBar'
import './App.css'
import SearchBar from './searchBar'
import Header from './header'
import Example from './imageSlider'

export default function App(){
  return (
    <div>
      <Header/>
      <div className='search-bar'>
        <SearchBar/>
      </div>
      <Example />
    </div>
  )
}