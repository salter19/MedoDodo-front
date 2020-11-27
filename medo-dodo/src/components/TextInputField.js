import React from "react";

// TextInput is build using class component.
// In the future might refactor it into function component. TS
class TextInputField extends React.Component {
  state = { term: "What to do, dodo?" };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
    console.log(this.state.term);
  };

  onFormSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="text-input-field">
        <form className="form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>text input: </label>
            <input
              type="text"
              className="text-input"
              onChange={this.onInputChange}
              onClick={(e) => this.setState({ term: "" })}
              value={this.state.term}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default TextInputField;
