# React-Concepts

- Repo to share my understanding and note of React :sunny:
  <!-- Try to make it simple & only contain essential message -->

---

#### Function vs Class Components (& When to use them)

- **Class components** are ES6 classes.

- **Function components** are components that only contain a render method and don’t have their own state. They take props as input and return only what should be rendered.

<i>(Refer to ComponentTypes.js: Examples of Function & Class components)</i>

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

**Conclusion**: Functional components are preferable and should be used wherever possible (especially after the introduction of React Hooks from React 16.8). Only convert function components to class components when needed.

---

#### Props vs States

**1. Passed to components vs Initialised within components:**

- Props are a component's configuration that can be passed from parent to child component (similar to function parameters).
- States are directly initialised and managed within the component (similar to variables declared within a function). State is private and fully controlled by the component, and it cannot be accessed/modified outside of the component.

**2. Static data vs dynamic data:**

- If you are building a static version of app, use props all the time and don’t use state.
- State is reserved only for interactivity (i.e. data that changes over time).

|                                                       | :bulb: Props :bulb: | :cactus: States :cactus: |
| :---------------------------------------------------: | :-----------------: | :----------------------: |
|                        Source                         |      external       |         internal         |
|               plain JavaScript objects                |         Yes         |           Yes            |
| hold information that influences the output of render |         Yes         |           Yes            |
|     Can get initial value from parent Component?      |         Yes         |           Yes            |
|          Can be changed by parent Component?          |         Yes         |            No            |
|       Can set default values inside Component?        |         Yes         |           Yes            |
|             Can change inside Component?              |         No          |           Yes            |
|      Can set initial value for child Components?      |         Yes         |           Yes            |
|            Can change in child Components?            |         Yes         |            No            |

**Conclusion**: If a component needs to alter one of its attributes at some point in time, that attribute should be part of its state, otherwise it should just be a prop for that Component.

---

#### Lifecycle methods vs React Hooks

![#](./public/lifecycle.JPG)

- **Lifecycle methods**: componentDidMount, componentDidUpdate, and componentWillUnmount (other lifecycle methods will be deprecated in React 17).

- **React Hooks**: useEffect, useState & others.

| :bulb: Class - Lifecycle Methods :bulb: | :cactus: Function - React Hooks (~ 16.8) :cactus: |
| :-------------------------------------: | :-----------------------------------------------: |
|                                         |                                                   |
|            componentDidMount            |               useEffect(()=>{}, [])               |
|           componentDidUpdate            |                 useEffect(()=>{})                 |
|          componentWillUnmount           |      useEffect(() => {return () => {} }, [])      |
|              Constructor()              |                    useState()                     |
|                  state                  |                    useState()                     |

- **Benefits of using React Hooks**

  **1. Less code**: In class components, any setup in 'componentDidMount' would have 'componentWillUnmount' in order to clean up. Using Hooks, there is no need to do this since the mounting and unmounting logic is enclosed inside the same function scope.

  **2. Better future React optimisations**

<i>(Refer to 'LifecycleToHooks' folder for code snippets & explanation)</i>

---

#### How to convert from Function to Class Components

1. Create an ES6 class, with the same name, that extends React.Component.
2. Add a single empty method to it called render().
3. Move the body of the function into the render() method.
4. Replace props with this.props in the render() body.
5. Delete the remaining empty function declaration.

<i>(Refer to ClassToFunction.js: How to convert from class to function component)</i>

---

<!-- --- -->

## Future Topics

#### Controlled vs Uncontrolled Elements

#### Why we don't mutate states (directly) in React

#### Why do we need to lift the state & How to do it

<!-- (ref tic-tac-toe) -->

---

##### References:

- React docs: https://reactjs.org/
- React Guide: https://github.com/uberVU/react-guide/blob/master/props-vs-state.md
- React lifecycle methods diagram: http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
- Replacing Component Lifecycle Methods with React Hooks: https://blog.carbonfive.com/2019/10/15/replacing-component-lifecycle-methods-with-react-hooks/

©2020 Ellie Chen - All Rights Reserved.
