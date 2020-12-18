import "./styles/PriorityTagList.css";
import React from "react";
import Label from "./Label";
import PriorityButtons from './PriorityButtons'
import priority_levels from './prioritylevels'

class PriorityButtonRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { priority: priority_levels[priority_levels.length -1], tag: 'ui red tag label', priorityTitle: 'high'}
  }

  componentDidMount() {
    this.setTagDefault();
  }

  componentDidUpdate() {
    console.log("i changed!")
  }

  setLow = () => {
    this.setState({priority: priority_levels[0], tag: "ui green tag label", priorityTitle: 'low'} )
  }
  setMedium = () => {
    this.setState({priority: priority_levels[1], tag: "ui yellow tag label", priorityTitle: 'medium'})
  }
  setHigh = () => {
    this.setState({priority: priority_levels[2], tag: "ui red tag label", priorityTitle: 'high'})
  }

  setTagDefault = async() => {
    const defaultValue = await this.props.priorityValue
    defaultValue === priority_levels[0] 
    ? this.setLow()
    : defaultValue === priority_levels[1] 
    ? this.setMedium()
    : this.setHigh()
  }

  render() {
    return (
      <div className="priority-tag-list">
        <div className="ui segment">
          <div className="ui grid">

            <div className="sixteen wide column">
              <Label labelName="Priority" labelAlign={this.props.labelAlign} />
            </div>

            <div className="three wide row">
              <PriorityButtons 
                priorityL={this.setLow}
                priorityM={this.setMedium}
                priorityH={this.setHigh} 
              />
              
              <div className="tag">
                <div className={this.state.tag}>{this.state.priorityTitle}</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default PriorityButtonRow;
