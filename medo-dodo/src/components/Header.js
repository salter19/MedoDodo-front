import "./styles/Header.css";
import React from "react";
import pagetypes from "./pagetypes";

export default class Head extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showArrowButtons: false,
      headerMessages: [
        "Week " + this.props.showingWeek + " / " + this.props.showingYear,
        "Categories",
        "Add new task",
        "Modify task",
        this.props.catTitle,
      ],
      headerMessage: "Header message",
      currentWeekMsg: "",
    };
  }

  defineHeaderMessage() {
    if (this.props.page === pagetypes.weekly) {
      this.setState({
        showArrowButtons: true,
        headerMessage:
          "Week " + this.props.showingWeek + " / " + this.props.showingYear,
        currentWeekMsg: `Current week number is: ${this.props.weekNumber}`,
      });
    } else if (this.props.page === pagetypes.categories) {
      this.setState({
        showArrowButtons: false,
        headerMessage: this.state.headerMessages[1],
      });
    } else if (this.props.page === pagetypes.category) {
      this.setState({
        showArrowButtons: false,
        headerMessage: this.state.headerMessages[4],
      });
    } else if (this.props.page === pagetypes.addTask) {
      this.setState({
        showArrowButtons: false,
        headerMessage: this.state.headerMessages[2],
      });
    } else if (this.props.page === pagetypes.modifyTask) {
      this.setState({
        showArrowButtons: false,
        headerMessage: this.state.headerMessages[3],
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
      this.defineHeaderMessage();
    }
  }

  render() {
    return (
      <div className="box">
        {this.showButtonsAndMessage()}
        <p>{this.state.currentWeekMsg}</p>
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
          <button
            className="large ui inverted blue button"
            onClick={this.props.onClickLast}
          >
            <br />
            LAST
            <br />
            WEEK
            <br />
            <br />
          </button>
        </div>
        <div className="headerMessage">
          <h1>{this.state.headerMessage}</h1>
          <br />
          Today is: {this.getFormattedDate(this.props.date)}
        </div>
        <div className="rightButton">
          <button
            className="large ui inverted blue button"
            onClick={this.props.onClickNext}
          >
            <br />
            NEXT
            <br />
            WEEK
            <br />
            <br />
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
