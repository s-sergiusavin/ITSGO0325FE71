import { useState } from 'react';
import './App.scss'
import Features from './components/logic/Features'
import Light from './components/ui/Light'
import Room from './components/ui/Room';
import AirCon from './components/ui/AirCon';

function App() {
  const [lightsOn, setLightsOn] = useState(false)
  const [acOn, turnOnAc] = useState(false)

  // const [counter, setCounter] = useState(0);

  // const count = () => {
  //   setCounter(counter+1)
  //   console.log(counter)
  // }

  const toggleActionHandler = (name) => {

    if (name === 'Toggle Lights') {
      setLightsOn(!lightsOn)
    } else if (name === 'Toggle A/C'){
      turnOnAc(!acOn)
    }
  }


  /**
   * Destructuring explained
   */

  // function returnPuppy () {
  //   const puppy = {
  //     name: 'Rex'
  //   }

  //   function changePuppyName () {
  //     puppy.name = 'Azorel'
  //   }

  //   return [puppy, changePuppyName];
  // }

  // const [myPuppy,myFunction] = returnPuppy();
  // console.log(myPuppy);
  // console.log(myFunction)



  return (
    <div>
      <div className="ui-features">
        <Light lightsOn={lightsOn} />
        <AirCon acOn={acOn}/>
        <Room status={0.7} />
        {/* {counter} */}
      </div>
      <Features toggleAction={toggleActionHandler} />
      {/* <button onClick={count}>Count</button> */}
    </div>
  )
}

export default App
