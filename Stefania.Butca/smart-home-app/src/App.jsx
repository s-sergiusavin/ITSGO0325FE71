import { useState } from "react";
import "./App.scss";
import Features from "./components/logic/Features";
import Light from "./components/ui/Light";
import Room from "./components/ui/room";
import Ac from "./components/ui/Ac";

function App() {
  let [lightsOn, setLightsOn] = useState(false);
  let [acOn, setAcOn] =  useState(true);
  // const [counter, setCounter] = useState(0);
  // const count = () => {
  //   setCounter(counter + 1);
  //   console.log(counter);
  // };

  const toggleLights = () => {
    setLightsOn((prevState) => {
      return !prevState;
    });
  };

  const toggleAc = () => {
        setAcOn((prevState) => {
      return !prevState;
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
    }
  };

  return (
    <div>
      <div className="ui-features">
        <Light lightsOn={lightsOn} />
        <Room status = {1} />
        <Ac acOn={acOn}/>
        {/* {counter} */}
      </div>
      <Features toggleAction={toggleActionHandler} />
      {/* <button onClick={count}>Count</button> */}
    </div>
  );
}

export default App;
