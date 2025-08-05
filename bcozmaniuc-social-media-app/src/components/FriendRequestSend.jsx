import React, { useState } from 'react';
import styles from './FriendRequestSend.module.scss';

const FriendRequestButton = () => {
  const [requested, setRequested] = useState(false);

  const handleClick = () => {
    setRequested(true);
  };

  return (
    <button
      className={requested ? styles.requestSent : styles.sendFriendRequest}
      onClick={handleClick}
      disabled={requested} 
    >
      {requested ? 'Request sent' : 'Send friend request'}
    </button>
  );
};

export default FriendRequestButton;