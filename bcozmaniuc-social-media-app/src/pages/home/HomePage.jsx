import styles from './HomePage.module.scss';
import useFetch from '../../hooks/useFetch';
import NewsFeed from '../feed/newsfeed/NewsFeed';
import LeftSide from '../feed/leftside/LeftSide';
import RightSide from '../feed/rightside/RightSide';
import { useEffect, useState } from 'react';
import feedService from '../../services/feedService';

const HomePage = () => {

    // folositi logica aceasta daca  vreti datele vechi
    //  dar va trebui sa schimbati proprietatea description din Newsfeed 
    // {postData.body?.charAt(0).toUpperCase() + postData.body?.slice(1)}
    // in loc de {postData.description?.charAt(0).toUpperCase() + postData.description?.slice(1)}
    // si de folosit posts in loc de postList mai jos 
    const posts = useFetch('https://jsonplaceholder.typicode.com/posts');

    const [postList, setPostList] = useState([]);

    useEffect(() => {
        async function getPosts() {
            const response = await feedService.get()
            setPostList(response)
            return response;
        }

        getPosts().catch(error => {
            console.log(error);
        })
    }, [])

    return <div className={styles.mainContainer}>
        <aside className={styles.leftSide}><LeftSide></LeftSide></aside>
        <section className={styles.newsfeed}>
            {postList?.map(post => {
                return <NewsFeed postData={post} key={post.id} />
            })}

            {/* Decomentati mai jos si comentati mai sus daca vreti fara server */}
            {/* {posts?.map( post => {
                return <NewsFeed postData={post} key={post.id}/>
            })} */}
        </section>
        <aside className={styles.rightSide}><RightSide></RightSide></aside>
    </div>
}

export default HomePage;