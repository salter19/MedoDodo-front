import "./styles/MyButton.css";
import React from "react";
import pagetypes from './pagetypes'
import buttontypes from './buttontypes'

class MyButton extends React.Component {
  state = { buttontype: '', errormsg: 'Where are we, asks button?', buttonText:'' }

  componentDidMount() {
    this.setState({ buttontype: this.props.buttontype })
    this.setButtonText();
  }

  setButtonText = () => {
    this.state.buttontype === buttontypes.category
      ? this.setState( { buttonText: this.props.category } )
      : this.setState( { buttonText: this.state.buttontype } )
  }

  changePage = () => {
    this.props.page === pagetypes.addTask || this.props.page === pagetypes.modifyTask
      ? this.props.onSave()
      : this.errorHandler();
    
    this.props.page === pagetypes.categories
      ? this.props.onClickCats()
       : this.errorHandler();
 
    this.props.page === pagetypes.weekly
      ? this.props.onClickWeeks()
      : this.errorHandler();

    this.state.buttontype === buttontypes.category
      ? this.props.onClickCat(this.props.category)
      : this.errorHandler()
  };

  errorHandler = () => {
    //console.log(`${this.state.errormsg} ${this.props.page}`)
  }

  render() {
    return (
      <div className="button">
        <button className={this.state.buttontype} onClick={this.changePage} >
          {this.state.buttontype}
        </button>
    </div>
      
    );
  }
}

export default MyButton;
