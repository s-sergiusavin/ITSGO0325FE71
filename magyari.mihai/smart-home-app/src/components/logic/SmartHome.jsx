import { useEffect, useRef, useState } from "react";
import AirCon from "../ui/AirCon";
import Light from "../ui/Light";
import Room from "../ui/Room";
import Tv from "../ui/tv";
import Features from "./Features";

const SmartHome = (newFeature) => {

  const [lightsOn, setLightsOn] = useState(false);
  const [acOn, setAcOn] = useState(false);
  const [dirtProgress, setDirtProgress] = useState({
    status: 0,
    cleaned: 0,
  });
  const [tvOn, setTvOn] = useState(false);


  //Wrong way -> nu definiti in acelasi obiect lucruri care nu au legatura




  // const [counter, setCounter] = useState(0);

  // const count = () => {
  //   setCounter(counter+1)
  //   console.log(counter)
  // }

  // const toggleActionHandler = (name) => {

  //   if (name === 'Toggle Lights') {
  //     setLightsOn(!lightsOn)
  //   } else if (name === 'Toggle A/C'){
  //     setAcOn(!acOn)
  //   }
  // }


  /** Use effect model */

  // useEffect(() => {
  //   console.log("Effect triggered")
  //   return () => {
  //     console.log('component Unmount')
  //   }
  // }, [lightsOn])

  let dirtInterval = useRef();

  useEffect(() => {
    dirtInterval.current = setInterval(() => {
      setDirtProgress(prevState => {

        if (prevState.status > 1) {
          clearInterval(dirtInterval.current)
        }
        return {
          ...prevState,
          status: prevState.status + 0.1
        }
      })

    }, 2000)
    return () => {
      clearInterval(dirtInterval.current)
    }
  }, [dirtProgress.cleaned]);


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
    setDirtProgress((prevState) => {
      return {
        ...prevState,
        status: 0,
        cleaned: prevState.cleaned + 1

      }
    })
  }

  const toggleTv = () => {
    setTvOn((prevState) => {
      return !prevState
    })
  }



  const toggleActionHandler = (name) => {
    switch (name) {
      case 'Toggle Lights':
        toggleLights();
        break;
      case 'Toggle A/C':
        toggleAc();
        break;
      case 'Clean':
        startCleaning();
        break;
      case 'Watch TV':
        toggleTv();
        break;
    }
  }
  return (
    <>
      <div className="ui-features">
        <Light lightsOn={lightsOn} />
        <AirCon acOn={acOn} />
        <Room status={dirtProgress.status} />
        <Room status={0.7} />
        <Tv tvOn={tvOn} />
      </div>
      <Features toggleAction={toggleActionHandler} newFeature={newFeature} />
    </>
  )
}

export default SmartHome;