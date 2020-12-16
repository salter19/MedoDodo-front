import React, {useState, useEffect} from 'react'

const Dropdown = ( {options, header} ) => {
    const renderedOptions = options.map( option => {
        return (
            <div key={option} className="item">
                {option}
            </div>
        )
    });
    return (
        <div className="ui form">
            <div className="field">
                <label className="label"> {header} </label>

                <div className="ui selection dropdown visible active">
                    
                    <i className="dropdown icon"></i>
                    <div className="text"> {header} </div>
                
                </div>

            </div>
        </div>
    )
}

export default Dropdown