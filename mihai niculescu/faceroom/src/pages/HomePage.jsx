
import React from "react";
import { useLocation } from "react-router-dom";
import LeftSidebar from "../components/LeftSidebar"; 
import RightSidebar from "../components/RightSidebar"; 
import NewsFeed from "../components/NewsFeed"; 
import "../styles/HomePage.scss";

const HomePage = () => {
  const location = useLocation();
  const username = location.state?.username || "Utilizator";

  return (
    <div className="home-page">
      <aside className="left"><LeftSidebar /></aside>
      <main><h2>Bine ai venit, {username}!</h2><NewsFeed /></main>
      <aside className="right"><RightSidebar /></aside>
    </div>
  );
};

export default HomePage;