import "./styles/Footer.css";
import React from "react";

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
          <button className="footerbutton" onClick={this.props.onClickCats}>
            GO TO
            <br />
            CATEGORIES
          </button>
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
