/**
 * useContext lets you subscribe to React context without introducing nesting.
 *
 * Accepts a context object (the value returned from React.createContext) and returns the current context value for that contex.
 * The current context value is determined by the value prop of the nearest <MyContext.Provider> above the calling component in the tree.
 *
 * When the nearest <MyContext.Provider> above the component updates, this Hook will trigger a rerender with the latest context value passed to that MyContext provider.
 * Even if an ancestor uses React.memo or shouldComponentUpdate, a rerender will still happen starting at the component itself using useContext.
 *
 * [Rendering]
 * A component calling useContext will always re-render when the context value changes.
 * If re-rendering the component is expensive, you can optimize it by using memoization.
 */

import React, { useContext } from "react";

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

// Create a context object with "dark" as the default value
// The default value argument is only used when a component does not have a matching Provider above it in the tree
const ThemeContext = React.createContext(themes.dark);
ThemeContext.displayName = "MyDisplayName"; // Component will appear as MyDisplayName in the DevTools

export const UseContextHook = () => {
  return (
    // Use a Provider to pass the current theme to the tree below
    // Any component can read it, no matter how deep it is
    // In this example, we're passing "dark" as the current value
    // All components that are descendants of a Provider will re-render whenever the Provider’s value prop changes
    <ThemeContext.Provider value={themes.dark}>
      <Toolbar />
    </ThemeContext.Provider>
  );
};

// A component in the middle doesn't have to pass the theme down explicitly anymore
const Toolbar = () => {
  return (
    <div>
      <ThemedButton />
    </div>
  );
};

const ThemedButton = () => {
  const theme = useContext(ThemeContext); // Argument to useContext must be the context object itself
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by there context
    </button>
  );
};
