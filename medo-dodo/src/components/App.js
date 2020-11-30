import "./App.css";
import React from "react";
import TextInputField from "./TextInputField";
import DueTime from "./DueTimeInput";
import PriorityTagList from "./PriorityTagList";

class App extends React.Component {
  state = {
    priorities: ["high", "medium", "low"],
  };

  onTextFieldSubmit(term) {
    console.log(term + ".");
  }
  render() {
    return (
      <div className="App ui container">
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
      </div>
    );
  }
}

export default App;
