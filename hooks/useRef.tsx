/**
 * useRef, like useState will keep state.
 * The key difference is that useRef will not triger re-render when state changes.
 *
 * const refContainer = useRef(initialValue);
 * useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue) => { current: initialValue }
 * The returned object will persist for the full lifetime of the component.
 * Essentially, useRef is like a “box” that can hold a mutable value in its .current property.
 */

import { useRef } from "react";

export const UseRefHook = () => {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
  };

  return (
    <>
      {/* Set focus on the input when button clicked */}
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
};
