import React from 'react'


export default (props) => {
    return(
        <div onClick={props.onClick} className=" optionComponents">  
            <button type="button" className="btn btn-outline-dark">{props.breed}</button>
        </div>
    ) 
}
