import { useEffect, useRef, useState } from 'react';
import './App.scss'
import Features from './components/logic/Features'
import Light from './components/ui/Light'
import Room from './components/ui/Room';
import Ac from './components/ui/Ac';

function App() {
  // Correct way of managing states
  const [lightsOn, setLightsOn] = useState(false);
  const [acOn, setAcOn] = useState(false);
  const [dirtProgress, setDirtProgress] = useState({
    status: 0,
    cleaned: 0
  })

  // bad example: Nu folositi state-uri care nu au legatura intre ele, in acelasi obiect
  const [actions, setActions] = useState({
    lightState: false,
    acState: false,
    dirtStatus: 0,
    cleaned: 0
  });

  /** Use effect model */
  // useEffect( () => {
  //   console.log('Éffect triggered');

  //   return () => {
  //     console.log('Component Unmount');
  //   }
  // }, [lightsOn]);

  let dirtInterval = useRef();

  useEffect( () => {
    dirtInterval.current = setInterval( () => {
      setDirtProgress( prevState => {
        console.log(prevState.status)
        if (prevState.status > 1) {
          clearInterval(dirtInterval.current)
        }
        return {
          ...prevState,
          status: prevState.status + 0.1
        }
      })
    }, 2000);

    return () => {
      clearInterval(dirtInterval.current)
    }
  }, [dirtProgress.cleaned])

  const toggleLights = () => {
    setLightsOn((prevState) => {
      return !prevState
    });
  }

  const toggleAc = () => {
    setAcOn((prevState) => {
      return !prevState
    });
  }

  const startCleaning = () => {
    setDirtProgress(prevState => {
      return {
        ...prevState,
        status: 0,
        cleaned: prevState.cleaned + 1
      }
    })
  }

  const toggleActionHandler = (name) => {
    switch (name) {
      case 'Toggle lights':
        toggleLights();
        break;
      case 'Toggle AC':
        toggleAc();
        break;
      case 'Clean':
        startCleaning();
        break;

    }
  }

  return (
    <div>
      <div className="ui-features">
        <Light lightsOn={lightsOn} />
        <Room status={dirtProgress.status} />
        <Ac acOn={acOn} />
      </div>
      <Features toggleAction={toggleActionHandler} />
    </div>
  )
}

export default App