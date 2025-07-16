import "./Feature.scss";
import buttonIcon from "../../assets/buttonIconeON.png";
import buttonIconOff from "../../assets/buttonIconeOff.png";
import acOn from "../../assets/acOn.jpg";
import acOff from "../../assets/acOff.png";
import { useEffect, useState } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

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
      {/* {name === "Toggle lights" && (
        <img src={lightsIcon} alt="bulb" className="buttonImg" />
      )}
      {name === "Toggle AC" && (
        <img src={acIcon} alt="bulb" className="buttonImg" />
      )}
      <h3>{name}</h3>
      <button>{action}</button> */}

      <Card sx={{ maxWidth: 345 }} onClick={featureButtonHandler}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={name === "Toggle lights" ? lightsIcon : acIcon}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {action}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default Feature;
