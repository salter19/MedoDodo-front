import "./styles/AddNewTaskView.css";
import React from "react";
import TextInputField from "./TextInputField";
import DueTime from "./DueTimeInput";
import PriorityTagList from "./PriorityTagList";
import DropDown from "./DropDown";
import Button from "./Button";
import buttontypes from './buttontypes'
import Head from "./Header";
import Footer from './Footer'

class AddNewTaskView extends React.Component {

  onTextFieldSubmit(term) {
    console.log(term);
  }

  render() {
    return (
      <div className="add-new-task-view">
        <Head
          page={this.props.page}
          date={this.props.date}
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

        <Footer 
          page={this.props.page}
          onSave={this.props.onSave} 
        />
      </div>
    );
  }
}

export default AddNewTaskView;
