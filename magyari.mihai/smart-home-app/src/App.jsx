import { useEffect, useRef, useState } from 'react';
import './App.scss'
import Features from './components/logic/Features'
import Light from './components/ui/Light'
import Room from './components/ui/Room';
import AirCon from './components/ui/AirCon';

function App() {
  //Correct way of managing states
  const [lightsOn, setLightsOn] = useState(false)
  const [acOn, setAcOn] = useState(false)
  const [dirtProgress, setDirtProgress] = useState({
    status: 0,
    cleaned: 0,
  })


  //Wrong way -> nu definiti in acelasi obiect lucruri care nu au legatura




  // const [counter, setCounter] = useState(0);

  // const count = () => {
  //   setCounter(counter+1)
  //   console.log(counter)
  // }

  // const toggleActionHandler = (name) => {

  //   if (name === 'Toggle Lights') {
  //     setLightsOn(!lightsOn)
  //   } else if (name === 'Toggle A/C'){
  //     setAcOn(!acOn)
  //   }
  // }


  /** Use effect model */

  // useEffect(() => {
  //   console.log("Effect triggered")
  //   return () => {
  //     console.log('component Unmount')
  //   }
  // }, [lightsOn])

  let dirtInterval = useRef();

  useEffect(() => {
    dirtInterval.current = setInterval(() => {
      setDirtProgress(prevState => {
        console.log(prevState.status)
        if (prevState.status > 1) {
          clearInterval(dirtInterval.current)
        }
        return {
          ...prevState,
          status: prevState.status + 0.1
        }
      })

    }, 2000)
    return () => {
      clearInterval(dirtInterval.current)
    }
  }, [dirtProgress.cleaned]);


  const toggleLights = () => {
    setLightsOn((prevState) => {
      return !prevState
    });
  }

  const toggleAc = () => {
    setAcOn((prevState) => {
      return !prevState
    });
  }

  const startCleaning = () => {
    setDirtProgress((prevState) => {
      return {
        ...prevState,
        status: 0,
        cleaned: prevState.cleaned + 1

      }
    })
  }



  const toggleActionHandler = (name) => {
    switch (name) {
      case 'Toggle Lights':
        toggleLights();
        break;
      case 'Toggle A/C':
        toggleAc();
        break;
      case 'Clean':
        startCleaning();
        break;
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
        <AirCon acOn={acOn} />
        <Room status={dirtProgress.status} />
        {/* {counter} */}
      </div>
      <Features toggleAction={toggleActionHandler} />
      {/* <button onClick={count}>Count</button> */}
    </div>
  )
}

export default App
