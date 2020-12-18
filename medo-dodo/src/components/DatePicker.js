import './styles/DatePicker.css'
import React, {useState, useEffect} from 'react'
import DateTimeSetter from 'react-datetime-picker'

const DatePicker = ({onSelectedChange}) => {
    const [value, setValue] = useState(new Date());

    useEffect(() => {

        const time = {day: value.getDate(), month: value.getMonth() + 1, hour: value.getHours(), minutes: value.getMinutes()}
        onSelectedChange(value);
        console.log(time)
    }, [value])

    return (
        <div className="date-picker">
          <div className="ui segments">
            <div className="ui segment">  
            
              <div className="ui form">
                <div className="field">
                  <label className="label">Due date and time:</label>
                </div>
              </div>

              <div className="ui grid">
                <div className="three wide row">
                  <DateTimeSetter 
                      onChange={setValue}
                      value={value}
                      disableClock={true}
                  />
                </div>                
              </div>              

            </div>
            <div className="ui secondary segment">
              
              <div className="ui form">
                <div className="field">
                  <label className="label">Dued: </label>
                </div>
              </div>

              <div className="ui grid">
                <div className="three wide row">
                  {value ? `${value}` : ''}
                </div>                
              </div> 
              
            </div>
            
          </div>
        </div>
    );
}

export default DatePicker