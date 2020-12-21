import React, { useEffect, useState } from "react";
import PriorityTag from "./PriorityTag";
import MyButton from "./MyButton";
import buttontypes from "./buttontypes";
import pagetypes from "./pagetypes";
import TaskGetter from "./ConnectToBackend";

const getFormattedDateForCard = (date) => {
  const arr = date.split(/[^0-9]/);
  const formatted = `${arr[2]}.${arr[1]}.${arr[0]} at ${arr[3]}.${arr[4]}`;
  return formatted;
};

const getDoneBoolean = (num) => {
  return num === 0 ? false : true;
};

const getButtonText = (num) => {
  return num === 0 || !num ? " " : "X";
};

const TaskCard = ({ id, priorityLevel, levelTitle, onClickTask }) => {
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [doneState, setDoneState] = useState("");
  const [task, setTask] = useState("");
  const [buttonText, setButtonText] = useState("");

  useEffect(() => {
    const createTask = async () => {
      const data = await TaskGetter.byId(id);

      if (data.length > 0) {
        setTask(data[0]);
        const date = getFormattedDateForCard(data[0].due_date);
        const doneOrNot = getDoneBoolean(task.is_done);
        const button = getButtonText(task.is_done);
        setTitle(task.title);
        setDueDate(date);
        setDoneState(doneOrNot);
        setButtonText(button);
      }
    };

    createTask();
  }, [id, levelTitle, doneState]);

  const onButtonDoneClick = () => {
    if (doneState === false) {
      updateTaskState(true);
    } else {
      updateTaskState(false);
    }
  };

  const updateTaskState = async (value) => {
    try {
      const updateTask = await TaskGetter.updateTask(id, "is_done", value);
      setDoneState(value);
      const button = getButtonText(value);
      setButtonText(button);
    } catch (error) {
      alert("Something went wrong with saving the task.");
    }
  };

  return (
    <div className="task-card">
      <div className="ui segment">
        <div className="ui two column centered grid">
          <div className="three column centered row">
            <div className="column">
              <div className="button">
                <input
                  className="ui button"
                  type="button"
                  onClick={onButtonDoneClick}
                  value={buttonText}
                />
                <label>
                  <h3>{title}</h3>
                </label>
              </div>

              <div className="date">{dueDate}</div>

              <div className="priority">
                <PriorityTag priorityChosen={priorityLevel} />
              </div>

              <div className="priority">
                <div className=""></div>
              </div>
            </div>

            <div className="right floated column">
              <MyButton
                buttontype={buttontypes.modify}
                //page={pagetypes.modifyTask}
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
