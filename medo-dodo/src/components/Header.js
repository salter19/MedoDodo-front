import "./styles/Header.css";
import React from "react";
import pagetypes from './pagetypes'

export default class Head extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showArrowButtons: false,
      headerMessages: [
        "Week " + this.props.showingWeek,
        "Categories",
        "Add new task",
        "Modify task",
      ],
      headerMessage: "Header message",
    };
    console.log(this.props.page);
  }

  defineHeaderMessage() {
    if (this.props.page === pagetypes.weekly) {
      this.setState({
        showArrowButtons: true,
        headerMessage: "Week " + this.props.showingWeek,
      });
    } else if (this.props.page === pagetypes.categories) {
      this.setState({
        showArrowButtons: false,
        headerMessage: this.state.headerMessages[1],
      });
    } else if (this.props.page === pagetypes.addTask) {
      this.setState({
        showArrowButtons: false,
        headerMessage: this.state.headerMessages[2],
      });
    } else {
      this.setState({
        showArrowButtons: false,
        headerMessage: "Custom header message",
      });
    }
  }

  componentDidMount() {
    this.defineHeaderMessage();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.showingWeek !== this.props.showingWeek) {
      console.log("something happened" + JSON.stringify(prevProps));
      this.defineHeaderMessage();
      console.log("header changed to " + this.state.headerMessage);
    }
  }

  render() {
    return (
      <div className="box">
        {this.showButtonsAndMessage()}
        <p>Showing buttons: {this.state.showArrowButtons.toString()}</p>
        <p>Current week number is: {this.props.weekNumber}</p>
      </div>
    );
  }

  getFormattedDate(date) {
    const formatted =
      this.getDayOfTheWeek(date.getDay()) +
      " " +
      date.getDate() +
      " / " +
      (date.getMonth() + 1) +
      " / " +
      date.getFullYear();
    return formatted;
  }

  getDayOfTheWeek(daynumber) {
    switch (daynumber) {
      case 0:
        return "Sunday";
      case 1:
        return "Monday";
      case 2:
        return "Tuesday";
      case 3:
        return "Wednesday";
      case 4:
        return "Thursday";
      case 5:
        return "Friday";
      case 6:
        return "Saturday";
      default:
        return "Current day";
    }
  }

  showButtonsAndMessage() {
    return this.state.showArrowButtons ? (
      <div className="container">
        <div className="leftButton">
          <button onClick={this.props.onClickLast}>
            Last
            <br />
            Week
          </button>
        </div>
        <div className="headerMessage">
          <h1>Week {this.props.showingWeek}</h1>
          <br />
          Today is: {this.getFormattedDate(this.props.date)}
        </div>
        <div className="rightButton">
          <button onClick={this.props.onClickNext}>
            Next
            <br />
            Week
          </button>
        </div>
      </div>
    ) : (
      this.getHeader()
    );
  }

  getHeader() {
    return (
      <div className="headerMessage">
        <h1>{this.state.headerMessage}</h1>
        <br />
        Today is: {this.getFormattedDate(this.props.date)}
      </div>
    );
  }
}
