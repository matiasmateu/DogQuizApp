import React, { Component } from 'react';
import { OpionComponents} from './OptionComponents'

class OptionContainer extends Component{
    render(){ 
        return (
        <div>
            <OpionComponents />
            <OpionComponents />
            <OpionComponents />
        </div>
        
        
    )}
}

export default OptionContainer;