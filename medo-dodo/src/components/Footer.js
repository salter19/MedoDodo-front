import "./styles/Footer.css";
import React from "react";
import MyButton from "./MyButton";
import buttontypes from "./buttontypes";
import pagetypes from "./pagetypes";

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { buttons: "" };
  }

  componentDidMount() {
    this.setState({ buttons: this.setButtons() });
  }

  setButtons = () => {
    if (this.props.page === pagetypes.weekly) {
      return (
        <div className="flex container">
          <MyButton
            buttontype={buttontypes.categories}
            page={pagetypes.categories}
            onClickCats={this.props.onClickLeft}
          />
          <MyButton
            buttontype={buttontypes.addTask}
            page={pagetypes.addTask}
            onSave={this.props.onClickRight}
          />
        </div>
      );
    } else if (this.props.page === pagetypes.categories) {
      return (
        <div className="flex container">
          <MyButton
            buttontype={buttontypes.weekly}
            page={pagetypes.weekly}
            onClickWeeks={this.props.onClickLeft}
          />
          <MyButton
            buttontype={buttontypes.addTask}
            page={pagetypes.addTask}
            onSave={this.props.onClickRight}
          />
        </div>
      );
    } else if (this.props.page === pagetypes.category) {
      return (
        <div className="flex container">
          <MyButton
            buttontype={buttontypes.categories}
            page={pagetypes.categories}
            onClickCats={this.props.onClickLeft}
          />
          <MyButton
            buttontype={buttontypes.addTask}
            page={pagetypes.addTask}
            onSave={this.props.onClickRight}
          />
        </div>
      );
    } else if (this.props.page === pagetypes.addTask) {
      return (
        <div className="flex container">
          <MyButton
            buttontype={buttontypes.return}
            page={this.props.page}
            goBack={this.props.goBack}
          />
          <MyButton
            buttontype={buttontypes.save}
            page={this.props.page}
            onSave={this.props.onSave}
          />
        </div>
      );
    } else if (this.props.page === pagetypes.modifyTask) {
      return (
        <div className="flex container">
          <MyButton
            buttontype={buttontypes.delete}
            page={this.props.page}
            onSave={this.props.onSave}
            onDelete={this.props.onDelete}
          />
        </div>
      );
    }
  };
  componentDidUpdate(prevProps, prevState) {}

  render() {
    return <div className="box">{this.state.buttons}</div>;
  }
}
