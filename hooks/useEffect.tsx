/**
 * Data fetching, subscriptions, or manually changing the DOM from React components operations are called “side effects”
 * (or “effects” for short) because they can affect other components and can’t be done during rendering.
 * The Effect Hook, useEffect, adds the ability to perform side effects from a function component.
 * When you call useEffect, you’re telling React to run your “effect” function after flushing changes to the DOM.
 * Effects are declared inside the component so they have access to its props and state.
 * By default, React runs the effects after every render — including the first render.
 */

// For example, this component sets the document title after React updates the DOM:
import React, { useState, useEffect } from "react";

function UseEffectHook() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Update the document titl using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}> Click me </button>
    </div>
  );
}

// Effects may also optionally specify how to “clean up” after them by returning a function.
// For example, this component uses an effect to subscribe to a friend’s online status, and cleans up by unsubscribing from it
function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null);

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    // React would unsubscribe from our ChatAPI when the component unmounts
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  if (isOnline === null) {
    return "Loading...";
  }
  return isOnline ? "Online" : "Offline";
}
