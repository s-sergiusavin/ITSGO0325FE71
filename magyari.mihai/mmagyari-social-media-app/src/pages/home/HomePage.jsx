import useFetch from '../../hooks/useFetch';
import NewsFeed from '../feed/newsfeed/NewsFeed';
import styles from './HomePage.module.scss'


const HomePage = () => {


    const post = useFetch('')

    return <div className={styles.mainContainer}>
        <aside>Left Side (folosim componenta leftside)</aside>
        <section>
            {post?.map(post => {
                return <NewsFeed postData = {post} key={post.id}/>
            })}
        </section>
        <aside>Right Side (folosim componenta rightside)</aside>
    </div>
}

export default HomePage;