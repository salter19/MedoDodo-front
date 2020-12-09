import "./styles/TasksWeekly.css";
import React from "react";
import TaskCard from "./TaskCard";
import TasksGetter from "./TasksGetter";

export default class TasksWeekly extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskCards: [],
    };
  }

  readTasks = async() => {
    try {
      const tasksOfTheWeek = await TasksGetter.byWeek(this.props.showingWeek)
      this.setState({tasks: tasksOfTheWeek})
      this.createCards()
      
    } catch (error) {
      alert("Problem with getting data!\nDid you remember to change to local in backend config?" + error);
    }
  };

  createCards = () => {
    const tmp = this.state.tasks.map((e) => {
      return <TaskCard key={e.id} id={e.id} priority={e.priority} onClickTask={this.props.onClickTask}/>;
    });
    this.setState({ taskCards: tmp });
  };

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
    return (
      <div className="tasklist">
        <h1>Here we have tasks dued:</h1>
        <ul>{this.state.taskCards}</ul>
      </div>
    );
  }
}
