import React, { useEffect, useState } from "react";
import axios from "axios";
import PriorityTag from "./PriorityTag";
import Servers from './Servers'

const getFormattedDate = (date) => {
  const arr = date.split(/[^0-9]/);

  const formatted = `${arr[2]}.${arr[1]}.${arr[0]} at ${arr[3]}.${arr[4]}`;

  return formatted;
};

const TaskCard = ({ id, priority, levelTitle, onClickTask }) => {
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [checkbox, setCheckbox] = useState(0);

  useEffect(() => {
    const task = async () => {
      const { data } = await axios.get(`${Servers.local}${id}`);

      const date = getFormattedDate(data[0].due_date);
      setTitle(data[0].title);
      setDueDate(date);
    };

    task();
  }, [id, levelTitle]);

  const setDone = () => {
    setCheckbox(1);
    console.log(`Task ${title} is done!`);
    // this will eventually lead to changing appearance of task card
  };

  return (
    <div className="task-card">
      <div className="ui segment">
        <div className="ui checkbox">
          <input className="box" type="checkbox" onClick={setDone} />
          <label>{title}</label>
        </div>
        <div className="date">{dueDate}</div>

        <div className="priority">
          <PriorityTag priority={priority} />
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
