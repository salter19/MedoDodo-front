import "./styles/PriorityTagList.css";
import React from "react";
import Label from "./Label";
import PriorityTag from "./PriorityTag";
import priority_levels from './prioritylevels'

class PriorityTagList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { values: [] };
  }
  componentDidMount() {
    const priorityTags = priority_levels.map((tag) => {
      return <PriorityTag key={tag} priority={tag} />;
    });
    this.setState({ values: priorityTags });
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
