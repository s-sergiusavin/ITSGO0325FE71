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

function App() {

  const [feature, setFeature] = useState({
    name: '',
    action: '',
    state: false,
    id: 0
  });


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


  return (
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

      <div className='lights yellow'></div>

      <Routes>
        <Route path='/' element={<SmartHome newFeature={feature} />}></Route>
        <Route path='/welcome' element={<Welcome />} />
        <Route path='/smart-home' element={<SmartHome newFeature={feature} />} />
        <Route path='/features-form' element={<FeaturesForm updateFeatures={updateFeaturesHandler} />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>




  )
}

export default App
