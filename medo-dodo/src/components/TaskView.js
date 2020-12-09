import "./styles/TaskView.css";
import React from "react";
import ViewBase from './ViewBase'
import TextInputField from "./TextInputField";
import DueTime from "./DueTimeInput";
import PriorityTagList from "./PriorityTagList";
import DropDown from "./DropDown";

class AddNewTaskView extends React.Component {

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
        <PriorityTagList labelAlign="center" />
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
          view={this.view()}
        />
        
      </div>
    );
  }
}

export default AddNewTaskView;
