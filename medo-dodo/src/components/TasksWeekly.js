import "./styles/TasksWeekly.css";
import React from "react";
import TaskCard from "./TaskCard";
import TasksGetter from "./TasksGetter";

export default class TasksWeekly extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskCards: [],
      tasks: [],
    };
  }

  readTasks = async () => {
    try {
      const tasksOfTheWeek = await TasksGetter.byWeek(
        this.props.showingWeek,
        this.props.showingYear
      );
<<<<<<< HEAD
=======

>>>>>>> 069eccc (Remove from TasksWeekly: redundant comments and console.logs.)
      this.setState({ tasks: tasksOfTheWeek });
      this.createCards();
    } catch (error) {
      alert(
        "Problem with getting data!\nDid you remember to change to local in backend config?" +
          error
      );
    }
  };

  createCards = () => {
<<<<<<< HEAD
=======
     
>>>>>>> 069eccc (Remove from TasksWeekly: redundant comments and console.logs.)
    const cards = this.state.tasks.map((e) => {
      return (
        <TaskCard
          key={e.id}
          id={e.id}
          priority={e.priority}
          onClickTask={this.props.onClickTask}
        />
      );
    });
    this.setState({ taskCards: cards });
  };

  showTasksIsEmpty() {
    if (this.state.taskCards.length === 0) {
      return (
        <div className="emptyContainer">
          <div className="ui segment">
            <div className="emptyWeek">
              <h2>There are no tasks in week {this.props.showingWeek}</h2>
            </div>
          </div>
        </div>
      );
    }
  }

  componentDidMount() {
    this.readTasks();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.showingWeek !== this.props.showingWeek) {
      this.readTasks();
      this.createCards();
    }
  }

  render() {
    const noTasks = this.showTasksIsEmpty();
    return (
      <div className="tasklist">
        <h1>Here we have tasks dued:</h1>
        <ul>
          {this.state.taskCards}
          {noTasks}
        </ul>
      </div>
    );
  }
}
