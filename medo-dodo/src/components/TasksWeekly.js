import "./styles/TasksWeekly.css";
import React from "react";
import TaskCard from "./TaskCard";
import TasksGetter from "./ConnectToBackend";

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
    const cards = this.state.tasks.map((e) => {
      return (
        <TaskCard
          key={e.id}
          id={e.id}
          priorityLevel={e.priority}
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
    if (
      prevProps.showingWeek !== this.props.showingWeek ||
      prevProps.allTasks.length !== this.props.allTasks.length
    ) {
      this.readTasks();
    }
  }

  render() {
    const noTasks = this.showTasksIsEmpty();
    return (
      <div className="tasklist">
        <h1>Here we have tasks dued:</h1>

        {this.state.taskCards}
        {noTasks}
      </div>
    );
  }
}
