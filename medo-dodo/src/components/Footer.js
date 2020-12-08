import "./styles/Footer.css";
import React from "react";
import Button from './Button'
import buttontypes from './buttontypes'
import pagetypes from './pagetypes'

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {}

  render() {
    return (
      <div className="box">
        <div className="footerCenter flex container">
          <Button buttontype={buttontypes.categories} page={pagetypes.categories} onClickCats={this.props.onClickRight} />
          <Button buttontype={buttontypes.addTask} page={pagetypes.addTask} onSave={this.props.onClickLeft} />
        </div>
      </div>
    );
  }
}
