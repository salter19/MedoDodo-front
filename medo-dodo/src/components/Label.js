import "./Label.css";
import React from "react";

class Label extends React.Component {
  state = { name: "", textcolor: "black" };

  componentDidMount() {
    this.setState({
      name: this.props.labelName,
      textcolor: this.props.textcolor,
    });
  }
  render() {
    return <div className={this.state.textcolor}>{this.state.name}</div>;
  }
}
export default Label;
