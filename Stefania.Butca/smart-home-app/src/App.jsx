import { useEffect, useState } from "react";
import "./App.scss";
import Features from "./components/logic/Features";
import Light from "./components/ui/Light";
import Room from "./components/ui/room";
import Ac from "./components/ui/Ac";

function App() {
  const [lightsOn, setLightsOn] = useState(false);
  const [acOn, setAcOn] =  useState(true);
  const [dirtProgress, setDirtProgress] = useState({
    status: 0.5,
    cleaned: 0,
  });
  // const [counter, setCounter] = useState(0);
  // const count = () => {
  //   setCounter(counter + 1);
  //   console.log(counter);
  // };

  useEffect(() => {
    const interval = setInterval(() => {
      setDirtProgress((prevState) => {
        return {
          ...prevState,
          status: prevState.status + 0.1,
        };
      });
    }, 2000);
    return () => clearInterval(interval);
  },[]);

  const toggleLights = () => {
    setLightsOn((prevState) => {
      return !prevState;
    });
  };

  const toggleAc = () => {
        setAcOn((prevState) => {
      return !prevState;
    });
  };

  const startCleaning = () => {
    setDirtProgress((prevState) => {
      return {
        ...prevState,
        status: 0.2,
        cleaned: prevState.cleaned + 1,
      };
    });
  }


  const toggleActionHandler = (name) => {
    switch (name) {
      case "Toggle lights":
        toggleLights();
        break;
      case "Toggle AC":
        toggleAc();
        break;
        case "Clean the room":
        startCleaning();
        break;
          };
    }

  return (
    <div>
      <div className="ui-features">
        <Light lightsOn={lightsOn} />
        <Room status = {dirtProgress.status} />
        <Ac acOn={acOn}/>
        {/* {counter} */}
      </div>
      <Features toggleAction={toggleActionHandler} />
      {/* <button onClick={count}>Count</button> */}
    </div>
  );
}

export default App;
