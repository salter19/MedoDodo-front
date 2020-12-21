import "./styles/DatePicker.css";
import React, { useState, useEffect } from "react";
import DateTimeSetter from "react-datetime-picker";

const formatDate = (value) => {
  // 2020-11-25 21:00:00
  const day = addZeroFront(value.getDate());
  const month = addZeroFront(value.getMonth() + 1);
  const hour = addZeroFront(value.getHours());
  const minutes = addZeroFront(value.getMinutes());
  const seconds = addZeroFront(value.getSeconds());
  const formated = `${value.getFullYear()}-${month}-${day} ${hour}:${minutes}:${seconds}`;
  return formated;
};

const addZeroFront = (num) => {
  return num < 10 ? "0" + num : num;
};

const DatePicker = ({ onSelectedChange }) => {
  const [value, setValue] = useState(new Date());
  const [date, setDate] = useState("");

  useEffect(() => {
    setDate(formatDate(value));
    onSelectedChange(date);
  }, [value, onSelectedChange, date]);

  return (
    <div className="date-picker">
      <div className="ui segments">
        <div className="ui segment">
          <div className="ui form">
            <div className="field">
              <label className="label">Due date and time</label>
            </div>
          </div>

          <div className="ui grid">
            <div className="three wide row">
              <DateTimeSetter
                onChange={setValue}
                value={value}
                disableClock={true}
                clearIcon={null}
                required={true}
              />
            </div>
          </div>
        </div>
        <div className="ui secondary segment">
          <div className="ui form">
            <div className="field">
              <label className="label">Dued </label>
            </div>
          </div>

          <div className="ui grid">
            <div className="three wide row">{value ? `${value}` : ""}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatePicker;
