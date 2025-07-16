import { useState } from "react";

import Ac from "../ui/Ac";
import Light from "../ui/Light";
import Room from "../ui/Room";
import Features from "./Features";
import useInterval from "../../hooks/use-interval";

const SmartHome = ({ newFeature }) => {
  const [lightsOn, setLightsOn] = useState(false);
  const [acOn, setAcOn] = useState(false);

  const [roomActions, resetRoomActions] = useInterval(4000, 0);
  const [childRoomActions, resetChildRoomActions] = useInterval(2000, 0.3);
  // const [kidsRoomMess, setKidsRoomMess] = useState({
  //   status: 0,
  //   cleaned: 0,
  // });

  // let kidsMess = useRef();

  // }, [dirtProgress.cleaned, kidsRoomMess.cleaned]);

  // TO DO de mutat in alt useEffect

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
    // setKidsRoomMess((prevState) => {
    //   return {
    //     ...prevState,
    //     status: 0,
    //     cleaned: prevState.cleaned + 1,
    //   };
    // });
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
        <Room status={roomActions.dirtProgress} />
        <Room status={childRoomActions.dirtProgress} />
        {/* <Room status={kidsRoomMess.status} /> */}
        <Ac acOn={acOn} />
      </div>
      <Features toggleAction={toggleActionHandler} newFeature={newFeature} />
    </>
  );
};
export default SmartHome;
