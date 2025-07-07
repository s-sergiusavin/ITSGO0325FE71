import { useEffect, useState } from 'react';
import './App.scss'
import Features from './components/logic/Features'
import Light from './components/ui/Light'
import Room from './components/ui/Room';
import AC from './components/ui/AC';

function App() {
  // Correct way of managing state
  const [lightsOn, setLightsOn] = useState(false);
const [acOn, setAcOn] = useState(false);
const [dirtProgress, setDirtProgress] = useState({
  status: 0.5,
  cleaned: 0
});

// Wrong way of managing state ! Nu folositi state-uri care nu au legatura intre ele in acelasi obiect
// const [state, setState] = useState({
// let lightsOn : false;
// let acOn : false;
// dirtStatus : 0;
// cleaned : 0

/** Use effect model */
// useEffect(() => {
//   console.log('Effect triggered');

//   return () => {
//     console.log('Component unmounted');
//   }, [lightsOn]);

let dirtInterval = useRef();

useEffect() => {
  dirtInterval.current = setInterval(() => {
    setDirtProgress((prevState) => {
      return {
        ...prevState,
        status: prevState.status + 0.1
      }
    })
  }, 2000);

 const toggleLights = () => {
    setLightsOn((prevState) => {
      return !prevState;
 })
};

    const toggleAc = () => {
      setAcOn((prevState) => {
        return !prevState;
      })
    };


    const startCleaning = () => {
      setDirtProgress((prevState) => {
        return {
          ...prevState,
          status: 0.2,
          cleaned: prevState.cleaned + 1}
      })
    };

  const toggleActionHandler = (name) => {
switch (name) {
  case 'Toggle lights':
    toggleLights();
    break;
  case 'Toggle AC':
    toggleAc();
    break;
      case 'Start Cleaning':
    startCleaning();
    break;
  } };

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
        <Light lightsOn={lightsOn}/>
        <AC acOn={acOn}/>
        <Room status={dirtProgress.status}/>
        {/* {counter} */}
      </div>
      <Features toggleAction={toggleActionHandler}/>
      {/* <button onClick={count}>Count</button> */}
    </div>
  )
}

export default App;