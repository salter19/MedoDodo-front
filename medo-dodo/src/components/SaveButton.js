import "./styles/SaveButton.css";
import React from "react";

class SaveButton extends React.Component {
  changePage = () => {
    this.props.page === "addTask"
      ? this.props.onSave()
      : console.log(`where are we? ${this.props.page}`);
  };

  render() {
    return (
      <button className="save-button" onClick={this.changePage}>
        Save
      </button>
    );
  }
}

export default SaveButton;
