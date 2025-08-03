import './App.css'
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/home/HomePage';
import AuthPage from './pages/auth/AuthPage';
import NotFound from './pages/NotFound';
import Profile from './pages/profile/Profile';
import LandingPage from './pages/landingpage/LandingPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='profile' element={<Profile />} />
        <Route path='landingpage' element={<LandingPage />} />
        <Route path='auth' element={<AuthPage />} />
      </Route>

      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
