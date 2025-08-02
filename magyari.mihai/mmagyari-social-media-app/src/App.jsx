import './App.css'
import Layout from './components/layout'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import AuthPage from './pages/auth/AuthPage'
import NotFound from './pages/NotFound'
import ProfilePage from './pages/profile/ProfilePage'

function App() {

  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/auth' element={<AuthPage />} />
          {/* <Route path='/profile/:id' element={<ProfilePage/>}/> */}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
