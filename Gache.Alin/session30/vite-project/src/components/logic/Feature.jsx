import { useEffect, useState } from "react";
import "./Feature.scss";

import buttonIconeOFF from "../../assets/buttonIconeOff.png";
import buttonIconeON from "../../assets/buttonIconeON.webp";

const Feature = ({ name, action, toggleAction, state }) => {
  // const smartHomeApp = {
  //     toggleLights: 'Toggle Lights',
  //     toggleAc: 'Toggle Ac',
  //     startCleaning: 'Start Cleaning',
  //     espresso: 'Make a coffee'
  // }

  // const {toggleLights, espresso} = smartHomeApp;
  // console.log(name, ' Feature')
  // console.log(toggleLights)
  // console.log(espresso)
  const [icon, setIcon] = useState("");

  useEffect(() => {
    state ? setIcon(buttonIconeON) : setIcon(buttonIconeOFF);
  }, [state]);

  function featureButtonHandler() {
    toggleAction(name);
  }

  return (
    <div className="feature">
      {name === "Toggle lights" && (
        <img src={icon} alt="bulb" className="buttonImg" />
      )}

      <h3>{name}</h3>
      <button onClick={featureButtonHandler}>{action}</button>
    </div>
  );
};

export default Feature;
