/**
 * useMemo will only recompute the memoized value when one of the dependencies has changed.
 * This optimization helps to avoid expensive calculations on every render.
 * If no array is provided, a new value will be computed on every render.
 * useMemo returns value of the function.
 *
 * [When to use]
 * Remember that the function passed to useMemo runs during rendering.
 * Don’t do anything there that you wouldn’t normally do while rendering. For example, side effects belong in useEffect, not useMemo.
 *
 * Write your code so that it still works without useMemo — and then add it to optimize performance.
 */

import { useMemo } from "react";

var a;
var b;

export const memoizedValue = useMemo(() => {
  return computeExpensiveValue(a, b);
}, [a, b]);

const computeExpensiveValue = (a, b) => {
  // Do something...
};
