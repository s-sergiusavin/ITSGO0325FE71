import './App.css'
import Layout from './components/Layout'
import {Route, Routes} from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import AuthPage from './pages/auth/AuthPage';
import NotFound from './pages/NotFound';
import ProfilePage from './pages/auth/profile/ProfilePage';
import Blog from './pages/additionalPages/Blog';
import Jobs from './pages/additionalPages/Jobs';
import Groups from './pages/additionalPages/Groups';
import Marketplace from './pages/additionalPages/Marketplace';
import Friends from './pages/additionalPages/Friends';
import Profile from './pages/additionalPages/Profile';

function App() {

  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/auth' element={<AuthPage/>}/>
          <Route path='/profile/:id' element={<ProfilePage/>}></Route>
          <Route path='*' element={<NotFound/>}/>
          <Route path='/Blog' element={<Blog/>}></Route>
          <Route path='/Groups' element={<Groups/>}></Route>
          <Route path='/Marketplace' element={<Marketplace/>}></Route>
          <Route path='/Jobs' element={<Jobs/>}></Route>
          <Route path='/Friends' element={<Friends/>}></Route>
          <Route path='/Profile' element={<Profile/>}></Route>
        </Routes>
      </Layout>
    </>
  )
}

export default App
