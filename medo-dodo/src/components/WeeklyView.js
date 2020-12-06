import "./WeeklyView.css";
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
      console.log("showing different week now");
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
          date={this.props.currentDate}
          onClickNext={this.props.onClickNext}
          onClickLast={this.props.onClickLast}
        />
        <TasksWeekly showingWeek={this.props.showingWeek} />
        <Footer key={2} onClickAdd={this.props.onClickAdd} />
      </div>
    );
  }
}
