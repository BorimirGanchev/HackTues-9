import './searchBar'
import './App.css'
import SearchBar from './searchBar'

import Slider from './imageSlider'
import Navbar from './Navbar'
import './Navbar.css'

import { GoogleLogin} from '@react-oauth/google'


export default function Homepage () {
    return (
     
        <div className='main-container'>
          <Navbar/>
          <div className='search-bar'>
            <SearchBar/>
          </div>
          <Slider />

          <GoogleLogin
                onSuccess={credentialResponse => {
                console.log(credentialResponse);
                }}
                onError={() => {
                console.log('Login Failed');
                }}
                />;
        </div>
      
    )
}