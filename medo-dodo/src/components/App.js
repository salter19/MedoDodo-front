import "./App.css";
import React from "react";
import TextInputField from "./TextInputField";
import Header from "./Header.js";
import DueTime from "./DueTimeInput";
import PriorityTagList from "./PriorityTagList";
import DropDown from "./DropDown";
import Footer from "./Footer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: new Date(),
      currentWeek: 49,
      showingWeek: 49,
      pages: ["weekly", "categories", "addTask", "modifyTask"],
      currentPage: "weekly",
      priorities: ["high", "medium", "low"],
    };
    this.handleNextWeek = this.handleNextWeek.bind(this);
    this.handleLastWeek = this.handleLastWeek.bind(this);
  }

  componentDidMount() {
    console.log(this.state.currentDate);
  }

  onTextFieldSubmit(term) {
    console.log(term + ".");
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
      <div className="App ui container">
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
        <Footer
          key={2}
          page={this.state.pages[0]}
          onClickLast={this.handleLastWeek}
        />
      </div>
    );
  }
}

export default App;
