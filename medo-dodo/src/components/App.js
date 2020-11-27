import "./App.css";
import React from "react";
import TextInputField from "./TextInputField";

class App extends React.Component {
  onTextFieldSubmit(term) {
    console.log(term);
  }
  render() {
    return (
      <div className="App">
        <TextInputField onSubmit={this.onTextFieldSubmit} />
      </div>
    );
  }
}

export default App;
