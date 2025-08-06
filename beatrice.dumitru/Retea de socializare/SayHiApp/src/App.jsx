import React, { useState } from "react";
import "./styles/App.scss";
import "./styles/Login.scss";
import Login from "./components/Login";
import SidebarLeft from "./components/SidebarLeft";
import SidebarRight from "./components/SidebarRight";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import UserProfilePage from "./components/UserProfilePage";
import LandingPage from "./components/LandingPage";

const App = () => {
  const [user, setUser] = useState(null);
  const [currentPage, setCurrentPage] = useState("home");
  const [showLanding, setShowLanding] = useState(true);

  const handleLogin = (username) => {
    setUser(username);
  };

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  // Landing Page
  if (showLanding) {
    return <LandingPage onStart={() => setShowLanding(false)} />;
  }

  // Login 
  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  // Pagina principală
  return (
    <div className="app">
      <Navbar onNavigate={handleNavigation} />

      <main className="content">
        {currentPage === "home" && (
          <>
            <SidebarLeft onNavigate={handleNavigation} />
            <Feed />
            <SidebarRight />
          </>
        )}

        {currentPage === "profile-page" && (
          <UserProfilePage username={user} />
        )}
      </main>
    </div>
  );
};

export default App;
