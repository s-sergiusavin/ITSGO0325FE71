import PostCard from '../components/shared/PostCard';
import avatarImg from '../assets/profile.jpg';
import postImg from '../assets/friend1.jpg';

const Home = () => {
  const posts = [
    {
      id: 1,
      username: 'Alexandra Predoiu',
      avatar: avatarImg,
      content: { type: 'image', src: postImg },
      text: '🌟 Just testing eyeSEE — my new creative space!'
    },
    {
      id: 2,
      username: 'Mihai',
      avatar: avatarImg,
      content: { type: 'video', src: '/assets/sample-video.mp4' }, // make sure to place this in /public
      text: '🎮 Weekend gaming updates incoming...'
    },
    {
      id: 3,
      username: 'GuestUser001',
      avatar: avatarImg,
      content: { type: 'image', src: postImg },
      text: 'Trying out this new app 👁️✨'
    }
  ];

  return (
    <div className="home-feed" style={{ padding: '1rem' }}>
      {posts.map(post => (
        <PostCard
          key={post.id}
          username={post.username}
          avatar={post.avatar}
          content={post.content}
          text={post.text}
        />
      ))}
    </div>
  );
};

export default Home;
