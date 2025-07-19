import "./App.scss";
import Feed from "./components/logic/feed";
import Friends from "./components/logic/friends";
import Login from "./components/logic/login";
import Profile from "./components/logic/profile";
import {Routes, Route } from "react-router-dom";
import LandingPage from "./components/logic/landingPage";

function App() {
  return (

    
    <Routes>
      <Route path="/" element={<Feed />} />
      <Route path="/friends" element={<Friends />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/landingPage" element={<LandingPage />} />
    </Routes>
  );
}

export default App;
