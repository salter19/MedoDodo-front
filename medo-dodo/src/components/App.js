import "./styles/App.css";
import React from "react";
/*
import Header from "./Header.js";
import Footer from "./Footer";
*/
import WeeklyView from "./WeeklyView";
import AddNewTaskView from "./AddNewTaskView";
import CatecoryView from './CategoryView'
import pagetypes from './pagetypes'

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
  }

  componentDidMount() {
    console.log(this.state.currentDate);
  }

  changeViewToAdd = () => {
    this.setState({ currentPage: pagetypes.addTask });
    console.log("Currently we are on page " + this.state.currentPage);
  };

  changeViewToCats = () => {
    this.setState({ currentPage: pagetypes.categories });
    console.log("cats was clicked!s")
  }

  changeViewToWeekly = () => {
    this.setState({ currentPage: pagetypes.weekly });
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
          onClickCats={this.changeViewToCats}
        />
      );
    } else if (this.state.currentPage === this.state.pages[2]) {
      return (
        <AddNewTaskView
          title={this.state.currentPage}
          pages={this.state.pages}
          page={this.state.currentPage}
          onSave={this.changeViewToWeekly}
        />
      );
    } else if (this.state.currentPage === this.state.pages[1]) {
      return (
        <CatecoryView 
          title={this.state.currentPage}
          pages={this.state.pages}
          page={this.state.currentPage}
        />
      )
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
      </div>
    );
  }
}

export default App;
