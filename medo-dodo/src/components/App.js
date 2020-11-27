import "./App.css";
import React from "react";
import TextInputField from "./TextInputField";
import PriorityTag from "./PriorityTag";

class App extends React.Component {
  onTextFieldSubmit(term) {
    console.log(term);
  }
  render() {
    return (
      <div className="App">
        <TextInputField
          onSubmit={this.onTextFieldSubmit}
          type="text"
          placeholder="What to do, Dodo?"
          labelName="Give us a next task: "
          labelTextColor="red"
          inputType="one-per-row"
        />
        <TextInputField
          onSubmit={this.onTextFieldSubmit}
          type="date"
          placeholder="dd/mm/yyyy"
          labelName="Give us a due date: "
          inputType="multi-per-row"
        />
        <TextInputField
          onSubmit={this.onTextFieldSubmit}
          type="time"
          placeholder="hh:mm"
          inputType="multi-per-row"
        />
        <PriorityTag />
      </div>
    );
  }
}

export default App;
