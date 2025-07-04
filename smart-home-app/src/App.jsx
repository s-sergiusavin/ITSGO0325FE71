import { useState } from 'react';
import './App.scss'
import Features from './components/logic/Features'
import Light from './components/ui/Light'
import Room from './components/ui/Room';

function App() {
  let [lightsOn, setLightsOn] = useState(false)
  // const [counter, setCounter] = useState(0);
  // const count = () => {
  //   setCounter(counter + 1)
  //   console.log(counter)
  // }

  const toggleActionHandler = (name) => {
    if (name === 'Toggle lights') {
      setLightsOn(!lightsOn)
    }
  }

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
        <Room status={0.7}/>
        {/* {counter} */}
      </div>
      <Features toggleAction={toggleActionHandler}/>
      {/* <button onClick={count}>Count</button> */}
    </div>
  )
}

export default App
