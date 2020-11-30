import "./App.css";
import React from "react";
import TextInputField from "./TextInputField";
import Header from "./Header.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: new Date(),
      currentWeek: 49,
      pages: ["weekly", "categories", "addTask", "modifyTask"],
      currentPage: "weekly",
    };
  }

  componentDidMount() {
    console.log(this.state.currentDate);
  }

  onTextFieldSubmit(term) {
    console.log(term);
  }
  render() {
    return (
      <div className="App">
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

        <TextInputField onSubmit={this.onTextFieldSubmit} />
      </div>
    );
  }
}

export default App;
