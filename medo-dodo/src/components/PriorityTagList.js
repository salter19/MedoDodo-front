import "./styles/PriorityTagList.css";
import React from "react";
import Label from "./Label";
import PriorityTag from "./PriorityTag";
import priority_levels from './prioritylevels'

class PriorityTagList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { values: [], isChosen: priority_levels[priority_levels.length -1] };
  }
  componentDidMount() {
    const priorityTags = priority_levels.map((tag) => {
      return <PriorityTag key={tag} priority={tag} priorityChosen={this.state.isChosen} onTagClick={this.onPriorityTagClick}/>;
    });
    this.setState({ values: priorityTags });
  }

  onPriorityTagClick = (value) => {
    
    this.setState( { isChosen: value } )
  }

  render() {
    return (
      <div className="priority-tag-list">
        <div className="ui segment">
          <div className="ui grid">

            <div className="sixteen wide column">
              <Label labelName="Priority" labelAlign={this.props.labelAlign} />
            </div>

            <div className="ui row">
              <form className="ui form">
                <div className="fields">
                  <div className="field">
                    <div className="ui row flex container">
                      {this.state.values}
                    </div>
                  </div>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default PriorityTagList;
