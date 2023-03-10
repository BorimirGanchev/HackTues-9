import './searchBar'
import './App.css'
import SearchBar from './searchBar'
import Header from './header'
import Slider from './imageSlider'
import Navbar from './Navbar'

export default function Homepage () {
    return (
      <div className='main-container'>
        <Navbar/>
        <div className='search-bar'>
          <SearchBar/>
        </div>
        <Slider />
      </div>
    )
}