import "./PriorityTagList.css";
import React from "react";
import Label from "./Label";
import PriorityTag from "./PriorityTag";

class PriorityTagList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { values: [] };
  }
  componentDidMount() {
    let title = "";
    const priorityTags = this.props.tags.map((tag) => {
      title = this.setTitle(tag);
      return <PriorityTag level={title} title={tag} />;
    });
    this.setState({ values: priorityTags });
  }

  setTitle = (tag) => {
    if (tag === "high") {
      return "ui red button";
    } else if (tag === "medium") {
      return "ui yellow button";
    } else {
      return "ui green button";
    }
  };

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
