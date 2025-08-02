import './App.scss'
<<<<<<< HEAD
import Features from './components/logic/Features'
import Light from './components/ui/Light'
import Room from './components/ui/Room';
import Ac from './components/ui/Ac';

function App() {
  let [lightsOn, setLightsOn] = useState(false)
  let [acOn, setAcOn] = useState(false)

  const toggleActionHandler = (name) => {
    if (name === 'Toggle lights') {
      setLightsOn(!lightsOn)
    }
    if (name === 'Toggle ac') {
      setAcOn(!AcOn)
    }
  }



  /**
   * Destructuring explained
   */
=======
import FeaturesForm from './components/logic/FeaturesForm';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import SmartHome from './components/logic/SmartHome';
import Welcome from './components/logic/Welcome';
import NotFound from './components/logic/NotFound';
import { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import DevicesIcon from '@mui/icons-material/Devices';
import AddToQueueIcon from '@mui/icons-material/AddToQueue';
import useFetch from './hooks/use-fetch';
import useAxios from './hooks/use-axios';

function App() {
  const [feature, setFeature] = useState({
    name: '',
    action: '',
    state: false,
    id: 0
  });

  const usersUrl = 'https://reqres.in/api/users?page=2';
  const users = useFetch(usersUrl);
  const {data, loading, error} = useAxios(usersUrl);

  const updateFeaturesHandler = (newFeature) => {
    setFeature(newFeature);
  }

  const testLocalStorage = 'Acest text va aparea in local storage';
  const testSessionStorage = 'Acest text va aparea in session storage;'
>>>>>>> main

  const objectLocalStorage = {
    testLocalStorage: 'Text in local storage'
  }

  const setStorage = () => {
    localStorage.setItem('localStorageTest', testLocalStorage)
    localStorage.setItem('localStorageTest2', testLocalStorage)
    localStorage.setItem('localStorageTest3', JSON.stringify(objectLocalStorage))
    sessionStorage.setItem('sessionStorageTest', testSessionStorage)
    sessionStorage.setItem('sessionStorageTest2', testSessionStorage)
  }

  const removeStorage = () => {
    // Metoda removeItem sterge elementul mentionat
      // localStorage.removeItem('localStorageTest')
      // sessionStorage.removeItem('sessionStorageTest')

      // Metoda clear sterge tot
      localStorage.clear();
      sessionStorage.clear();
  }

  return (
<<<<<<< HEAD
    <div>
      <div className="ui-features">
        <Light lightsOn={lightsOn} />
        <Ac AcOn={AcOn} />

        <Room status={0.7} />
        {/* {counter} */}
      </div>
      <Features toggleAction={toggleActionHandler} />
      {/* <button onClick={count}>Count</button> */}

    </div>
=======
    <>
      <header>
        <nav>
          <ul>
            <li>
              <HomeIcon/>
              <Link to={'/welcome'}>Welcome page</Link>
            </li>
            <li>
              <DevicesIcon/>
              <NavLink to={'/smart-home'}>Smart home</NavLink>
            </li>
            <li>
              <AddToQueueIcon/>
              <NavLink to={'/features-form'}>Features Form</NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <button onClick={setStorage}>Set storage</button>
      <button onClick={removeStorage}>Remove storage</button>

      <div className='lights yellow'>App</div>

      <Routes>
        <Route path='/' element={<SmartHome newFeature={feature}/>}></Route>
        <Route path='/welcome' element={<Welcome />} />
        <Route path='/smart-home' element={<SmartHome newFeature={feature}/>} />
        <Route path='/features-form' element={<FeaturesForm updateFeatures={updateFeaturesHandler} />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

      <h2>Data with use fetch</h2>
      {/* {users && users.data.map( user => <div key={user.id}>{user.first_name}</div>)} */}
      {users?.data.map( user => <div key={user.id}>{user.first_name}</div>)}

    <h2>Data with axios</h2>
    {loading && <div>{loading}</div>}
    {error && <div>{error}</div>}
    {!loading && !error && data?.map(user => <div key={user.id}>{user.first_name} {user.last_name}</div>)}
    </>
>>>>>>> main
  )
}

export default App
