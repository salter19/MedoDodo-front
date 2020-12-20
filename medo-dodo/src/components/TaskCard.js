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

const getFormattedDateForSave = (date) => {
  const arr = date.split(/[^0-9]/);
  const formatted = `${arr[0]}-${arr[1]}-${arr[2]} ${arr[3]}:${arr[4]}:${arr[5]}`;
  return formatted;
}

const TaskCard = ({ id, priorityLevel, levelTitle, onClickTask, currentCategory }) => {
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [done, setDone] = useState(false);
  const [task, setTask] = useState('');

  useEffect(() => {
    const createTask = async () => {
      const data = await TaskGetter.byId(id);
      
      if (data.length > 0) {
        const date = getFormattedDateForCard(data[0].due_date);
        setTitle(data[0].title);
        setDueDate(date);
        setTask(data[0]);

        console.log(data[0].is_done)
        if (data[0].is_done) {
          console.log( data[0].title + ' is_done' )
        }
      }
    };

    createTask();
  }, [id, levelTitle]);

  const onCheckboxClick = () => {
    setDone(!done);

    // default done === false;
    !done ? saveTaskState() : console.log('undone')
    
    // ToDo: modify the fucker. this here creates new task.
  };

  const saveTaskState = async() => {

    const formattedDate = getFormattedDateForSave(task.due_date);
    const tmp = {
      title: task.title,
      due_date: formattedDate,
      description: task.description,
      priority: task.priority,
      category_id: task.category_id,
      is_done: done,
    };
    setTask(tmp)
    try {
      const saveUp = await TaskGetter.saveTask(tmp);
      alert(saveUp);
      this.props.onSave();
    } catch (error) {
      alert("Something went wrong with saving the task.");
    }
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
