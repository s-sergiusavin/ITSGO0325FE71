import "./App.scss";
import Feed from "./components/logic/feed";
import Friends from "./components/logic/friends";
import AuthPage from "./components/logic/LogIn/AuthPage";
import Profile from "./components/logic/profile";
import {Routes, Route } from "react-router-dom";
import LandingPage from "./components/logic/landingPage";
import GetNews from "./components/logic/getNews";

function App() {
  return (

    
    <Routes>
      <Route path="/" element={<Feed />} />
      <Route path="/friends" element={<Friends />} />
      <Route path="/Login" element={<AuthPage />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/landingPage" element={<LandingPage />} />
      <Route path="/getNews" element={<GetNews />} />
    </Routes>
  );
}

export default App;
