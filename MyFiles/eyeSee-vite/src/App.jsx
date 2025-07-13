import { Routes, Route, Navigate } from 'react-router-dom';
import Feed from './Feed';
import Login from './Login';
import Profile from './Profile';
import LandingPage from './LandingPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/feed" element={<Feed />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/landingpage" element={<LandingPage />} />
    </Routes>
  );
}

export default App;
