import React from "react";
import priority_levels from './prioritylevels'

class PriorityTag extends React.Component {
  state = { tagColor: "", title: "", isChosen: false };

  componentDidMount() {
    this.setState({ 
      tagColor: this.getButtonStyle(this.props.priority), 
      title: this.getTitle(this.props.priority)});
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

    onInputChange = () => {
      if (! this.state.isChosen) { 
        this.setState({ isChosen: true })
      }
    }

  render() {
    return (
      <div key={this.state.title} className="priority-tag">
        <div className={this.state.title}>
          <div className={this.state.tagColor} onClick={this.onInputChange}>
            {this.state.title}
          </div>
        </div>
      </div>
    );
  }
}

export default PriorityTag;
