import "./styles/MyButton.css";
import React from "react";
import pagetypes from "./pagetypes";
import buttontypes from "./buttontypes";

class MyButton extends React.Component {
  state = {
    buttontype: "",
    errormsg: "Where are we, asks button?",
    buttonText: "",
  };

  componentDidMount() {
    this.setState({ buttontype: this.props.buttontype });
    this.setButtonText();
  }

  setButtonText = () => {
    if (this.props.buttontype === buttontypes.category) {
      this.setState({ buttonText: this.props.category });
    } else if (this.props.buttontype === buttontypes.modify) {
      this.setState({ buttonText: ["MODIFY", <br />, "TASK"] });
    } else if (this.props.buttontype === buttontypes.addTask) {
      this.setState({ buttonText: ["ADD NEW", <br />, " TASK"] });
    } else if (this.props.buttontype === buttontypes.categories) {
      this.setState({ buttonText: ["CATEGORIES", <br />, "VIEW"] });
    } else if (this.props.buttontype === buttontypes.weekly) {
      this.setState({ buttonText: ["WEEKLY", <br />, "VIEW"] });
    } else {
      this.setState({ buttonText: this.props.buttontype });
    }
  };

  changePage = () => {
    this.props.page === pagetypes.addTask ||
    this.props.page === pagetypes.modifyTask
      ? this.props.onSave()
      : this.errorHandler();

    this.props.page === pagetypes.categories
      ? this.props.onClickCats()
      : this.errorHandler();

    this.props.page === pagetypes.weekly
      ? this.props.onClickWeeks()
      : this.errorHandler();

    this.state.buttontype === buttontypes.category
      ? this.props.onClickCat(this.props.category, this.props.catID)
      : this.errorHandler();

    this.state.buttontype === buttontypes.modify
      ? this.props.onClickTask(this.props.taskID)
      : this.errorHandler();

    this.state.buttontype === buttontypes.delete
      ? this.props.onDelete(this.props.taskID)
      : this.errorHandler();

    this.state.buttontype === buttontypes.deleteC
      ? this.props.onCatDelete(this.props.currentCatID)
      : this.errorHandler();
  };

  errorHandler = () => {
    //console.log(`${this.state.errormsg} ${this.props.page}`)
  };

  render() {
    return (
      <div className="button">
        <button className={this.state.buttontype} onClick={this.changePage}>
          <div>{this.state.buttonText}</div>
        </button>
      </div>
    );
  }
}

export default MyButton;
