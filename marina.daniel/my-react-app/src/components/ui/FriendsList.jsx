import './FriendsList.scss';
import profilePic from './profilePic.jpg';

const friends = [
  { id: 1, name: 'Florin', avatar: {profilePic} },
{ id: 2, name: 'Andrei', avatar: {profilePic} },
{ id: 3, name: 'Marian', avatar: {profilePic} },
  { id: 4, name: 'Anastasia', avatar: {profilePic} },
  { id: 5, name: 'Tanjiro', avatar: {profilePic} },
  { id: 6, name: 'Zenitsu', avatar: {profilePic} },
  { id: 7, name: 'Inosuke', avatar: {profilePic} },
];

function FriendsList() {
  return (
    <div className="friends-list-container">
      <h2>Friends</h2>
      <ul className="friends-list">
        {friends.map(friend => (
          <li key={friend.id} className="friend-item">
            <img
              src={profilePic}
              alt={''}
              className="friend-avatar"
            />
            <span>{friend.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FriendsList;