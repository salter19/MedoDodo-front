import "./styles/TextInputField.css";
import React, { useState, useEffect, useRef } from "react";

const TextInput = ({onSubmit, labelName, inputType, type, placeholder, onInputChange}) => {
  const [term, setTerm] = useState(placeholder);
  const ref = useRef();

  useEffect(() => {
    const bodyClick = (event) => {
      if (ref.current && ref.current.contains(event.target)) {
        return;
      }
    }
    document.body.addEventListener('click', bodyClick);

    const listenKeys = (event) => {      
      const keycode = event.key;
      //const key = String.fromCharCode(keycode);
      console.log(`You hit (${keycode})`)
    }
    
    document.body.addEventListener('keypress', listenKeys)

    return () => {
      document.body.removeEventListener('click', bodyClick);
      document.body.removeEventListener('keypress', listenKeys)
    }
  }, [])
  
  const onFormSubmit = (event) => {
    event.preventDefault();
    
    setTerm(event.target.value);
    onSubmit(term)
  };
  
  const onChange = (event) => {
    setTerm(event.target.value);
    onInputChange(term)
  };
  
  return (
    <div className="ui segment">      
        <form className="ui form" onSubmit={onFormSubmit}>
          <div className="field">
            
            <label className="label"> {labelName} </label>

            <div className={inputType}>
              <input
                type={type}
                className="text-input"
                placeholder={term}
                onChange={onChange}
                onClick={() => setTerm('') }
                value={term}
              />
            </div>

          </div>
        </form>
      </div>
  );
}

export default TextInput;
