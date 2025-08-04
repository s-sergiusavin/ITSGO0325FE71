import React from "react";
import { useParams } from "react-router-dom";
import "../styles/UserProfile.scss";

const users = {
  0: { name: "Mihai Niculescu", age: 23, bio: "Creez aplicații web și iubesc muzica." },
  1: { name: "Maria Popescu", age: 24, bio: "Fotograf pasionat." }
};

const UserProfile = () => {
  const { id } = useParams();
  const user = users[id] || { name: "Anonim", age: "-", bio: "Profil indisponibil" };

  return (
    <div className="user-profile">
      <div className="card">
        <h2>{user.name}</h2>
        <p>Vârstă: {user.age}</p>
        <p>{user.bio}</p>
      </div>
    </div>
  );
};

export default UserProfile;
