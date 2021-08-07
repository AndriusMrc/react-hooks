/**
 * React will preserve this state between re-renders.
 * useState returns a pair of values: the current state value and a function that lets you update it. This is why we write const [count, setCount] = useState()
 * The only argument to useState is the initial state. In the example below, it is 0 because our counter starts from zero. It could be an object too.
 * The initial state argument is only used during the first render.
 * If we wanted to store two different values in state, we would call useState() twice.
 */

import React, { useState } from "react";

export const UseStateHook = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState(undefined);
  const [todos, setTodos] = useState([{ text: "Learn Hooks" }]);

  function handleButtonaClick() {
    setCount(count + 1);
    setName("Andy");
  }

  return (
    <div>
      <p>
        {name ? name : "You"} clicked {count} times
      </p>
      <button onClick={() => handleButtonaClick()}>Click me</button>
    </div>
  );
};
