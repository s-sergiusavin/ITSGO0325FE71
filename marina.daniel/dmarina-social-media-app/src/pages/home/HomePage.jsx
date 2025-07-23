import styles from './HomePage.module.scss';
import useFetch from '../../hooks/useFetch';

const HomePage = () => {
    return <div className={styles.mainContainer}>
        <aside>Left Side (folosim componenta leftside)</aside>
        <section>
            
        </section>
        <aside>Right side</aside>
    </div>
}

export default HomePage;