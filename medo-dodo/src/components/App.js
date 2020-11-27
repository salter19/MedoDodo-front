import "./App.css";
import React from "react";
import TextInputField from "./TextInputField";

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
        />
        <TextInputField
          onSubmit={this.onTextFieldSubmit}
          type="date"
          placeholder="dd/mm/yyyy"
          labelName="Give us a due date: "
        />
        <TextInputField
          onSubmit={this.onTextFieldSubmit}
          type="time"
          placeholder="hh:mm"
          labelName="Give us a due hour: "
        />
      </div>
    );
  }
}

export default App;
