import "./styles/TextInputField.css";
import React, { useState, useEffect } from "react";
import Label from "./Label";

// TextInput is build using class component.
// In the future might refactor it into function component. TS
const TextInput = ({onSubmit, labelName, inputType, type, placeholder, onInputChange}) => {
  const [task, setTask] = useState(placeholder)
  
  const onFormSubmit = (event) => {
    event.preventDefault();
    
    setTask(event.target.value);
    onSubmit(task)
  };
  
  const onChange = (event) => {
    setTask(event.target.value);
    onInputChange(task)
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
                placeholder={task}
                onChange={onChange}
                onClick={() => setTask('') }
                value={task}
              />
            </div>

          </div>
        </form>
      </div>
  );
}

export default TextInput;
