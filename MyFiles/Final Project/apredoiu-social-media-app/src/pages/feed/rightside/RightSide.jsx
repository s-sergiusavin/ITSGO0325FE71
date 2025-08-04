import { useState } from 'react';
import styles from './RightSide.module.scss';
import profile from '../../../assets/images/profile.jpg';

const RightSide = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [mood, setMood] = useState('🌈 Inspired');

  const moods = [
    '😎 Confident',
    '🥱 Lazy',
    '🌈 Inspired',
    '👽 Weird',
    '🧘 Calm',
    '💣 Explosive',
    '😂 Goofy',
    '😡 Annoyed',
    '🤓 Focused'
  ];

  const toggleDropdown = () => {
    setShowDropdown(prev => !prev);
  };

  const handleMoodSelect = (selectedMood) => {
    setMood(selectedMood);
    setShowDropdown(false); 
  };

  return (
    <div className={styles.right}>
      <div className={styles.profileCard}>
        <img src={profile} alt="Alexandra Predoiu" />
        <div className={styles.profileInfo}>
          <h4>Alexandra Predoiu</h4>
          <span>Vision Creator</span>

          <button className={styles.profileButton} onClick={toggleDropdown}>
            Mood of today: {mood} ▾
          </button>

          {showDropdown && (
            <ul className={styles.moodDropdown}>
              {moods.map((m, index) => (
                <li key={index} onClick={() => handleMoodSelect(m)}>
                  {m}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className={styles.section}>
        <h3>Who to follow</h3>
        <ul className={styles.followList}>
          <li>
            <img src="https://i.pravatar.cc/40?img=1" alt="Maria Popescu" />
            <span>Maria Popescu</span>
          </li>
          <li>
            <img src="https://i.pravatar.cc/40?img=2" alt="Andrei Ionescu" />
            <span>Andrei Ionescu</span>
          </li>
          <li>
            <img src="https://i.pravatar.cc/40?img=3" alt="Dragos Radu" />
            <span>Dragos Radu</span>
          </li>
        </ul>
      </div>

      <div className={styles.section}>
        <h3>Trending</h3>
        <ul className={styles.trendingList}>
          <li>#webdevelopment</li>
          <li>#eyesee</li>
          <li>#reactvite</li>
          <li>#itschool</li>
        </ul>
      </div>
    </div>
  );
};

export default RightSide;
