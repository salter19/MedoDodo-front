import "./styles/WeeklyView.css";
import React from "react";
import Header from "./Header";
import TasksWeekly from "./TasksWeekly";
import Footer from "./Footer";

export default class WeeklyView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.showingWeek !== this.props.showingWeek) {
     
    }
  }

  render() {
    return (
      <div>
        <Header
          key={1}
          weekNumber={this.props.currentWeek}
          page={this.props.page}
          showingWeek={this.props.showingWeek}
          showingYear={this.props.showingYear}
          date={this.props.currentDate}
          onClickNext={this.props.onClickNext}
          onClickLast={this.props.onClickLast}
        />
        <TasksWeekly
          showingWeek={this.props.showingWeek}
          showingYear={this.props.showingYear}
          onClickTask={this.props.onClickTask}
          allTasks={this.props.allTasks}
        />
        <Footer
          key={2}
          page={this.props.page}
          onClickRight={this.props.onClickAdd}
          onClickLeft={this.props.onClickCats}
        />
      </div>
    );
  }
}
