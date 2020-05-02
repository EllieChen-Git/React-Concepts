/////////////////////////////
// Constructor -> useState //
/////////////////////////////

// Class component - Constructor
import React, { Component } from 'react';
class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
    this.setMessage = this.setMessage.bind(this);
  }
  setMessage() {
    this.setState({ message: 'Hello World!' });
  }
  render() {
    return (
      <>
        <button onClick={this.setMessage}>Click</button>
        <p>{this.state.message}</p>
      </>
    );
  }
}

// Functional Component - useState
import React, { useState } from 'react';
function Message() {
  const [message, setMessage] = useState('');
  // React Hook: const [state, setState] = useState(initialState);
  // Declare a state variable 'message' to represent the 'current state' (of message)
  // setMessage is a function that update a piece of the state
  // The only argument to the useState() Hook is the 'initial state' (i.e. '' (empty string) in this case)
  return (
    <main>
      <button onClick={() => setMessage('Hello World!')}>Click</button>
      <p>{message}</p>
    </main>
  );
}
