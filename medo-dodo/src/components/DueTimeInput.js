import React from "react";
import Label from "./Label";

class DueTimeInput extends React.Component {
  render() {
    return (
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
                  <input type="date"></input>
                </div>

                <div className="field">
                  <input type="time"></input>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default DueTimeInput;
