import React from 'react'


export default (props) => {
    console.log(props)
    return(
        <div className=" optionComponents">  
            <button type="button" className="btn btn-outline-dark">{props.breed}</button>
        </div>
    ) 
}
