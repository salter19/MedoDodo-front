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

            </div>
        </div>
    )
}

export default Dropdown