import React from "react";
import priority_levels from './prioritylevels'
class PriorityTag extends React.Component {
  state = { tagColor: "", title: "" };

  componentDidMount() {
    this.setState({ tagColor: this.props.level, title: this.props.title });
  }
  getButtonStyle = (value) => {
    return (
        value === priority_levels[2] 
        ? "ui red button" 
        : value === priority_levels[1]
        ? "ui yellow button"
        : "ui green button" )
    };
  
    getTitle = (value) => {
      return (
        value === priority_levels[2] 
        ? "HIGH" 
        : value === priority_levels[1]
        ? "MEDIUM"
        : "LOW" )
    };

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
