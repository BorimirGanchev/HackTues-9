import './searchBar'
import './App.css'
import SearchBar from './searchBar'
import Header from './header'
import Slider from './imageSlider'

export default function Homepage () {
    return (
      <div className='main-container'>
        <Header/>
        <div className='search-bar'>
          <SearchBar/>
        </div>
        <Slider />
      </div>
    )
}