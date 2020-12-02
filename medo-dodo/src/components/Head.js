import React from "react";

export default class Head extends React.Component {
  render() {
    return (
      <div className="head">
        <div className="ui inverted segment">
          <h2 className="ui  top attached green inverted header">
            {this.props.pagetitle}
          </h2>
        </div>
      </div>
    );
  }
}
