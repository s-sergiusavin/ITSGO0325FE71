import styles from './HomePage.module.scss';
import useFetch from '../../hooks/useFetch';
import NewsFeed from '../feed/newsfeed/NewsFeed';
import LeftSide from '../feed/leftside/LeftSide'
import RightSide from '../feed/rightside/RightSide'

const HomePage = () => {

    const posts = useFetch('https://jsonplaceholder.typicode.com/posts');

    return <div className={styles.mainContainer}>
        <aside><LeftSide/></aside>
        <section className={styles.newsfeed}>
            {posts?.map( post => {
                return <NewsFeed postData={post} key={post.id}/>
            })}
        </section>
        <aside><RightSide/></aside>
    </div>
}

export default HomePage;