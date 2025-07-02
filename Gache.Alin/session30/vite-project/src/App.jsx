import { useState } from "react";
import "./App.scss";
import Features from "./components/logic/Features";
import Light from "./components/ui/Light";
import Room from "./components/ui/Room";

function App() {
  let [lightsOn, setLightsOn] = useState(false);

  const toggleActionHandler = (name) => {
    if (name === "Toggle lights") {
      setLightsOn(!lightsOn);
    }
  };

  return (
    <div>
      <div className="ui-features">
        <Light lightsOn={lightsOn} />
        <Room status={0.7}/>
      </div>

      <Features toggleAction={toggleActionHandler} />
    </div>
  );
}

export default App;
