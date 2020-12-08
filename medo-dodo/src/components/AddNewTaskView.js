import "./styles/AddNewTaskView.css";
import React from "react";
import TextInputField from "./TextInputField";
import DueTime from "./DueTimeInput";
import PriorityTagList from "./PriorityTagList";
import DropDown from "./DropDown";
import Button from "./Button";
import Head from "./Head";
import buttontypes from './buttontypes'

class AddNewTaskView extends React.Component {

  onTextFieldSubmit(term) {
    console.log(term);
  }

  render() {
    return (
      <div className="add-new-task-view">
        <Head
          pagetitle="Add new task"
          page={this.props.page}
          onSave={this.props.onSave}
        />
        <TextInputField
          onSubmit={this.onTextFieldSubmit}
          type="text"
          placeholder="What to do, Dodo?"
          labelName="Task"
        />
        <TextInputField
          onSubmit={this.onTextFieldSubmit}
          type="text"
          placeholder="Elaborate..."
          labelName="Description: "
        />
        <PriorityTagList labelAlign="center" />
        <DueTime labelName="Due date and time:" labelAlign="center" />
        <DropDown labelName="Category" labelAlign="center" />

        <div className="ui segment">
          <Button buttontype={buttontypes.save} page={this.props.page} onSave={this.props.onSave} />
        </div>
      </div>
    );
  }
}

export default AddNewTaskView;
