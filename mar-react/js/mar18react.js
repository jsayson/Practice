import * as React from 'react';
import { Component } from 'react';


class MyComponent extends Component{
	constructor(props) {
    super(props);
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput() {
    // Explicitly focus the text input using the raw DOM API
    this.textInput.focus();
  }

  render() {
    // Use the `ref` callback to store a reference to the text input DOM
    // element in an instance field (for example, this.textInput).
    return (
      <div>
        <input type="text" ref={(input) => { this.textInput = input; }} />
        
      </div>
    );
  }
}

class AutoFocusTextInput extends Component {
  componentDidMount() {
    this.textInput.focusTextInput();
  }

  render() {
    return (
      <MyComponent ref={(input) => { this.textInput = input; }} />
    );
  }
}



export default AutoFocusTextInput;
