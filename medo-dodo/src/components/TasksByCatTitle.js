import "./styles/TasksWeekly.css";
import React from "react";
import TaskCard from "./TaskCard";
import TasksGetter from './TasksGetter'

class TasksByCat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      taskCards: [],
    };
  }

  readTasks = async() => {
    try {
      const everyCat = await TasksGetter.everyCat();
      console.log(everyCat)
      const tasksOfTheCat = await TasksGetter.byCategoryTitle('my_tasks')
      //const tasksOfTheCat = await TasksGetter.byCategoryTitle('my_tasks')
      this.setState({tasks: tasksOfTheCat})
      this.createCards()
      
    } catch (error) {
      alert("Problem with getting data!\nDid you remember to change to local in backend config?\n" + error);
    }
  };

  createCards = () => {
    const cards = this.state.tasks.map((e) => {
      return <TaskCard key={e.id} id={e.id} priority={e.priority} onClickTask={this.props.onClickTask}/>;
    });
    this.setState({ taskCards: cards });
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

export default TasksByCat