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
        <div className="footerCenter">
          <Button buttontype={buttontypes.categories} page={pagetypes.categories}/>
          <button className="footerbutton" onClick={this.props.onClickAdd}>
            ADD NEW
            <br />
            TASK
          </button>
        </div>
      </div>
    );
  }
}
