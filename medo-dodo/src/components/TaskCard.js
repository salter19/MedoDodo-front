import React, { useEffect, useState } from "react";
import axios from "axios";
import PriorityTag from "./PriorityTag";

const TaskCard = ({ id, levelTitle }) => {
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [checkbox, setCheckbox] = useState(0);
  const [priorityType, setPriorityType] = useState("");

  useEffect(() => {
    const task = async () => {
      const { data } = await axios.get(`http://localhost:8080/tasks/${id}`);

      setTitle(data[0].title);
      setDueDate(data[0].due_date);

      // does not work, why?
      if (levelTitle === "low") {
        //console.log("ui green button");
        setPriorityType("ui green button");
      } else if (levelTitle === "medium") {
        //console.log("ui yellow button");
        setPriorityType("ui yellow button");
      } else {
        //console.log("ui red button");
        setPriorityType("ui red button");
      }

      console.log(priorityType);
    };
    task();
  }, []);

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
          <div
            className="tag"
            style={{
              backgroundColor: "blue",
              color: "white",
              width: "20%",
              display: "inline-block",
              padding: "2px",
              marginTop: "10px",
            }}
          >
            priority tag will be here
          </div>
          <PriorityTag />
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
