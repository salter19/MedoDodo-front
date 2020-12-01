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
      showingWeek: 49,
      pages: ["weekly", "categories", "addTask", "modifyTask"],
      currentPage: "weekly",
    };
    this.handleNextWeek = this.handleNextWeek.bind(this);
    this.handleLastWeek = this.handleLastWeek.bind(this);
  }

  componentDidMount() {
    console.log(this.state.currentDate);
  }

  onTextFieldSubmit(term) {
    console.log(term);
  }
  handleNextWeek() {
    if (this.state.showingWeek === 53) {
      this.setState({ showingWeek: 1 });
      console.log(this.state.showingWeek);
    } else {
      this.setState({ showingWeek: this.state.showingWeek + 1 });
      console.log(this.state.showingWeek);
    }
  }
  handleLastWeek() {
    if (this.state.showingWeek === 1) {
      this.setState({ showingWeek: 53 });
      console.log(this.state.showingWeek);
    } else {
      this.setState({ showingWeek: this.state.showingWeek - 1 });
      console.log(this.state.showingWeek);
    }
  }

  render() {
    return (
      <div className="App">
        <Header
          key={1}
          weekNumber={this.state.currentWeek}
          page={this.state.pages[0]}
          showingWeek={this.state.showingWeek}
          date={this.state.currentDate}
          onClickNext={this.handleNextWeek}
          onClickLast={this.handleLastWeek}
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
