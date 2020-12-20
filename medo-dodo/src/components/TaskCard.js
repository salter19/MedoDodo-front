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
}

const TaskCard = ({ id, priorityLevel, levelTitle, onClickTask}) => {
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [doneState, setDoneState] = useState('');
  const [task, setTask] = useState('');
  const [checkbox, setCheckbox] = useState('');

  useEffect(() => {
    const createTask = async () => {
      const data = await TaskGetter.byId(id);
      
      if (data.length > 0) {        
        setTask(data[0]);
        const date = getFormattedDateForCard(data[0].due_date);
        const doneOrNot = getDoneBoolean(task.is_done);
        setTitle(task.title);
        setDueDate(date);
        setDoneState(doneOrNot);
        const box = createTaskLine();
        setCheckbox(box);
      }
    };

    createTask();
    
  }, [id, levelTitle, doneState]);

  console.log('task created, done state is: ' + doneState );

  const onCheckboxClick = () => {
    if (doneState === false) {
      console.log(false + " change to " + true);
      updateTaskState(true);
    } else {
      console.log(true + ' change to ' + false);
      updateTaskState(false);
    }
    
  };

  const updateTaskState = async(value) => {

    try {
      const updateTask = await TaskGetter.updateTask(id, 'is_done', value);
      setDoneState(value);
      createTaskLine();
      alert('Task updated to ' + value);

    } catch (error) {
      alert("Something went wrong with saving the task.");
    }
  }

  const createTaskLine = () => {
    let cbState;
    if (doneState) {
      cbState = <input className="box" type="checkbox" onClick={onCheckboxClick} checked />;
    } else {
      cbState = <input className="box" type="checkbox" onClick={onCheckboxClick} />;
    }

    return (
      <div className="ui checkbox">
          {cbState}
          <label>
            <h3>{title}</h3>
          </label>
        </div>
    )
  }

  return (
    <div className="task-card">
      <div className="ui segment">
        <div className="ui two column centered grid">
          <div className="three column centered row">
            <div className="column">
              <div className="ui checkbox">
                <input className="box" type="checkbox" onClick={onCheckboxClick} />
                <label>
                  <h3>{title}</h3>
                </label>
              </div>

              {checkbox}
              <div className="date">{dueDate}</div>

              <div className="priority">
                <PriorityTag priorityChosen={priorityLevel}/>
              </div>

              <div className="priority">
                <div className=""></div>
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
