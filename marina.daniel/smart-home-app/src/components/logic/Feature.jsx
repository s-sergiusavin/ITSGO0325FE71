import './Feature.scss';
import buttonIcon from './../../assets/images/buttonIcon.webp';
import buttonIconOff from './../../assets/images/buttonIconOff.png';
import { useEffect, useState } from 'react';

const Feature = ({name, action, toggleAction, state}) => {

  const [icon, setIcon] = useState('');

  useEffect( () => {
    state ? setIcon(buttonIcon) : setIcon(buttonIconOff);
  }, [state])

    function featureButtonHandler() {
        toggleAction(name);
    }

  return (
    <div className="feature">
      { name === 'Toggle lights' && <img src={icon} alt="bulb" className='buttonImg' />}
      <h3>{name}</h3>
      <button onClick={featureButtonHandler}>{action}</button>
    </div>
  );
};

export default Feature;
