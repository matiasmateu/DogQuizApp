import React from 'react'
import './info.css'


export default (props) => {
   return (    
        <div>
            <img onClick={props.onClick} className="infologo" src='./logotipo.png' alt='logo' />
        </div>
    )}
