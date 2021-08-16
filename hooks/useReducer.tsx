/**
 * An alternative to useState.
 * useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one.
 * useReducer also lets you optimize performance for components that trigger deep updates because you can pass dispatch down instead of callbacks (you don't need to pass all different functions down).
 *
 * Accepts a reducer of type (state, action) => newState, and returns the current state paired with a dispatch method.
 * We call dispatch method when we want to update our state. Essentially it will call reducer function with passed parameters.
 * dispatch method accepts actions and all the variables needed to perform those actions (payload).
 *
 * [Lazy initialization]
 * You can also create the initial state lazily.
 * To do this, you can pass an init function as the third argument. The initial state will be set to init(initialArg).
 * It lets you extract the logic for calculating the initial state outside the reducer.
 * This is also handy for resetting the state later in response to an action
 *
 * [Bailing out of a dispatch]
 * If you return the same value from a Reducer Hook as the current state, React will bail out without rendering the children or firing effects. (React uses the Object.is comparison algorithm.)
 */

import { useReducer } from "react";

// Only accepts state and action
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      // Passing extra parameters
      // If passing as an object => action.payload.reducerNeedsIt
      return init(action.payload);
    default:
      throw new Error();
  }
};

const initialState = { count: 0 }; // Usually you will pass an object when working with reducer

export const UseReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, initialState); // Accepts a reducer of type (state, action) + initial state and returns new state and function called dispatch

  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "increment" })}>+</button>{" "}
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </>
  );
};

// Passing thired argument to useReducer hook
const init = (initialCount) => {
  return { count: initialCount };
};

export const UseReducerHookWithThirdArgument = ({ initialCount }) => {
  const [state, dispatch] = useReducer(reducer, initialCount, init); // The initial state will be set to init(initialArg)

  return (
    <>
      Count: {state.count}
      <button
        // To pass parameters to reducer, use 'payload:'. It can also be an object 'payload: { reducerNeedsIt: value, isBlaBla: true }
        onClick={() => dispatch({ type: "reset", payload: initialCount })}
      >
        Reset
      </button>
      {/* Make sure object key, in this case 'type:', matches switch check */}
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </>
  );
};
