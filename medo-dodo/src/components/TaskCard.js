import React, { useEffect, useState } from "react";
import PriorityTag from "./PriorityTag";
import MyButton from "./MyButton";
import buttontypes from "./buttontypes";
import pagetypes from "./pagetypes";
import TaskGetter from "./TasksGetter";

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
      const data = await TaskGetter.byId(id);
      console.log(data);
      if (data.length > 0) {
        const date = getFormattedDate(data[0].due_date);
        setTitle(data[0].title);
        setDueDate(date);
      }
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
        <div className="ui two column centered grid">
          <div className="three column centered row">
            <div className="column">
              <div className="ui checkbox">
                <input className="box" type="checkbox" onClick={setDone} />
                <label>
                  <h3>{title}</h3>
                </label>
              </div>

              <div className="date">{dueDate}</div>

              <div className="priority">
                <PriorityTag priorityChosen={priority} />
              </div>
            </div>

            <div className="right floated column">
              <MyButton
                buttontype={buttontypes.modify}
                page={pagetypes.modifyTask}
                onSave={onClickTask}
                taskID={id}
                onClickTask={onClickTask}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
