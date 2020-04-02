///////////////////////////////////////
// componentWillUnmount -> useEffect //
///////////////////////////////////////

// Class component - componentWillUnmount
import React from 'react';

class Component extends React.Component {
  componentWillUnmount() {
    console.log(
      'Behaviour right before the component is removed from the DOM.'
    );
  }

  render() {
    return <h1>Hello World</h1>;
  }
}

// Functional Component - useEffect
import React, { useEffect } from 'react';

const Component = () => {
  useEffect(() => {
    return () => {
      // Similar to handle componentDidMount
      // The only difference is the return statement inside of the useEffect function body.
      console.log(
        'Behaviour right before the component is removed from the DOM.'
      );
    };
  }, []);

  return <h1>Hello World</h1>;
};
