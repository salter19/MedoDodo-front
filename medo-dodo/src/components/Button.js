import "./styles/Button.css";
import React from "react";
import pagetypes from './pagetypes'

class Button extends React.Component {
  state = { buttontype: '', errormsg: 'Where are we, asks button?' }

  componentDidMount() {
    this.setState({ buttontype: this.props.buttontype })
  }
  changePage = () => {
    this.props.page === pagetypes.addTask
      ? this.props.onSave()
      : console.log(`${this.state.errormsg} ${this.props.page}`);
    
    this.props.page === pagetypes.categories
      ? this.props.onClickCats()
       : console.log(`${this.state.errormsg} ${this.props.page}`)
 
  };

  render() {
    return (
      <div className="button">
        <button className={this.state.buttontype} onClick={this.changePage}>
        {this.state.buttontype}
        </button>
    </div>
      
    );
  }
}

export default Button;
