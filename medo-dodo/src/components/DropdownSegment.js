import React, {useState, useEffect, useRef} from 'react'
import Textfield from './TextInputField'

const Dropdown = ( {options, header, selected, onSelectedChange } ) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {

        const onBodyClick = (event) => {
            if (ref.current && ref.current.contains(event.target)) {
                return;
            }
            setOpen( false );
        }

        document.body.addEventListener('click', onBodyClick); 

        // detach the event listener when component is removed from the DOM
        return () => {
            document.body.removeEventListener('click', onBodyClick);
        }
    }, []);

    const renderedOptions = options.map( option => {
        // option[0]: id, option[1]: title  

        // this removes chosen option from the dropdown
        if (option[0] === selected[0]) {
            return null;
        }      

        return (
            <div 
                key={option[0]} 
                className="item"
                onClick={() => {
                    onSelectedChange(option)}}
            >
                {option[1]}
            </div>
        )
    });

    return (
        <div className="ui segment">
            <div className="ui form" ref={ref}>
                <div className="field">
                    <label className="label"> {header} </label>

                    <div 
                        className={`ui selection dropdown ${open ? 'visible active' : ''}`} 
                        onClick={() => {
                            setOpen(!open);
                            }
                        }>
                        
                        <i className="dropdown icon"></i>
                        <div className="text"> {selected[1]} </div>
                        <div className={`menu ${open ? 'visible transition' : ''}`}>
                            {renderedOptions}    
                        </div>
                    
                    </div>
                </div>
            </div>


              
              <Textfield                            
                  key={0}
                  onSubmit={e => console.log('enter')}
                  type="text"
                  placeholder='my new cat'
                  labelName="Or add new category"
                  onInputChange={e => console.log('click')}
              />
          
          
        </div>
    )
}

export default Dropdown