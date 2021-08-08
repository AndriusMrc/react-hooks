/**
 * This is a chat message recipient picker that displays whether the currently selected friend is online or offline
 *
 * If we pick a different friend and update the recipientID state variable, our useFriendStatus Hook will unsubscribe
 * from the previously selected friend, and subscribe to the status of the newly selected one.
 */

import { useState } from "react";
import { useFriendStatus } from "./useFriendStatus";

const friendList = [
  { id: 1, name: "Phoebe" },
  { id: 2, name: "Rachel" },
  { id: 3, name: "Ross" },
];

export const ChatRecipientPicker = () => {
  const [recipientID, setRecipientID] = useState(1);
  const isRecipientOnline = useFriendStatus(recipientID);

  return (
    <>
      <div style={{ color: isRecipientOnline ? "green" : "black" }}>
        {isRecipientOnline ? "Online" : "Offline"}
      </div>
      <br />

      {/* Select a friend from drop down list and update recipientID */}
      <select
        value={recipientID}
        onChange={(e) => setRecipientID(Number(e.target.value))}
      >
        {friendList.map((friend) => (
          <option key={friend.id} value={friend.id}>
            {friend.name}
          </option>
        ))}
      </select>
    </>
  );
};
