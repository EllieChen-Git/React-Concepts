# React-Concepts

- Repo to share my understanding and note of React :sunny:
  <!-- Try to make it simple & only contain essential message -->

---

#### Function vs Class Components (& When to use them)

- **Class components** are ES6 classes.

- **Function components** are components that only contain a render method and don’t have their own state. They take props as input and return only what should be rendered.
  (Refer to ComponentTypes.js for examples of function & class components)

|                                     | :bulb: Function Components :bulb:                                                                                                                             | :cactus: Class Components :cactus:                      |
| :---------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------ | :------------------------------------------------------ |
| Alias                               | 'dumb' or 'stateless' (only props, no state) components                                                                                                       | 'smart' or 'stateful' (both props and state) components |
| Main purpose                        | Presentational component to render UI                                                                                                                         | Dynamic component to implement logic and state          |
| Can accept and use props            | Yes                                                                                                                                                           | Yes                                                     |
| Has its own local state?            | No </br>(but can use React Hooks to manage state)                                                                                                             | Yes                                                     |
| Lifecycle methods                   | N/A </br> (but can use React Hooks to achieve similar effects)                                                                                                | Yes                                                     |
| render() method                     | No need                                                                                                                                                       | Required                                                |
| React Hooks </br> (from React 16.8) | Yes                                                                                                                                                           | N/A                                                     |
| Benefits                            | 1. Easier to read & write (less code) </br> 2. Easier to test & debug (because they are plain JavaScript functions)</br> 3. Performance boost in future </br> |

**Conclusion**: Functional components are preferable and should be used wherever possible(especially after the introduction of React Hooks from React 16.8). Only convert function components to class components when needed.

---

#### Props vs States

---

#### Lifecycle methods vs React Hooks

---

<!-- --- -->

# Future Topics

#### Controlled vs Uncontrolled Elements

<!-- --- 考慮不寫 -->

#### How to convert from Function to Class Components

#### Why we don't mutate states in React

#### Why do we need to lift the state & How to do it

<!-- (ref tic-tac-toe) -->

---

<!-- https://gist.github.com/rxaviers/7360908 -->

©2020 Ellie Chen - All Rights Reserved.

<!-- ```javascript

``` -->
