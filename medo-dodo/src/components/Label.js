import "./styles/Label.css";
import React from "react";

class Label extends React.Component {
  state = { name: "", textcolor: "black", align: "left" };

  componentDidMount() {
    this.setState({
      name: this.props.labelName,
      textcolor: this.props.textcolor,
      align: this.props.labelAlign,
    });
  }

  render() {
    return (
      <div className="label">
        <div className={this.state.align}>
          <div className={this.state.textcolor}>{this.state.name}</div>
        </div>
      </div>
    );
  }
}
export default Label;
