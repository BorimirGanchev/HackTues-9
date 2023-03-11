import React from "react";

export default function AddMenu(props){
    console.log(props)
    return (
        <div>
            <button className="add-button" type = "button" onClick={props.handleClick}>Add</button>
        </div>
    )
}