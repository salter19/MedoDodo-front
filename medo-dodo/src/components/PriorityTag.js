import React from "react";
import priority_levels from './prioritylevels'

class PriorityTag extends React.Component {
  state = { tagColor: "", title: "", isChosen: false };

  componentDidMount() {
    this.setState({ 
      tagColor: this.getButtonStyle(this.props.priorityChosen), 
      title: this.getTitle(this.props.priority)});
  }
  getButtonStyle = (value) => {
    const last = priority_levels.length - 1;
    return (
        value === priority_levels[last] 
        ? "ui red button" 
        : value === priority_levels[last - 1]
        ? "ui yellow button"
        : value === priority_levels[last - 2]
        ? "ui green button"
        : "ui grey button"
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

    onInputChange = () => {
      if (!this.state.isChosen) {
        this.setState( { isChosen: true } )
      }

      this.props.onTagClick(this.props.priority)
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
