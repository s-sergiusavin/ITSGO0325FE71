import { useEffect, useRef, useState } from 'react';
import './App.scss'
import Features from './components/logic/Features'
import Light from './components/ui/Light'
import Room from './components/ui/Room';
import Ac from './components/ui/Ac';
import FeaturesForm from './components/logic/FeaturesForm';

function App() {
  // Correct way of managing states
  const [lightsOn, setLightsOn] = useState(false);
  const [acOn, setAcOn] = useState(false);
  const [dirtProgress, setDirtProgress] = useState({
    status: 0,
    cleaned: 0
  });

  const [feature, setFeature] = useState({
    name: '',
    action: '',
    state: false,
    id: 0
  })

  let dirtInterval = useRef();

  useEffect( () => {
    dirtInterval.current = setInterval( () => {
      setDirtProgress( prevState => {
        // console.log(prevState.status)
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

  const updateFeaturesHandler = (newFeature) => {
    setFeature(newFeature);
  }

  return (
    <div>
      <div className="ui-features">
        <Light lightsOn={lightsOn} />
        <Room status={dirtProgress.status} />
        <Ac acOn={acOn} />
      </div>
      <Features toggleAction={toggleActionHandler} newFeature={feature} />
      <FeaturesForm updateFeatures={updateFeaturesHandler}/>
    </div>
  )
}

export default App
