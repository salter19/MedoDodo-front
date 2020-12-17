import React, {useState, useEffect} from 'react'

const Dropdown = ( {options, header, selected, onSelectedChange } ) => {
    const renderedOptions = options.map( option => {

        // option[0]: id, option[1]: title        
        return (
            <div 
                key={option[0]} 
                className="item"
                onClick={() => onSelectedChange(option)}
            >
                {option[1]}
            </div>
        )
    });
    return (
        <div className="ui form">
            <div className="field">
                <label className="label"> {header} </label>

                <div className="ui selection dropdown visible active">
                    
                    <i className="dropdown icon"></i>
                    <div className="text"> {selected[1]} </div>
                    <div className="menu visible transition">
                        {renderedOptions}    
                    </div>
                
                </div>

            </div>
        </div>
    )
}

export default Dropdown