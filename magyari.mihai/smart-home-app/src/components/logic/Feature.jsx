import './Feature.scss';
import buttonIcon from './../../assets/images/buttonIcon.webp'
import buttonIconOff from './../../assets/images/buttonIconOff.avif'
import acOn from './../../assets/images/acOn.jpg'
import acOff from './../../assets/images/acOff.jpg'


import { useEffect, useState } from 'react';


const Feature = ({ name, action, toggleAction, state }) => {

    // const smartHomeApp = {
    //     toggleLights: 'Toggle Lights',
    //     toggleAC: 'Toggle A/C',
    //     startCleaning: 'Start Cleaning',
    //     espresso: 'Make a coffee'
    // }

    // const {toggleLights, espresso} = smartHomeApp;
    // console.log(toggleLights);
    // console.log(espresso);

    const [LightsIcon, setLightsIcon] = useState(null);
    const [AcIcon, setAcIcon] = useState(null);


    useEffect(() => {
        if (name === 'Toggle Lights') {
            state ? setLightsIcon(buttonIcon) : setLightsIcon(buttonIconOff)
        } else if (name === 'Toggle A/C') {
            state ? setAcIcon(acOn) : setAcIcon(acOff)
        }

    }, [state])

    function featureButtonHandler() {
        toggleAction(name);
    }

    return <div className="feature">
        {name === 'Toggle Lights' && <img src={LightsIcon} alt="bulb" className='buttonImg' />}
        {name === 'Toggle A/C' && <img src={AcIcon} alt="ac" className='buttonImg' />}
        <h3>{name}</h3>
        <button onClick={featureButtonHandler}>{action}</button>
    </div>
};

export default Feature;