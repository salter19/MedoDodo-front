import "./styles/AddNewTaskView.css";
import React from "react";
import TextInputField from "./TextInputField";
import DueTime from "./DueTimeInput";
import PriorityTagList from "./PriorityTagList";
import DropDown from "./DropDown";
import SaveButton from "./SaveButton";
import Head from "./Head";
import buttontypes from './buttontypes'

class AddNewTaskView extends React.Component {
  state = {
    pages: [],
  };

  onTextFieldSubmit(term) {
    console.log(term);
  }

  componentDidMount() {
    this.setState({ pages: this.props.pages });
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
          <SaveButton buttontype={buttontypes.save} page={this.props.page} onSave={this.props.onSave} />
        </div>
      </div>
    );
  }
}

export default AddNewTaskView;
