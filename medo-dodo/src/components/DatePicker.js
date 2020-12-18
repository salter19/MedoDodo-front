import './styles/DatePicker.css'
import React, {useState, useEffect} from 'react'
import DateTimeSetter from 'react-datetime-picker'

const DatePicker = ({onSelectedChange}) => {
    const [value, setValue] = useState(new Date());

    useEffect(() => {
        const time = {
          day: value.getDate(), 
          month: value.getMonth() + 1, 
          year: value.getFullYear(), 
          hour: value.getHours(), 
          minutes: value.getMinutes(), 
          seconds: value.getSeconds()
        }
        formatDate(time)
    }, [value])

    const formatDate = ({day, month, year, hour, minutes, seconds}) => {
      // 2020-11-25 21:00:00

      day = addZeroFront(day);
      month = addZeroFront(month);
      hour = addZeroFront(hour);
      minutes = addZeroFront(minutes);
      seconds = addZeroFront(seconds);
      const formated = `${year}-${month}-${day} ${hour}:${minutes}:${seconds}`
      onSelectedChange(formated)
    }

    const addZeroFront = (num) => {
      return num < 10 ? "0" + num : num;  
    }

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
                      clearIcon={null}
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