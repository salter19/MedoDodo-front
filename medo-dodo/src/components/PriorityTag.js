import React from "react";
import priority_levels from './prioritylevels'

class PriorityTag extends React.Component {
  state = { tagColor: "", title: ""};

  componentDidMount() {
    this.setState({ 
      tagColor: this.getTagColor(this.props.priorityChosen), 
      title: this.getTitle(this.props.priorityChosen)
    });
  }
  getTagColor = (value) => {
    
    return (
      value === priority_levels[2]
      ? "ui red tag label" 
      : value === priority_levels[1]
      ? "ui yellow tag label"
      : "ui green tag label"
      )
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
          <div className={this.state.tagColor} >
            {this.state.title}
          </div>
        </div>
      </div>
    );
  }
}

export default PriorityTag;
