import './styles/DatePicker.css'
import React, {useState, useEffect} from 'react'
import DateTimeSetter from 'react-datetime-picker'

const DatePicker = ({onSelectedChange}) => {
    const [value, setValue] = useState(new Date());

    useEffect(()=>{

        const time = {day: value.getDate(), month: value.getMonth() + 1, hour: value.getHours(), minutes: value.getMinutes()}
        onSelectedChange(value);
        console.log(time)
    }, [value])

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