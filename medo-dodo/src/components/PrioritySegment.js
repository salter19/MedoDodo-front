import "./styles/PriorityTagList.css";
import React from "react";
import PriorityButtons from './PriorityButtons'
import priority_levels from './prioritylevels'

class PrioritySegment extends React.Component {
  constructor(props) {
    super(props);
    this.state = { priority: priority_levels[2], tagTitle: 'ui red tag label', priorityTitle: 'high', tag: []}
  }

  componentDidMount() {
    this.setTagDefault();
  }

  componentDidUpdate() {
    this.props.onPriorityChange(this.state.priority);
  }
  
  setLow = () => {
    this.setState({priority: priority_levels[0], tagTitle: "ui green tag label", priorityTitle: 'low'} )    
  }
  setMedium = () => {
    this.setState({priority: priority_levels[1], tagTitle: "ui yellow tag label", priorityTitle: 'medium'})
  }
  setHigh = () => {
    this.setState({priority: priority_levels[2], tagTitle: "ui red tag label", priorityTitle: 'high'})
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
          <div className="ui form">
            <div className="field">

              <label className="label">Priority</label>

              <div className="ui grid">
                <div className="three wide row">
                  <PriorityButtons
                    className="button-row"
                    priorityL={this.setLow}
                    priorityM={this.setMedium}
                    priorityH={this.setHigh} 

                  />
                  
                  <div className="tag">
                    <div className={this.state.tagTitle}>{this.state.priorityTitle}</div>
                  </div>

                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default PrioritySegment;
