import useFetch from "../../hooks/useFetch";
import NewsFeed from "../feed/newsfeed/NewsFeed";
import styles from "./HomePage.module.scss";

const HomePage = () => {

const posts = useFetch('https://jsonplaceholder.typicode.com/posts');

  return (
    <div className={styles.mainContainer}>
      <aside>Left Side (folosim comp leftside)</aside>
      <section className={styles.newsFeed}>
{posts?.map(post =>{
  return <NewsFeed postData={post} key={post.id}/>
})}

      </section>
      <aside >Right Side (folosim comp rightside)</aside>
    </div>
  );
};

export default HomePage;
