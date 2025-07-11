import './Feature.scss';
import buttonIconOff from './../../assets/images/buttonIconOff.jpeg';
import buttonIcon from './../../assets/images/buttonIcon.webp';
import acOn from './../../assets/images/acOn.png';
import acOff from './../../assets/images/acOff.png';
import { useEffect, useState } from 'react';

const Feature = ({ name, action, toggleAction, state }) => {

  const [lightsIcon, setLightsIcon] = useState('null');
  const [acIcon, setAcIcon] = useState('null');

  useEffect(() => {
      if (name === 'Toggle lights') {
        state ? setLightsIcon(buttonIcon) : setLightsIcon(buttonIconOff);
      } else if (name === 'Toggle AC') {
        state ? setAcIcon(acOff) : setAcIcon(acOn);
      }
    }, [state, name]);
  
  // Example of destructuring an object
  //   const smartHomeApp = {
  //     toggleLights: "Turn the lights on",
  //     toggleAC: "Turn the AC on",
  //     cleanRoom: "Turn on the vacuum",
  //     coffeeMachine: "Make a coffee",
  //   };
  //   const { toggleLights, espresso } = smartHomeApp;
  //   console.log(toggleLights);
  //   console.log(espresso);

  function featureButtonHandler() {
    toggleAction(name);
  }

 return (
    <div className="feature">
      {(name === 'Toggle lights') && (<img src={lightsIcon} alt="bulb" className='buttonImg' />)}
      {(name === 'Toggle AC') && (<img src={acIcon} alt="bulb" className='buttonImg' />)}
      <h3>{name}</h3>
      <button onClick={featureButtonHandler}>{action}</button>
    </div>
  );
};

export default Feature;
