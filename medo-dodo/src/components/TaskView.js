import "./styles/TaskView.css";
import React from "react";
import ViewBase from './ViewBase'
import TextInputField from "./TextInputField";
import DueTime from "./DueTimeInput";
import PriorityButtonRow from "./PriorityButtonRow";
import DropDown from "./DropDown";
import priorityLevels from './prioritylevels'

class TaskView extends React.Component {

  state = { task: '', description: '', due_date: '', priority: priorityLevels[priorityLevels.length -1], category: 1 }

  componentDidMount() {
    console.log(`The id of the task at hand: ${this.props.currentTaskID}`)
  }

  onTextFieldSubmit(term) {
    console.log(term);
  }

  view = () => {
    return (
      <div className="content">   
        <TextInputField
        onSubmit={this.onTextFieldSubmit}
        type="text"
        placeholder={this.props.placeholder}
        labelName="Task"
        />
        <TextInputField
          onSubmit={this.onTextFieldSubmit}
          type="text"
          placeholder={this.props.description}
          labelName="Description: "
        />
        <PriorityButtonRow labelAlign="center" />
        <DueTime labelName="Due date and time:" labelAlign="center" />
        <DropDown labelName="Category" labelAlign="center" />
      </div>
    )
  }

  render() {
   
    return (
      <div className="task-view">
        <ViewBase          
          page={this.props.page}
          date={this.props.date}
          onSave={this.props.onSave} 
          onSaveC={this.props.onSaveC}
          view={this.view()}
        />
        
      </div>
    );
  }
}

export default TaskView;
