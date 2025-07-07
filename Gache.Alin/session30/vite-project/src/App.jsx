import { useEffect, useRef, useState } from "react";
import "./App.scss";
import Features from "./components/logic/Features";
import Light from "./components/ui/Light";
import Room from "./components/ui/Room";
import Ac from "./components/ui/Ac";

function App() {
  const [lightsOn, setLightsOn] = useState(false);
  const [acOn, setAcOn] = useState(false);
  const [dirtProgress, setDirtProgress] = useState({
    status: 0,
    cleaned: 0,
  });
  // const [counter, setCounter] = useState(0);
  // const count = () => {
  //   setCounter(counter + 1)
  //   console.log(counter)
  // }

  // Use Effect model
  // useEffect(() => {
  //   console.log("Effect triggered");
  //   return () => {
  //     console.log("Component Unount");
  //   };
  // }, [lightsOn]);

  let dirtInterval = useRef();

  useEffect(() => {
    dirtInterval.current = setInterval(() => {
      setDirtProgress((prevState) => {
        if (prevState.status > 1) {
          clearInterval(dirtInterval.current);
        }
        console.log(prevState.status);

        return {
          ...prevState,
          status: prevState.status + 0.1,
        };
      });
    }, 2000);

    return () => {
      clearInterval(dirtInterval.current);
    };
  }, [dirtProgress.cleaned]);

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
    setDirtProgress((prevState) => {
      return {
        ...prevState,
        status: 0,
        cleaned: prevState.cleaned + 1,
      };
    });
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

  /**
   * Destructuring explained
   */

  // function returnPuppy() {
  //   const puppy = {
  //     name: 'Rex'
  //   }

  //   function changePuppyName() {
  //     puppy.name = 'Azorel';
  //   }

  //   return [puppy, changePuppyName];
  // }
  // const [myPuppy, myFunction] = returnPuppy();
  // console.log(myPuppy)
  // console.log(myFunction)

  return (
    <div>
      <div className="ui-features">
        <Light lightsOn={lightsOn} />
        <Ac acOn={acOn} />
        <Room status={dirtProgress.status} />
        {/* {counter} */}
      </div>
      <Features toggleAction={toggleActionHandler} />
      {/* <button onClick={count}>Count</button> */}
    </div>
  );
}

export default App;
