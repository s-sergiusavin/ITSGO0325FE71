import './App.css'
import Layout from './components/Layout'
import {Route, Routes} from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import AuthPage from './pages/auth/AuthPage';
import NotFound from './pages/NotFound';

function App() {

  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/auth' element={<AuthPage/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </Layout>
    </>
  )
}

export default App
