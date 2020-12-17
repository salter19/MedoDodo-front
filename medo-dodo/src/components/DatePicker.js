import './styles/DatePicker.css'
import React, {useState, useEffect} from 'react'
import DateTimeSetter from 'react-datetime-picker'

const DatePicker = () => {
    const [value, setValue] = useState(new Date());

    useEffect(()=>{
        const date = getFormattedDate(value);
        console.log(date)
    }, [value])

    getFormattedDate = (date) => {
        const formatted =
        this.getDayOfTheWeek(date.getDay()) +
        " " +
        date.getDate() +
        " / " +
        (date.getMonth() + 1) +
        " / " +
        date.getFullYear();
        return formatted;
    }

    getDayOfTheWeek = (daynumber) => {
        switch (daynumber) {
          case 0:
            return "Sunday";
          case 1:
            return "Monday";
          case 2:
            return "Tuesday";
          case 3:
            return "Wednesday";
          case 4:
            return "Thursday";
          case 5:
            return "Friday";
          case 6:
            return "Saturday";
          default:
            return "Current day";
        }
      }

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