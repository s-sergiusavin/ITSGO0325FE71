import "./Feature.scss";
import buttonIcon from "../../assets/buttonIconeON.png";
import buttonIconOff from "../../assets/buttonIconeOff.png";
import acOn from "../../assets/acOn.jpg";
import acOff from "../../assets/acOff.png";
import { useEffect, useState } from "react";

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

  const [lightsIcon, setLightsIcon] = useState(null);
  const [acIcon, setAcIcon] = useState(null);

  useEffect(() => {
    if (name === "Toggle lights") {
      state ? setLightsIcon(buttonIcon) : setLightsIcon(buttonIconOff);
    } else if (name === "Toggle AC") {
      state ? setAcIcon(acOn) : setAcIcon(acOff);
    }
  }, [state]);

  function featureButtonHandler() {
    toggleAction(name);
  }

  return (
    <div className="feature">
      {name === "Toggle lights" && (
        <img src={lightsIcon} alt="bulb" className="buttonImg" />
      )}
      {name === "Toggle AC" && (
        <img src={acIcon} alt="bulb" className="buttonImg" />
      )}
      <h3>{name}</h3>
      <button onClick={featureButtonHandler}>{action}</button>
    </div>
  );
};

export default Feature;
