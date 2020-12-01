import React from "react";
import "./TasksWeekly.css";
import axios from "axios";

export default class TasksWeekly extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backendAddress: "http://localhost:8080/tasks/week/",
      tasks: [],
    };
  }

  readTasks = () => {
    axios.get(this.state.backendAddress + this.props.showingWeek).then(
      (response) => {
        this.setState({ tasks: response.data });
      },
      (error) => {
        alert("Problem with getting data! " + error);
      }
    );
  };

  componentDidMount() {
    this.readTasks();
    this.setState({ currentDate: new Date().toString });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.showingWeek !== this.props.showingWeek) {
      console.log("showing different week now");
      this.readTasks();
    }
  }

  render() {
    const tasks = this.state.tasks.map((task) => {
      return (
        <li key={task.id}>
          {task.id} {task.title} {task.due_date}
        </li>
      );
    });
    return (
      <div className="tasklist">
        <h1>Here we have tasks of Week {this.props.showingWeek}</h1>
        <ul>{tasks}</ul>
      </div>
    );
  }
}
