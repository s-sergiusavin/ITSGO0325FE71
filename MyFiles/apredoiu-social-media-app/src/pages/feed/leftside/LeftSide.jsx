import styles from './LeftSide.module.scss';
import { AiOutlineEye } from 'react-icons/ai';
import { BsStars } from 'react-icons/bs';
import { RiGroupLine } from 'react-icons/ri';
import { MdOutlineLiveTv, MdRssFeed } from 'react-icons/md';
import { HiOutlineDotsHorizontal, HiOutlineBookmark } from 'react-icons/hi';
import { BsClockHistory } from 'react-icons/bs';
import { FiCompass } from 'react-icons/fi';

const LeftSide = () => {
  return (
    <div className={styles.left}>
      <ul className={styles.menu}>
        <li><AiOutlineEye /> <span>People eyeSEE</span></li>
        <li><BsStars /> <span>Third Eye Picks</span></li>
        <li><RiGroupLine /> <span>Vibe Zones</span></li>
        <li><MdOutlineLiveTv /> <span>eyeSEE TV</span></li>
        <li><HiOutlineDotsHorizontal /> <span>See more</span></li>
      </ul>

      <h4 className={styles.sectionTitle}>What eyeSEE</h4>
      <ul className={styles.shortcuts}>
        <li><HiOutlineBookmark /> <span>Saved Posts</span></li>
        <li><BsClockHistory /> <span>Moments I Remember</span></li>
        <li><FiCompass /> <span>Discover More</span></li>
      </ul>
    </div>
  );
};

export default LeftSide;
