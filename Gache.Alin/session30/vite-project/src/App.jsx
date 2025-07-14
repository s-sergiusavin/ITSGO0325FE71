import { useState } from "react";
import "./App.scss";

import FeaturesForm from "./components/logic/FeaturesForm";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import SmartHome from "./components/logic/SmartHome";
import Welcome from "./components/logic/Welcome";
import NotFound from "./components/logic/NotFound";
import HomeIcon from "@mui/icons-material/Home";
import DevicesIcon from "@mui/icons-material/Devices";
import AddToQueueIcon from "@mui/icons-material/AddToQueue";

function App() {
  // Correct way of managing states

  const [feature, setFeature] = useState({
    name: "",
    action: "",
    state: false,
    id: 0,
  });

  const updateFeaturesHandler = (newFeature) => {
    setFeature(newFeature);
  };

  return (
    <>
      {/* <FeaturesForm updateFeatures={updateFeaturesHandler} /> */}

      <header>
        <nav>
          <ul>
            <li>
              <HomeIcon />
              <Link to={"/welcome"}>Welcome Page</Link>
            </li>
            <li>
              <DevicesIcon />
              <NavLink to={"/smart-home"}>Smart Home</NavLink>
            </li>
            <li>
              <AddToQueueIcon />
              <NavLink to={"/feature-form"}>Feature form</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <div className="lights yellow"></div>
      <Routes>
        <Route path="/" element={<SmartHome newFeature={feature} />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route
          path="/smart-home"
          element={<SmartHome newFeature={feature} />}
        />
        <Route
          path="/feature-form"
          element={<FeaturesForm updateFeatures={updateFeaturesHandler} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

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
