import "./TasksWeekly.css";
import React from "react";
import TaskCard from "./TaskCard";
import Servers from './Servers'
import TasksGetter from "./TasksGetter";



export default class TasksWeekly extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backendAddress: Servers.local,
      tasks: [],
      taskCards: [],
    };
  }

  readTasks = () => {
    try {
      const tasksOfTheWeek = await TasksGetter.byWeek(this.props.showingWeek)
      this.setState({tasks: tasksOfTheWeek})
      this.createCards()
      
    } catch (error) {
      alert("Problem with getting data! " + error);
    }
  };

  createCards = () => {
    const tmp = this.state.tasks.map((e) => {
      return <TaskCard key={e.id} id={e.id} priority={e.priority} />;
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
