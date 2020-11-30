import React from "react";
import "./Header.css";

export default class Head extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: this.props.page,
      showArrowButtons: false,
      headerMessage: "Header message",
      currentWeek: this.props.weekNumber,
      showingWeek: this.props.weekNumber,
    };
  }

  componentDidMount() {
    if (this.props.page === "weekly") {
      this.setState({
        showArrowButtons: true,
        headerMessage: "Week " + this.state.showingWeek.toString(),
      });
    } else if (this.props.page === "categories") {
      this.setState({ showArrowButtons: false, headerMessage: "Categories" });
    } else {
      this.setState({
        showArrowButtons: false,
        headerMessage: "Custom header message",
      });
    }
  }

  render() {
    return (
      <div className="box">
        {this.showButtonsAndMessage()}
        <p>Showing arrows: {this.state.showArrowButtons.toString()}</p>
        <p>Current week number is: {this.state.currentWeek}</p>
      </div>
    );
  }

  getFormattedDate(date) {
    const formatted =
      this.getDayOfTheWeek(date.getDay()) +
      " " +
      date.getDate() +
      " / " +
      date.getMonth() +
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
          <button>
            Last
            <br />
            Week
          </button>
        </div>
        {this.getMessage()}
        <div className="rightButton">
          <button>
            Next
            <br />
            Week
          </button>
        </div>
      </div>
    ) : (
      <div>{this.getMessage()}</div>
    );
  }

  getMessage() {
    return (
      <div className="headerMessage">
        <h1>{this.state.headerMessage}</h1>
        <br />
        Today is: {this.getFormattedDate(this.props.date)}
      </div>
    );
  }
}
