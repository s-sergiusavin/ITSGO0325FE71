import React from 'react';
import styles from './active.module.scss';

const Active = () => {
   return ( <ul className={styles.membersList}>
        <li>
            <img src="https://randomuser.me/api/portraits/women/4.jpg" alt="Irina Petrova" />
            <div>
                <span className={styles.name}>Irina Petrova</span>
                <span className={styles.time}>2 years ago</span>
            </div>
        </li>
        <li>
            <img src="https://randomuser.me/api/portraits/women/5.jpg" alt="Jennie Ferguson" />
            <div>
                <span className={styles.name}>Anca Dumitru</span>
                <span className={styles.time}>3 years ago</span>
            </div>
        </li>
        <li>
            <img src="https://randomuser.me/api/portraits/men/6.jpg" alt="Robert Cook" />
            <div>
                <span className={styles.name}>Robert Maurăr</span>
                <span className={styles.time}>3 years ago</span>
            </div>
        </li>
        <li>
            <img src="https://randomuser.me/api/portraits/women/7.jpg" alt="Sophia Lee" />
            <div>
                <span className={styles.name}>Sophia Dumitrescu</span>
                <span className={styles.time}>3 years ago</span>
            </div>
        </li>
    </ul>
)}

export default Active

