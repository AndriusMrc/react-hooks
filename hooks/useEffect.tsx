/**
 * Data fetching, subscriptions, or manually changing the DOM from React components operations are called “side effects”
 * (or “effects” for short) because they can affect other components and can’t be done during rendering.
 *
 * The Effect Hook, useEffect, adds the ability to perform side effects in function components.
 * When you call useEffect, you’re telling React to run your “effect” function after flushing changes to the DOM.
 *
 * Effects are declared inside the component so they have access to its props and state.
 * By default, React runs the effects after every render — including the first render.
 * You can use more than a single effect in a component.
 * React will apply every effect used by the component, in the order they were specified.
 *
 * [Two kinds of side effects]
 * There are two common kinds of side effects in React components: those that don’t require cleanup, and those that do.
 * If useEffect returns a function, React will run it when it is time to clean up
 * When exactly does React clean up an effect? React performs the cleanup when the component unmounts.
 * Effects run for every render and not just once. This is why React also cleans up effects from the previous render before running the effects next time.
 *
 * [Optimizing performance by skipping effects]
 * In some cases, cleaning up or applying the effect after every render might create a performance problem.
 * You can tell React to skip applying an effect if certain values haven’t changed between re-renders. To do so, pass an array as an optional second argument to useEffect
 *
 * [Run only once]
 * If you want to run an effect and clean it up only once (on mount and unmount), you can pass an empty array ([]).
 * This tells React that your effect doesn’t depend on any values from props or state, so it never needs to re-run.
 * If you pass an empty array ([]), the props and state inside the effect will always have their initial values.
 *
 * [Tips]
 * Use Multiple Effects to Separate Concerns.
 */

import React, { useState, useEffect } from "react";

// [Effects without cleanup] this component sets the document title after React updates the DOM
export const UseEffectHook = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, []); // Only run the effect once, on mount and unmount

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]); // [Optimization] Only re-run the effect if count changes

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}> Click me </button>
    </div>
  );
};

// [Effects with cleanup] this component uses an effect to subscribe to a friend’s online status,
// and cleans up by unsubscribing from it by returning a function
export const FriendStatus = (props) => {
  const [isOnline, setIsOnline] = useState(null);

  const handleStatusChange = (status) => {
    setIsOnline(status.isOnline);
  };

  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    // React would unsubscribe from our ChatAPI when the component unmounts
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  }, [props.friend.id]); // [Optimization] Only re-subscribe if props.friend.id changes

  if (isOnline === null) {
    return "Loading...";
  }
  return isOnline ? "Online" : "Offline";
};
