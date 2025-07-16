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
import useFetch from "./hooks/use-fetch";
import useAxios from "./hooks/use-axios";

function App() {
  // Correct way of managing states

  const [feature, setFeature] = useState({
    name: "",
    action: "",
    state: false,
    id: Math.random() * 100,
  });

  const userURL = "https://reqres.in/api/users?page=2";
  const users = useFetch("https://reqres.in/api/users?page=2"); //sau userURL

  const { data, loading, error } = useAxios(userURL);
  console.log(data);

  // console.log(users);

  const updateFeaturesHandler = (newFeature) => {
    setFeature(newFeature);
  };

  const testLocalStorage = "Apare in local storage";
  const sessionStorageTest = "Apare in session storage";

  const setStorage = () => {
    localStorage.setItem("localStorageTest", testLocalStorage);
    sessionStorage.setItem("sessionStorageTest", sessionStorageTest);
  };
  const resetStorage = () => {
    //Sterge elementul selectat
    // localStorage.removeItem("localStorageTest");
    // sessionStorage.removeItem("sessionStorageTest");

    //Sterge tot
    localStorage.clear();
    sessionStorage.clear();
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
      <button onClick={setStorage}>SessionStorage</button>
      <button onClick={resetStorage}>ClearSessionStorage</button>
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
      <h2>Data with usefetch</h2>
      {/* {users &&
        users.data.map((user) => {
        return  <div key={user.id}>{user.first_name}</div>;
        })} */}
      {/* {users?.data.map((user) => {
        return <div key={user.id}>{user.first_name}</div>;
      })}   */}
      {users?.data.map((user) => (
        <div key={user.id}>{user.first_name}</div>
      ))}

      <h2>Data with Axios</h2>

      {loading && <div>{loading}</div>}
      {error && <div>{error}</div>}
      {!loading &&
        !error &&
        data?.map((user) => (
          <div key={user.id}>
            {user.first_name} {user.last_name}
          </div>
        ))}
      {/* {!loading && !error data?.map((user)=> <div key={user.id}>{user.first_name}</div>)} */}
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
