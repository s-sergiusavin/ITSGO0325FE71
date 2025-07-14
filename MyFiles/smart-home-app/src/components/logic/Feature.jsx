import './Feature.scss';
import buttonIcon from './../../assets/images/buttonIcon.webp';
import buttonIconOff from './../../assets/images/buttonIconOff.png';
import acOn from './../../assets/images/acOn.jpg';
import acOff from './../../assets/images/acOff.png';
import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

const Feature = ({ name, action, toggleAction, state }) => {

  const [lightsIcon, setLightsIcon] = useState(null);
  const [acIcon, setAcIcon] = useState(null);

  useEffect(() => {
    if (name === 'Toggle lights') {
      state ? setLightsIcon(buttonIcon) : setLightsIcon(buttonIconOff);
    } else if (name === 'Toggle AC') {
      state ? setAcIcon(acOn) : setAcIcon(acOff);
    }
  }, [state])

  function featureButtonHandler() {
    toggleAction(name);
  }

  return (
    <div className="feature">
      <Card sx={{ maxWidth: 250 }} onClick={featureButtonHandler}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={name === 'Toggle lights' ? lightsIcon : acIcon}
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
  );
};

export default Feature;