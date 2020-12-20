import "./styles/App.css";
import React from "react";
import WeeklyView from "./WeeklyView";
import TaskView from "./TaskView";
import CategoriesView from "./CategoriesView";
import CategoryView from "./CategoryView";
import pagetypes from "./pagetypes";
import TaskGetter from "./ConnectToBackend";
import TaskRemover from "./TasksRemover";
import currentWeekNumber from "current-week-number";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: new Date(),
      showingYear: new Date().getFullYear(),
      currentWeek: currentWeekNumber(new Date()),
      showingWeek: currentWeekNumber(new Date()),
      currentPage: pagetypes.weekly,
      currentCategory: "",
      currentCatID: "",
      currentTaskID: null,
      allTasks: [],
      isDone: [],
    };
  }

  componentDidMount() {
    this.upDateTaskList();
  }

  async upDateTaskList() {
    const tasks = await TaskGetter.everyTask();
    this.setState({ allTasks: tasks });
  }

  setDone = (taskID) => {
    const arr = this.state.isDone;
    arr.push(taskID);
  }

  changeViewToAdd = () => {
    this.setState({ currentPage: pagetypes.addTask });
  };

  changeViewToModify = (taskID) => {
    this.setState({ currentPage: pagetypes.modifyTask, currentTaskID: taskID });
  };

  changeViewToCats = () => {
    this.setState({ currentPage: pagetypes.categories });
  };

  changeViewToCat = (cat, id) => {
    this.setState({
      currentPage: pagetypes.category,
      currentCategory: cat,
      currentCatID: id,
    });
  };

  changeViewToWeekly = () => {
    this.setState({ currentPage: pagetypes.weekly });
  };

  handleCatDelete = () => {
    if (this.confirmDelete("category")) {
      TaskRemover.removeCatByID(this.state.currentCatID, this.changeViewToCats);
    } else {
      console.log(
        "didn't want to delete after all: " + this.state.currentCatID
      );
    }
  };

  handleDelete = () => {
    if (this.confirmDelete("task")) {
      TaskRemover.removeByTaskID(
        this.state.currentTaskID,
        this.removeFromAllTasks
      );
      this.changeViewToWeekly()
    } else {
      console.log(
        "didn't want to delete after all: " + this.state.currentTaskID
      );
    }
  };

  confirmDelete(value) {
    let decision = window.confirm(
      `Do you really want to delete this ${value}?`
    );
    if (decision === true) {
      return true;
    } else {
      return false;
    }
  }

  removeFromAllTasks = () => {
    const list = [...this.state.allTasks];
    const updatedList = list.filter(
      (task) => task.id !== this.state.currentTaskID
    );
    this.setState({ allTasks: updatedList });
  };

  handleNextWeek = () => {
    const lastWeekOfYear = currentWeekNumber("12/31/" + this.state.showingYear);
    if (this.state.showingWeek === lastWeekOfYear) {
      this.setState({
        showingWeek: 1,
        showingYear: this.state.showingYear + 1,
      });
    } else {
      this.setState({ showingWeek: this.state.showingWeek + 1 });
    }
  };

  handleLastWeek = () => {
    let lastWeekLastYear = currentWeekNumber(
      "12/31/" + (this.state.showingYear - 1)
    );
    if (lastWeekLastYear === 1) {
      lastWeekLastYear = currentWeekNumber(
        "12/24/" + (this.state.showingYear - 1)
      );
    }
    if (this.state.showingWeek === 1) {
      this.setState({
        showingWeek: lastWeekLastYear,
        showingYear: this.state.showingYear - 1,
      });
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
          showingYear={this.state.showingYear}
          currentDate={this.state.currentDate}
          onClickNext={this.handleNextWeek}
          onClickLast={this.handleLastWeek}
          onClickAdd={this.changeViewToAdd}
          onClickCats={this.changeViewToCats}
          onClickTask={this.changeViewToModify}
          onClickDone={this.setDone}
          currentCategory={this.state.currentCategory}
          allTasks={this.state.allTasks}
        />
      );
    } else if (this.state.currentPage === pagetypes.addTask) {
      return (
        <TaskView
          title={this.state.currentPage}
          page={this.state.currentPage}
          date={this.state.currentDate}
          placeholder={"What to do, Dodo?"}
          description={"Elaborate..."}
          onSave={this.changeViewToWeekly}
          onSaveC={this.changeViewToCats}
        />
      );
    } else if (this.state.currentPage === pagetypes.modifyTask) {
      return (
        <TaskView
          title={this.state.currentPage}
          page={this.state.currentPage}
          date={this.state.currentDate}
          placeholder={"Here will be the task in question."}
          description={"And it's possible description..."}
          onSave={this.changeViewToWeekly}
          onSaveC={this.changeViewToCats}
          allTasks={this.state.allTasks}
          currentTaskID={this.state.currentTaskID}
          onDelete={this.handleDelete}
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
      );
    } else if (this.state.currentPage === pagetypes.category) {
      return (
        <CategoryView
          page={this.state.currentPage}
          date={this.state.currentDate}
          currentCategory={this.state.currentCategory}
          catID={this.state.currentCatID}
          onClickAdd={this.changeViewToAdd}
          onClickCats={this.changeViewToCats}
          onClickTask={this.changeViewToModify}
          onClickDone={this.setDone}
          onClickCat={this.changeViewToCat}
          currentCatID={this.state.currentCatID}
          onCatDelete={this.handleCatDelete}
        />
      );
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
      // this.checkView();
    }
  }

  render() {
    let view = this.checkView();
    return <div className="App ui container">{view}</div>;
  }
}

export default App;
