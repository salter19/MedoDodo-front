import "./App.css";
import React from "react";
import TextInputField from "./TextInputField";
import Header from "./Header.js";
import DueTime from "./DueTimeInput";
import PriorityTagList from "./PriorityTagList";
import DropDown from "./DropDown";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: new Date(),
      currentWeek: 49,
      pages: ["weekly", "categories", "addTask", "modifyTask"],
      currentPage: "weekly",
      priorities: ["high", "medium", "low"],
    };
  }

  componentDidMount() {
    console.log(this.state.currentDate);
  }

  onTextFieldSubmit(term) {
    console.log(term + ".");
  }
  render() {
    return (
      <div className="App ui container">
        <Header
          weekNumber={this.state.currentWeek}
          page={this.state.pages[0]}
          date={this.state.currentDate}
        />
        <TextInputField
          onSubmit={this.onTextFieldSubmit}
          type="text"
          placeholder="What to do, Dodo?"
          labelName="Give us a next task: "
          inputType="align-left"
        />
        <TextInputField
          onSubmit={this.onTextFieldSubmit}
          type="text"
          placeholder="Elaborate..."
          labelName="Description: "
          inputType="align-left"
        />
        <PriorityTagList tags={this.state.priorities} labelAlign="center" />
        <DueTime labelName="Due date and time:" labelAlign="center" />
        <DropDown labelName="Category" labelAlign="center" />
        <TextInputField onSubmit={this.onTextFieldSubmit} />
      </div>
    );
  }
}

export default App;
