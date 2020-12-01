import "./PriorityTag.css";
import React from "react";

class PriorityTag extends React.Component {
  state = { level: "", title: "" };

  componentDidMount() {
    this.setState({ level: this.props.level, title: this.props.title });
  }

  render() {
    return (
      <div key={this.state.title} className="priority-tag">
        <div className={this.state.title}>
          <div className={this.state.level}>{this.state.level}</div>
        </div>
      </div>
    );
  }
}

export default PriorityTag;
