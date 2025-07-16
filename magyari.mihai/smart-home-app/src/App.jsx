import './App.scss'
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
  const { data } = useAxios(usersUrl);


  /**
   * Destructuring explained
   */

  // function returnPuppy () {
  //   const puppy = {
  //     name: 'Rex'
  //   }

  //   function changePuppyName () {
  //     puppy.name = 'Azorel'
  //   }

  //   return [puppy, changePuppyName];
  // }

  // const [myPuppy,myFunction] = returnPuppy();
  // console.log(myPuppy);
  // console.log(myFunction)


  const updateFeaturesHandler = (newFeature) => {
    setFeature(newFeature);

  }

  const testLocalStorage = 'Acest text va aparea in local storage'
  const testSessionStorage = 'Acest text va aparea in session storage'

  const setStorage = () => {
    localStorage.setItem('localStorageTest', testLocalStorage)
    sessionStorage.setItem('sessionStorageTest', testSessionStorage)
  }

  const removeStorage = () => {

    //Metoda removeItem sterge elementul mentionat
    // localStorage.removeItem(('localStorageTest'))
    // sessionStorage.removeItem('sessionStorageTeste')

    //Metoda clear sterge tot
    localStorage.clear();
    sessionStorage.clear();
  }


  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <HomeIcon />
              <Link to={'/welcome'}>Welcome page</Link>
            </li>
            <li>
              <DevicesIcon />
              <NavLink to={'/smart-home'}>Smart home</NavLink>
            </li>
            <li>
              <AddToQueueIcon />
              <NavLink to={'/features-form'}>Features Form</NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <div className='lights yellow'></div>

      <Routes>
        <Route path='/' element={<SmartHome newFeature={feature} />}></Route>
        <Route path='/welcome' element={<Welcome />} />
        <Route path='/smart-home' element={<SmartHome newFeature={feature} />} />
        <Route path='/features-form' element={<FeaturesForm updateFeatures={updateFeaturesHandler} />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

      <h2>Data with use fetch</h2>
      {/* {users && users.data.map(user => <div key={user.id}>{user.first_name}</div>)} */}
      {users?.data.map(user => <div key={user.id}>{user.first_name}</div>)}

      <h2>Data with axios</h2>
      {loading && <div>{loading}</div>}
      {error && <div>{error}</div>}
      {!loading && !error && data?.map(user => <div key={user.id}>{user.first_name} {user.last_name}</div>)}
    </>




  )
}

export default App
