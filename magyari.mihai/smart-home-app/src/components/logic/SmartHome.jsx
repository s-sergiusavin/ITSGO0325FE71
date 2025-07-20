import { useState } from "react";
import AirCon from "../ui/AirCon";
import Light from "../ui/Light";
import Room from "../ui/Room";
import Tv from "../ui/tv";
import Features from "./Features";
import useInterval from "../../hooks/use-interval";
import Coffee from "../ui/Coffee";
import useCoffee from "../../hooks/use-coffee";



const SmartHome = ({ newFeature }) => {

  const [lightsOn, setLightsOn] = useState(false);
  const [acOn, setAcOn] = useState(false);
  const [tvOn, setTvOn] = useState(false);
  const [roomActions, resetRoomActions] = useInterval(2000, 0);
  const [childRoomActions, resetChildRoomActions] = useInterval(1000, 0.5);
  const [pourCoffee, resetCoffee, startFilling] = useCoffee(1000, 0)
  const coffeeVolume = pourCoffee.coffeeVolume;



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
    resetRoomActions();
    resetChildRoomActions();
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
      case 'Coffee time':
        if (coffeeVolume === 0){
          startFilling();
        }else{
           resetCoffee();
        }
       
        break;
    }
  }
  return (
    <>
      <div className="ui-features">
        <Light lightsOn={lightsOn} />
        <AirCon acOn={acOn} />
        <Room status={roomActions.dirtProgress} />
        <Room status={childRoomActions.dirtProgress} />
        <Coffee status={pourCoffee.coffeeVolume} />
        <Tv tvOn={tvOn} />
      </div>
      <Features toggleAction={toggleActionHandler} newFeature={newFeature} />
    </>
  )
}

export default SmartHome;