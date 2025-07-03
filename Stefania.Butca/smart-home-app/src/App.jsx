import { useState } from "react";
import "./App.scss";
import Features from "./components/logic/Features";
import Light from "./components/ui/Light";
import Room from "./components/ui/room";

function App() {
  let [lightsOn, setLightsOn] = useState(false);
  // const [counter, setCounter] = useState(0);
  // const count = () => {
  //   setCounter(counter + 1);
  //   console.log(counter);
  // };

  const toggleActionHandler = (name) => {
    if (name === "Toggle lights") {
      setLightsOn(!lightsOn);
    }
  };

  return (
    <div>
      <div className="ui-features">
        <Light lightsOn={lightsOn} />
        <Room status = {1} />
        {/* {counter} */}
      </div>
      <Features toggleAction={toggleActionHandler} />
      {/* <button onClick={count}>Count</button> */}
    </div>
  );
}

export default App;
