////////////////////////////////////////////////
// Examples of Class and Functional Components//
////////////////////////////////////////////////

// Example - Class components
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

// Example - Function components can also be created with the regular function keyword.
function WelcomeTwo(props) {
  return <h1>Hello, {props.name}</h1>;
}

// Example - Function components in arrow functions
const Welcome = (props) => {
  return <h1>Hello, {props.name}</h1>;
};

// With arrow function components, '{return}' can be omitted as ()
const Welcome = (props) => <h1>Hello, {props.name}</h1>;
