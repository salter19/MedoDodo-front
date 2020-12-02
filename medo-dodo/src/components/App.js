import "./App.css";
import React from "react";
/*
import TextInputField from "./TextInputField";
import Header from "./Header.js";
import DueTime from "./DueTimeInput";
import PriorityTagList from "./PriorityTagList";
import DropDown from "./DropDown";
import Footer from "./Footer";
import TasksWeekly from "./TasksWeekly";
import TaskCard from "./TaskCard";
*/
import WeeklyView from "./WeeklyView";
import AddNewTaskView from "./AddNewTaskView";

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
  }

  componentDidMount() {
    console.log(this.state.currentDate);
  }

  onTextFieldSubmit(term) {
    console.log(term + ".");
  }

  changeViewToAdd = () => {
    this.setState({ currentPage: this.state.pages[2] });
    console.log("Currently we are on page " + this.state.currentPage);
  };

  changeViewToWeekly = () => {
    this.setState({ currentPage: this.state.pages[0] });
    console.log("Currently we are on page " + this.state.currentPage);
  };

  handleNextWeek = () => {
    if (this.state.showingWeek === 53) {
      this.setState({ showingWeek: 1 });
      console.log(this.state.showingWeek);
    } else {
      this.setState({ showingWeek: this.state.showingWeek + 1 });
      console.log(this.state.showingWeek);
    }
  };
  handleLastWeek = () => {
    if (this.state.showingWeek === 1) {
      this.setState({ showingWeek: 53 });
      console.log(this.state.showingWeek);
    } else {
      this.setState({ showingWeek: this.state.showingWeek - 1 });
      console.log(this.state.showingWeek);
    }
  };

  checkView() {
    if (this.state.currentPage === "weekly") {
      return (
        <WeeklyView
          currentWeek={this.state.currentWeek}
          page={this.state.pages[0]}
          showingWeek={this.state.showingWeek}
          currentDate={this.state.currentDate}
          onClickNext={this.handleNextWeek}
          onClickLast={this.handleLastWeek}
          onClickAdd={this.changeViewToAdd}
        />
      );
    } else if (this.state.currentPage === "addTask") {
      <AddNewTaskView />;
    } else {
      return (
        <div>
          <h1>Something went terribly wrong xD</h1>
          <button onClick={this.changeViewToWeekly}>Go back to weekly</button>
        </div>
      );
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentPage !== this.state.currentPage) {
      console.log("need to change view now");
      this.checkView();
    }
  }

  render() {
    let view = this.checkView();
    return (
      <div className="App ui container">
        {view}
        {/*}
        <WeeklyView
          currentWeek={this.state.currentWeek}
          page={this.state.pages[0]}
          showingWeek={this.state.showingWeek}
          currentDate={this.state.currentDate}
          onClickNext={this.handleNextWeek}
          onClickLast={this.handleLastWeek}
        />
    */}
        {/*
        <Header
          key={1}
          weekNumber={this.state.currentWeek}
          page={this.state.pages[0]}
          showingWeek={this.state.showingWeek}
          date={this.state.currentDate}
          onClickNext={this.handleNextWeek}
          onClickLast={this.handleLastWeek}
        />
        <TasksWeekly showingWeek={this.state.showingWeek} />
        <br />
        <TaskCard id="2" levelTitle="medium" />
        <br />
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
        */}
      </div>
    );
  }
}

export default App;
