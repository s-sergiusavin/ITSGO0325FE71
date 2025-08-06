import React, { useState } from "react";
import "../styles/SidebarLeft.scss";
import myAvatar from "../assets/profil.png";

const myProfile = {
  name: "Tu",
  avatar: myAvatar,
};

const suggestedFriendsInitial = [
  { name: "Andreea", avatar: "https://i.pravatar.cc/150?img=21" },
  { name: "Robert", avatar: "https://i.pravatar.cc/150?img=22" },
  { name: "Ioana", avatar: "https://i.pravatar.cc/150?img=23" },
];

const groupsInitial = [
  { name: "Web Design", avatar: "https://i.pravatar.cc/40?img=31" },
  { name: "Java Script", avatar: "https://i.pravatar.cc/40?img=32" },
  { name: "Creativity", avatar: "https://i.pravatar.cc/40?img=33" },
  { name: "Coding Crew", avatar: "https://i.pravatar.cc/40?img=34" },
];

const SidebarLeft = ({ onNavigate }) => {
  const [friends, setFriends] = useState(
    suggestedFriendsInitial.map((f) => ({ ...f, requested: false }))
  );
  const [groups, setGroups] = useState(
    groupsInitial.map((g) => ({ ...g, joined: false }))
  );

  const handleAddFriend = (index) => {
    const updated = [...friends];
    updated[index].requested = true;
    setFriends(updated);
  };

  const handleJoinGroup = (index) => {
    const updated = [...groups];
    updated[index].joined = true;
    setGroups(updated);
  };

  return (
    <div className="sidebar left">
      {/* Profilul meu */}
      <div className="my-profile">
        <img src={myProfile.avatar} alt={myProfile.name} />
        <h3
          className="my-name"
          onClick={() => onNavigate("profile-page")}
          style={{ cursor: "pointer", color: "#ff6600" }}
        >
          @{myProfile.name}
        </h3>
      </div>

      {/* Sugestii de prieteni */}
      <section className="suggestions">
        <h3>Friend suggestions</h3>
        <ul>
          {friends.map((friend, index) => (
            <li key={index}>
              <img src={friend.avatar} alt={friend.name} />
              <span>{friend.name}</span>
              <button
                onClick={() => handleAddFriend(index)}
                disabled={friend.requested}
              >
                {friend.requested ? "Request sent" : "Add friend"}
              </button>
            </li>
          ))}
        </ul>
      </section>

      {/* Grupuri */}
      <section className="groups">
        <h3>Popular groups</h3>
        <ul>
          {groups.map((group, index) => (
            <li key={index}>
              <img src={group.avatar} alt={group.name} />
              <span>#{group.name}</span>
              <button
                onClick={() => handleJoinGroup(index)}
                disabled={group.joined}
              >
                {group.joined ? "Member" : "Join in"}
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default SidebarLeft;
