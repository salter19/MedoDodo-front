import "./TextInputField.css";
import React from "react";

// TextInput is build using class component.
// In the future might refactor it into function component. TS
class TextInputField extends React.Component {
  state = { term: "", placeholder: this.props.placeholder };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="text-input-field">
        <form className="form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label className="label">{this.props.labelName}</label>
            <input
              type={this.props.type}
              className="text-input"
              placeholder={this.state.placeholder}
              onChange={this.onInputChange}
              onClick={(e) => this.setState({ term: "", placeholder: "" })}
              value={this.state.term}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default TextInputField;
