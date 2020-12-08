import "./styles/SaveButton.css";
import React from "react";
import buttontypes from './buttontypes'

class SaveButton extends React.Component {
  state = { buttontype: '' }

  componentDidMount() {
    this.setState({ buttontype: this.props.buttontype })
  }
  changePage = () => {
    this.props.page === buttontypes.addTask
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
