import './Feature.scss';
import buttonIcon from './../../assets/images/buttonIcon.webp'
import buttonIconOff from './../../assets/images/buttonIconOff.avif'
import acOn from './../../assets/images/acOn.jpg'
import acOff from './../../assets/images/acOff.jpg'
import tvOff from './../../assets/images/tvOff.avif'
import tvOn from './../../assets/images/tvOn.webp'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';


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
    const [TvIcon, setTvIcon] = useState(null);


    useEffect(() => {
        if (name === 'Toggle Lights') {
            state ? setLightsIcon(buttonIcon) : setLightsIcon(buttonIconOff)
        } else if (name === 'Toggle A/C') {
            state ? setAcIcon(acOn) : setAcIcon(acOff)
        } else if (name === 'Watch TV') {
            state ? setTvIcon(tvOn) : setTvIcon(tvOff)
        }

    }, [state])

    function featureButtonHandler() {
        toggleAction(name);
    }

    return <div className="feature">
        {name === 'Toggle Lights' && <img src={LightsIcon} alt="bulb" className='buttonImg' />}
        {name === 'Toggle A/C' && <img src={AcIcon} alt="ac" className='buttonImg' />}
        {name === 'Watch TV' && <img src={TvIcon} alt="tv" className='buttonImg' />}
        <h3></h3>
        <button ></button>

        <Card sx={{ maxWidth: 250 }} onClick={featureButtonHandler}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={name === 'Toggle Lights' ? LightsIcon : AcIcon}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {action}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    </div>
};

export default Feature;