import React, { useState } from 'react';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DoneAllIcon from '@mui/icons-material/DoneAll';

import styles from './Whotofollow.module.scss'

function MyComponent() {
  const [clicked, setClicked] = useState(false);

  return (
    <div>
      <i
        className={styles.addCelebrity}
        onClick={() => setClicked(!clicked)}
        style={{ cursor: 'pointer' }}
      >
        {clicked ? <DoneAllIcon /> : <PersonAddIcon />}
      </i>
    </div>
  );
}

export default MyComponent