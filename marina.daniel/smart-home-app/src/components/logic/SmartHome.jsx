import { useEffect, useRef, useState } from "react";
import Ac from "../ui/Ac";
import Light from "../ui/Light";
import Room from "../ui/Room";
import Features from "./Features";
import ChildRoom from "../ui/ChildRoom";
import useInterval from "../hooks/use-interval";

const SmartHome = ({ newFeature }) => {
  const [lightsOn, setLightsOn] = useState(false);
  const [acOn, setAcOn] = useState(false);

  const [roomAction, resetRoomActions] = useInterval(4000, 0);
  const [childRoomActions, resetChildRoomActions] = useInterval(2000, 0.3);

  const toggleLights = () => {
    setLightsOn((prevState) => {
      return !prevState;
    });
  };

  const toggleAc = () => {
    setAcOn((prevState) => {
      return !prevState;
    });
  };

  const startCleaning = () => {
    resetRoomActions();
    resetChildRoomActions();
  };

  const toggleActionHandler = (name) => {
    switch (name) {
      case "Toggle lights":
        toggleLights();
        break;
      case "Toggle AC":
        toggleAc();
        break;
      case "Clean":
        startCleaning();
        break;
    }
  };

  return (
    <>
      <div className="ui-features">
        <Light lightsOn={lightsOn} />
        <Room status={roomAction.dirtProgress} />
        <ChildRoom status={childRoomActions.DirtProgress} />
        <Ac acOn={acOn} />
      </div>
      <Features toggleAction={toggleActionHandler} newFeature={newFeature} />
    </>
  );
};

export default SmartHome;
