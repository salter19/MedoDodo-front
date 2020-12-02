import React, { useEffect, useState } from "react";
import axios from "axios";
import PriorityTag from "./PriorityTag";

const TaskCard = ({ id, levelTitle }) => {
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [checkbox, setCheckbox] = useState(0);

  useEffect(() => {
    const task = async () => {
      const { data } = await axios.get(`http://localhost:8080/tasks/${id}`);

      setTitle(data[0].title);
      setDueDate(data[0].due_date);
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
          <PriorityTag level="ui yellow button" title={levelTitle} />
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
