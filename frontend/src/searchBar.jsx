import React from 'react'
import ReactDOM from 'react-dom/client'
import './searchBar.css'
import {Link, Routes, Route, useNavigate} from 'react-router-dom'

export default function SearchBar() {

    const [destination, setDestination] = React.useState("")
    const navigate = useNavigate();
    
    function handleChange(event) {
        setDestination(event.target.value)
    }

    const handleSumbit = (event) => {
        event.preventDefault();
        navigate('/map');
    }

    return (
        <div>
            <div className='form-container w-[100vw] '>
                <form className='destination-form' onSubmit={handleSumbit}>
                        <input
                            type="text"
                            placeholder="Destination"
                            onChange={handleChange}
                            className="dest-input w-[70vw] "
                            id='destination-input'/> 
                    <input type="submit" value="Submit" className="dest-input" id='submit-destination'/>
                </form>
            </div>
        </div>
    )
}