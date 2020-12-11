import "./styles/App.css";
import React from "react";
/*
import Header from "./Header.js";
import Footer from "./Footer";
*/
import WeeklyView from "./WeeklyView";
import TaskView from "./TaskView";
import CategoriesView from './CategoriesView'
import CategoryView from './CategoryView'
import pagetypes from './pagetypes'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: new Date(),
      currentWeek: 49,
      showingWeek: 49,
      currentPage: pagetypes.weekly,
      currentCategory: '',
    };
  }

  componentDidMount() {
    console.log(this.state.currentDate);
  }

  changeViewToAdd = () => {
    this.setState({ currentPage: pagetypes.addTask });
  };
  
  changeViewToModify = () => {
    this.setState({ currentPage: pagetypes.modifyTask });
  };

  changeViewToCats = () => {
    this.setState({ currentPage: pagetypes.categories });
  }

  changeViewToCat = (cat) => {
    this.setState({ currentPage: pagetypes.category, currentCategory: cat });
  }

  changeViewToWeekly = () => {
    this.setState({ currentPage: pagetypes.weekly });
  };

  handleNextWeek = () => {
    if (this.state.showingWeek === 53) {
      this.setState({ showingWeek: 1 });
    } else {
      this.setState({ showingWeek: this.state.showingWeek + 1 });
    }
  };
  handleLastWeek = () => {
    if (this.state.showingWeek === 1) {
      this.setState({ showingWeek: 53 });
    } else {
      this.setState({ showingWeek: this.state.showingWeek - 1 });
    }
  };

  checkView() {
    if (this.state.currentPage === pagetypes.weekly) {
      return (
        <WeeklyView
          currentWeek={this.state.currentWeek}
          page={this.state.currentPage}
          showingWeek={this.state.showingWeek}
          currentDate={this.state.currentDate}
          onClickNext={this.handleNextWeek}
          onClickLast={this.handleLastWeek}
          onClickAdd={this.changeViewToAdd}
          onClickCats={this.changeViewToCats}
          onClickTask={this.changeViewToModify}
        />
      );
    } else if (this.state.currentPage === pagetypes.addTask) {
      return (
        <TaskView
          title={this.state.currentPage}
          page={this.state.currentPage}
          date={this.state.currentDate}
          placeholder={'What to do, Dodo?'}
          description={'Elaborate...'}
          onSave={this.changeViewToWeekly}
        />
      );
    } else if (this.state.currentPage === pagetypes.modifyTask) {
      return (
        <TaskView
          title={this.state.currentPage}
          page={this.state.currentPage}
          date={this.state.currentDate}
          placeholder={'Here will be the task in question.'}
          description={'And it\'s possible description...'}
          onSave={this.changeViewToWeekly}
        />
      );
    } else if (this.state.currentPage === pagetypes.categories) {
      return (
        <CategoriesView 
          page={this.state.currentPage}
          date={this.state.currentDate}
          onClickAdd={this.changeViewToAdd}
          onClickWeeks={this.changeViewToWeekly}
          onClickTask={this.changeViewToModify}
          onClickCat={this.changeViewToCat}
        />
      )
    } else if (this.state.currentPage === pagetypes.category) {
      return (
        <CategoryView 
          page={this.state.currentPage}
          date={this.state.currentDate}
          title={this.state.currentCategory}
          onClickAdd={this.changeViewToAdd}
          onClickCats={this.changeViewToCats}
          onClickTask={this.changeViewToModify}
          onClickCat={this.changeViewToCat}
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
