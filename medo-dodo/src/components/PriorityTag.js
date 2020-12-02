import React from "react";

class PriorityTag extends React.Component {
  state = { tagColor: "", title: "" };

  componentDidMount() {
    this.setState({ tagColor: this.props.level, title: this.props.title });
  }

  render() {
    return (
      <div key={this.state.title} className="priority-tag">
        <div className={this.state.title}>
          <div className={this.state.tagColor}>{this.state.title}</div>
        </div>
      </div>
    );
  }
}

export default PriorityTag;
