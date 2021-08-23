/**
 * useImperativeHandle allows you to pass values and functions from a Child component back up to a Parent using a ref.
 * From there, the Parent can either use it itself or pass it to another Child.
 *
 * useImperativeHandle(ref, createHandle, [deps])
 *
 * [forwardRef]
 * Note that you can only pass a ref as a prop to a child that wraps its component in forwardRef.
 */

import { forwardRef, useImperativeHandle, useRef } from "react";

export const UseImperativeHandleHook = () => {
  const nestedInputRef = useRef();

  return (
    <div>
      <NestedInput ref={nestedInputRef} />
      <button
        onClick={() => {
          nestedInputRef.current.focusAndBlur();
        }}
      >
        Focus And Blur
      </button>
    </div>
  );
};

// 1. Wrap componennt in forwardRef (allows us to pass refs to nested components)
// 2. Pass forwardedRef argument from the parent component
// 3. Use useImperativeHandle hook with ref and content of that ref
const NestedInput = forwardRef((props, forwardedRef) => {
  const localInputRef = useRef();

  useImperativeHandle(forwardedRef, () => {
    // Returns content of the forwardedRef
    return {
      focusAndBlur: () => {
        localInputRef.current.focus(); // Focus
        setTimeout(() => {
          localInputRef.current.blur(); // Blur for 1 second
        }, 1000);
      },
    };
  });

  return <input ref={localInputRef} />;
});
