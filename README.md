# React-Concepts

- A place to store my understanding and note of React :sunny:
  <!-- Try to make it simple & only contain essential message -->

---

#### Function vs Class Components (& When to Use)

- Function components are components that only contain a render method and don’t have their own state. They take props as input and return only what should be rendered.

<!-- ```javascript
// Function components in arrow functions
const Welcome = props => {
  return <h1>Hello, {props.name}</h1>;
};

// Function components can also be created with the regular function keyword.
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
``` -->

- Class components are ES6 classes.

<!-- ```javascript
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

``` -->

|                                     | :bulb: Function Components :bulb:                                                                                                                              | :cactus: Class Components :cactus:                      |
| :---------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------ |
| Alias                               | 'dumb' or 'stateless' (only props, no state) components                                                                                                        | 'smart' or 'stateful' (both props and state) components |
| Main purpose                        | Presentational component to render UI                                                                                                                          | Dynamic component to implement logic and state          |
| Can accept and use props            | Yes                                                                                                                                                            | Yes                                                     |
| Has its own local state?            | No </br>(but can use React Hooks to manage state)                                                                                                              | Yes                                                     |
| Lifecycle methods                   | N/A </br> (but can use React Hooks)                                                                                                                            | Yes                                                     |
| render() method                     | No need                                                                                                                                                        | Required                                                |
| React Hooks </br> (from React 16.8) | Yes                                                                                                                                                            | N/A                                                     |
| Benefits                            | 1. Easier to read & write (less code) </br> 2. Easier to test (because they are plain JavaScript functions)</br> 3. May be a performance boost in future </br> |

**Conclusion**: Functional components are more preferable and should be used wherever possible(especially after the induction of React Hooks on React 16.8). Only change your function components to class components

---

# Future Topics

---

#### Why choose React?

#### Controlled vs Uncontrolled Elements

<!-- --- -->

#### Why we don't mutate states in React

<!-- --- -->

#### Props vs States

<!-- --- -->

#### How to convert from Function to Class Components

#### Lifecycle methods vs React Hooks

#### Why do we need to lift the state & How to do it

---

<!-- https://gist.github.com/rxaviers/7360908 -->

©2020 Ellie Chen - All Rights Reserved.

```

```
