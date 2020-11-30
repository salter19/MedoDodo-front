import React from "react";
import Label from "./Label";

class DropDown extends React.Component {
  render() {
    return (
      <div className="drop-down">
        <div className="ui segment">
          <div className="ui grid">
            <div className="sixteen wide column">
              <Label
                labelName={this.props.labelName}
                textcolor={this.props.labelTextColor}
                labelAlign={this.props.labelAlign}
              />
            </div>
            <div className="ui row">
              <form className="ui form">
                <div className="fields">
                  <div className="field">
                    <select className="ui search dropdown">
                      <option value="">Choose category</option>
                      <option value="0">My Tasks</option>
                      <option value="1">School Stuff</option>
                      <option value="">Add new category</option>
                    </select>
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

export default DropDown;
