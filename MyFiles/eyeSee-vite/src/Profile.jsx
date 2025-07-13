import { useEffect, useState } from 'react';
import styles from './styles/Profile.module.scss';
import './styles/style.module.scss';

function Profile() {
  const [activeTab, setActiveTab] = useState('posts');
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    const editButton = document.querySelector('.editProfileButton');
    const modal = document.querySelector('.editModal');
    const closeModal = document.querySelector('.closeModal');

    if (editButton && modal && closeModal) {
      editButton.addEventListener('click', () => {
        modal.style.display = 'flex';
      });
      closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
      });
    }
  }, []);

  const toggleFollow = () => {
    setIsFollowing(prev => !prev);
  };

  return (
    <main className="profile-main">
      <section className="profile-card">
        <div className="profile-avatar">
          <img src="./assets/PROFILE.jpg" alt="Avatar" />
        </div>
        <div className="profile-info">
          <h2>Alexandra Predoiu</h2>
          <p>Frontend Developer | Romania</p>
          <div className="profile-actions">
            <button className="editProfileButton">Edit Profile</button>
            <button className="followButton" onClick={toggleFollow}>
              {isFollowing ? 'Unfollow' : 'Follow'}
            </button>
          </div>
        </div>
      </section>

      <div className="profile-tabs">
        <button onClick={() => setActiveTab('posts')} className={activeTab === 'posts' ? 'active' : ''}>Posts</button>
        <button onClick={() => setActiveTab('media')} className={activeTab === 'media' ? 'active' : ''}>Media</button>
        <button onClick={() => setActiveTab('likes')} className={activeTab === 'likes' ? 'active' : ''}>Likes</button>
      </div>

      <div className="profile-tab-content">
        {activeTab === 'posts' && <div className="profile-feed-card">This is your Posts tab content</div>}
        {activeTab === 'media' && <div className="profile-feed-card">This is your Media tab content</div>}
        {activeTab === 'likes' && <div className="profile-feed-card">This is your Likes tab content</div>}
      </div>

      <div className="editModal">
        <div className="editModalContent">
          <span className="closeModal">&times;</span>
          <h2>Edit Profile</h2>
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" placeholder="Alexandra Predoiu" />
            <label htmlFor="bio">Bio:</label>
            <textarea id="bio" placeholder="Frontend Developer | Romania"></textarea>
            <button type="submit">Save</button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Profile;
