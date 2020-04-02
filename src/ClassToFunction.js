/////////////////////////////////////////////
// Change from Class to Function components//
/////////////////////////////////////////////

// Class component//
class Square extends React.Component {
  render() {
    return (
      <button className="square" onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}

// Functional component
const Square = props => {
  // Pass props as parameter here
  // remove 'render()' here
  return (
    // Change from 'this.props' to 'props'
    // onClick: change from '() => this.props.onClick()' to 'props.onClick'
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
};
