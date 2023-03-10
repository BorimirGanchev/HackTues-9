import React from 'react'
import ReactDOM from 'react-dom/client'
import './searchBar.css'


export default function SearchBar() {

    const [destination, setDestination] = React.useState("")
    
    function handleChange(event) {
        setDestination(event.target.value)
    }

    return (
        <div>
             
            <div className='form-container'>
                <form className='destination-form'>
                    <input
                        type="text"
                        placeholder="Destination"
                        onChange={handleChange}
                        className="dest-input"
                        id='destination-input'/>    
                    <input type="submit" value="Submit" className="dest-input" id='submit-destination'/>
                </form>
            </div>
        </div>
    )
}