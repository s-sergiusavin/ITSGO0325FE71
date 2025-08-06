import React from "react";
import "../styles/UserProfilePage.scss";
import myAvatar from "../assets/profil.png";

const userInfo = {
  fullName: "Beatrice Dumitru",
  username: "d.beatrice",
  bio: "Front-end Developer Junior",
  location: "Timișoara, România",
  email: "d.beatrice@email.com",
  joined: "June 2018",
};

const myPosts = [
  {
    id: 1,
    content: "My first React Project completed! 🧩",
    image: "https://camo.githubusercontent.com/bbe7de612e9bfab374f02c483e6f1b02fbde67e37d2c10d3b4ff1874ce042c95/68747470733a2f2f76617374757269616e6f2e6769746875622e696f2f72656163742d676c6f62652e676c2f6578616d706c652f736174656c6c697465732f707265766965772e706e67",
    date: "2025-07-20",
    likes: 124,
  },
  {
    id: 2,
    content: "A productive day of coding! 💻",
    image: "https://leadschool.in/wp-content/uploads/2022/04/shutterstock_1777292972.jpg",
    date: "2025-07-23",
    likes: 200,
  },
  {
    id: 3,
    content: "Today was a long day 😴",
    image: "https://www.shutterstock.com/image-photo/tired-business-woman-sleepy-bored-260nw-2142729487.jpg",
    date: "2025-07-25",
    likes: 80,
  },
  {
    id: 4,
    content: "A walk in nature 🌳🍃🍄",
    image: "https://medijobs.ro/wp-content/uploads/2019/02/5652.jpg",
    date: "2025-07-27",
    likes: 275,
  },
  {
    id: 5,
    content: "Nothing better than ice cream on a hot summer day 🍨",
    image: "https://static.vecteezy.com/system/resources/thumbnails/067/013/896/small/high-detail-frozen-dessert-in-soft-lighting-photo.jpg",
    date: "2025-07-30",
    likes: 130,
  },
  {
    id: 6,
    content: "I love Paris! ❤️",
    image: "https://a.storyblok.com/f/55469/1792x1342/45b0d67517/city_par_01.jpg/m/filters:format(webp)",
    date: "2025-08-02",
    likes: 300,
  },
];

const UserProfilePage = ({ username }) => {
  return (
    <div className="user-profile-page">
      <div className="profile-header">
        <img src={myAvatar} alt="Avatar" className="profile-avatar" />
        <div className="profile-info">
          <h2>{userInfo.fullName}</h2>
          <p className="username">@{userInfo.username}</p>
          <p className="bio">{userInfo.bio}</p>
          <p className="location">📍 {userInfo.location}</p>
          <p className="email">✉️ {userInfo.email}</p>
          <p className="joined">🗓 Joined: {userInfo.joined}</p>
        </div>
      </div>

      <h3 className="my-posts-title">Postările mele</h3>
      <div className="my-posts">
        {myPosts.map((post) => (
          <div key={post.id} className="profile-post">
            <img src={post.image} alt="Post" />
            <div className="post-details">
              <p>{post.content}</p>
              <span>{post.date} · ❤️ {post.likes} like{post.likes !== 1 && "s"}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserProfilePage;