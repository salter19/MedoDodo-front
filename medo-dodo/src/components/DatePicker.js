import './styles/DatePicker.css'
import React, {useState} from 'react'
import DateTimeSetter from 'react-datetime-picker'

const DatePicker = () => {
    const [value, setValue] = useState(new Date());


    console.log(value)
    return (
        <div className="date-picker">
          <div className="ui segments">
            <div className="ui segment top">  
                <label className="label">Due date and time:</label>
                <br/>
                <DateTimeSetter 
                onChange={setValue}
                value={value}
                disableClock={true}
                />
            </div>
            <div className="ui secondary segment">

              <label className="label">Dued: </label>
              <div>{value ? `${value}` : ''}</div>
            </div>
            
          </div>
        </div>
    );
}

export default DatePicker