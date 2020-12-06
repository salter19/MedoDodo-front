import "./TasksWeekly.css";
import React from "react";
import axios from "axios";
import TaskCard from "./TaskCard";


export default class TasksWeekly extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backendAddress: "https://dodo-fly-or-fly-not.herokuapp.com/tasks/",
      tasks: [],
      taskCards: [],
    };
  }

  readTasks = () => {
    axios.get(this.state.backendAddress).then(
      (response) => {
        this.setState({ tasks: response.data });

        this.createCards();
      },
      (error) => {
        alert("Problem with getting data! " + error);
      }
    );
  };

  createCards = () => {
    const tmp = this.state.tasks.map((e) => {
      return <TaskCard key={e.id} id={e.id} levelTitle="medium" />;
    });
    this.setState({ taskCards: tmp });
  };

  componentDidMount() {
    this.readTasks();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.showingWeek !== this.props.showingWeek) {
      console.log("showing different week now");
      this.readTasks();
      this.createCards();
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
        <h1>Here we have tasks dued:</h1>
        <ul>{this.state.taskCards}</ul>
      </div>
    );
  }
}
