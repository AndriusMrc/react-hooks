/**
 * Sometimes you might want to debug certain values or properties, but doing so might require expensive operations which might impact performance.
 * useDebugValue is only called when the React DevTools are open and the related hook is inspected, preventing any impact on performance.
 *
 * [Formatting debug values]
 * useDebugValue accepts a formatting function as an optional second parameter.
 * This function is only called if the Hooks are inspected. It receives the debug value as a parameter and should return a formatted display value.
 * e.g. useDebugValue(date, date => date.toDateString());
 */

import { useDebugValue, useState } from "react";

export const UseDebugValueHook = () => {
  const [isOnline, setIsOnline] = useState(true);

  useDebugValue(isOnline ? "Online" : "Offline");

  return <div>{isOnline ? "I am Online" : "Offline fo now"}</div>;
};
