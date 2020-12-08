import "./styles/Button.css";
import React from "react";
import buttontypes from './buttontypes'
import pagetypes from './pagetypes'

class Button extends React.Component {
  state = { buttontype: '' }

  componentDidMount() {
    this.setState({ buttontype: this.props.buttontype })
  }
  changePage = () => {
    console.log(`We are now at Button and in page: ${this.props.page}`)
    this.props.page === pagetypes.addTask
      ? this.props.onSave()
      : console.log(`where are we? ${this.props.page}`);
    
    this.props.page === pagetypes.categories
      ? console.log(`we are finally at ${this.props.page}`)
      : console.log(`Still no idea where we are: ${this.props.page}`)
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
