import styles from './HomePage.module.scss';
import useFetch from '../../hooks/useFetch';
import NewsFeed from '../feed/newsfeed/NewsFeed';

const HomePage = () => {

    const posts = useFetch('https://jsonplaceholder.typicode.com/posts');

    return <div className={styles.mainContainer}>
        <aside className={styles.leftContent}>Left Side (folosim componenta leftside)</aside>
        <section>
            {posts?.map(post => {
                return <NewsFeed postData={post} key={post.id} />
            })}
        </section>
        <aside className={styles.rightContent}>Right side</aside>
    </div>
}

export default HomePage;