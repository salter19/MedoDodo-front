import "./styles/TasksWeekly.css";
import React from "react";
import TaskCard from "./TaskCard";
import TasksGetter from "./ConnectToBackend";
import MyButton from "./MyButton";
import buttontypes from "./buttontypes";

class TasksByCatTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      header: "Here we have tasks dued:",
      tasks: [],
      taskCards: [],
    };
  }

  readTasks = async () => {
    try {
      const tasksOfTheCat = await TasksGetter.byCategoryTitle(
        this.props.catTitle
      );
      this.setState({ tasks: tasksOfTheCat });
      this.createCards();
    } catch (error) {
      alert(
        "Problem with getting data!\nDid you remember to change to local in backend config?\n" +
          error
      );
    }
  };

  createCards = () => {
    const cards = this.state.tasks.map((e) => {
      return (
        <TaskCard
          key={e.id}
          id={e.id}
          priorityLevel={e.priority}
          onClickTask={this.props.onClickTask}
          onClickDone={this.props.onClickDone}
          currentCategory={this.props.catTitle}
        />
      );
    });
    this.setState({ taskCards: cards });
  };

  componentDidMount() {
    this.readTasks();
  }

  showTasksIsEmpty() {
    if (this.state.taskCards.length === 0) {
      return (
        <div className="emptyContainer">
          <div className="ui segment">
            <div className="emptyWeek">
              <h2>There are no tasks in category {this.props.catTitle}</h2>
              <div>
                <MyButton
                  buttontype={buttontypes.deleteC}
                  page={this.props.page}
                  // onSave={this.props.onSave}
                  currentCatID={this.props.currentCatID}
                  onCatDelete={this.props.onCatDelete}
                />
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  render() {
    const noTasks = this.showTasksIsEmpty();
    return (
      <div className="tasklist">
        <h1>{this.state.header}</h1>
        {this.state.taskCards}
        {noTasks}
      </div>
    );
  }
}

export default TasksByCatTitle;
