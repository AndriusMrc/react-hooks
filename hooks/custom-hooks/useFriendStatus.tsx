/**
 * A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks.
 *
 * Custom Hooks are a way to reuse stateful logic, not state itself.
 * Each call to a custom Hook has a completely isolated state — so you can even use the same custom Hook twice in one component.
 *
 */

import { useState, useEffect } from "react";

export const useFriendStatus = (friendID) => {
  const [isOnline, setIsOnline] = useState(null);

  const handleStatusChange = (status) => {
    setIsOnline(status.isOnline);
  };

  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
    };
  });

  return isOnline;
};
