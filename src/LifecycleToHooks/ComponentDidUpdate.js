/////////////////////////////////////
// componentDidUpdate -> useEffect //
/////////////////////////////////////

//  Class component - componentDidUpdate
import React from 'react';
class Component extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.foo !== prevProps.foo) {
      console.log(
        "Behavior when the component receives new state or props (In this case, the value of 'foo' changes.)"
      );
    }
  }
  render() {
    return <h1>Hello World</h1>;
  }
}

// Functional Component - useEffect
import React, { useEffect } from 'react';
const Component = () => {
  useEffect(() => {
    console.log('Behaviour when the component receives new state or props.');
  });
  // 1st arg: callback function
  // 2nd arg: an array of dependency values that will trigger the re-evaluation of the useEffect Hook (see the example of 'foo' below)
  // - If provided an empty array, it will only evaluate the Hook on mount.
  // - If the array is not provided (no 2nd arg), useEffect  will be  evaluated on every re-render of the component
  return <h1>Hello World</h1>;
};

// Functional Component - useEffect (with dependency)
const Component = ({ foo }) => {
  useEffect(() => {
    console.log("Behaviour when the value of 'foo' changes.");
  }, [foo]);
  return <h1>Hello World</h1>;
};
