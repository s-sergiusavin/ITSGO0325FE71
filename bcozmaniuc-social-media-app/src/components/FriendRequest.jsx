import React, { useState } from 'react';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import styles from './FriendRequest.module.scss';

const FriendRequest = () => {
  const [responseStatus, setResponseStatus] = useState('none');


  const handleAccept = () => {
    setResponseStatus('accepted');
  };

  const handleDecline = () => {
    setResponseStatus('declined');
  };

  return (
    <div>
      {responseStatus === 'none' && (
        <div className={styles.acceptOrDecline}>
          <i
            className={styles.respondRequest}
            onClick={handleAccept}
            style={{ cursor: 'pointer' }}
            aria-label="Accept request"
          >
            <CheckIcon />
          </i>
          <i
            className={styles.respondRequest}
            onClick={handleDecline}
            style={{ cursor: 'pointer' }}
            aria-label="Decline request"
          >
            <ClearIcon />
          </i>
        </div>
      )}

      {responseStatus === 'accepted' && (
        <p className={styles.requestSentMessage}>Accepted</p>
      )}

      {responseStatus === 'declined' && (
        <p className={styles.requestDeclinedMessage}>Declined</p>
      )}
    </div>
  );
};


export default FriendRequest;