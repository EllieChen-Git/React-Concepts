////////////////////////////////////
// componentDidMount -> useEffect //
////////////////////////////////////

// Class component - componentDidMount
import React from 'react';
class Component extends React.Component {
  componentDidMount() {
    console.log('Behaviour before the component is added to the DOM');
  }
  render() {
    return <h1>Hello World</h1>;
  }
}

// Functional Component - useEffect
import React, { useEffect } from 'react';
const Component = () => {
  useEffect(() => {
    console.log('Behaviour before the component is added to the DOM');
  }, []);

  // 1st arg: callback function
  // 2nd arg: [] (empty array) means useEffect only executes once (when the component mounts).
  return <h1>Hello World</h1>;
};
