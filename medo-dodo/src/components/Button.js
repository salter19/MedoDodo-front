import "./styles/Button.css";
import React from "react";
import buttontypes from './buttontypes'

class Button extends React.Component {
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
      <button className={this.state.buttontype} onClick={this.changePage}>
        {this.state.buttontype}
      </button>
    );
  }
}

export default Button;
