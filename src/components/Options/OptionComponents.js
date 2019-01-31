import React from 'react'
import './OptionContainer.css'

export default (props) => {
    let style = ""
    if((props.correct===props.breed) && (props.hint)){
         style = "hint btn btn-outline-dark"
    }else{
         style = "btn btn-outline-dark"
    }
    return(
        <div onClick={props.onClick} className=" optionComponents">  
            <button type="button" className={style}>{props.breed}</button>
        </div>
    ) 
}
