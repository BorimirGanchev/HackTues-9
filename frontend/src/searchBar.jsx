import React from 'react'
import ReactDOM from 'react-dom/client'

export default function SearchBar() {

    const [destination, setDestination] = React.useState("")
    
    function handleChange(event) {
        setDestination(event.target.value)
    }

    return (
        <div>
            <form>
                <input
                    type="text"
                    placeholder="Destination"
                    onChange={handleChange}/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}