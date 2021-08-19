/**
 * Pass an inline callback and an array of dependencies.
 * useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed.
 * This is useful when passing callbacks to child components that rely on reference equality to prevent unnecessary renders.
 * Every value referenced inside the callback should also appear in the dependencies array.
 *
 * [callback vs useMemo]
 * useCallback(fn, deps) is equivalent to useMemo(() => fn, deps).
 * callback returns function that can be called while useMemo returns value of the function. So if you need to pass parameters, use callback.
 */

import { useCallback } from "react";

var a;
var b;

export const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);

const doSomething = (a, b) => {
  // Do something...
};
