import { useEffect, useState } from "react";
import Feature from "./Feature";

function Features({ toggleAction, newFeature }) {
  const FEATURES = [
    {
      name: "Toggle lights",
      action: "Turn the lights on",
      state: false,
      id: 0,
    },
    {
      name: "Toggle AC",
      action: "Turn on the AC",
      state: false,
      id: 1,
    },
    {
      name: "Clean",
      action: "Start cleaning",
      state: false,
      id: 2,
    },
    {
      name: "Coffee time",
      action: "Make a coffee",
      state: false,
      id: 3,
    },
  ];

  const [features, setFeatures] = useState(FEATURES);

  useEffect( () => {
    if (newFeature.name !== '') {
      setFeatures(prevState => [newFeature, ...prevState])
    }
  }, [newFeature]);

  // useEffect( () => {
  //   if (newFeature.name !== '') {
  //     setFeatures(prevState => {
  //       return [newFeature, ...prevState]
  //     })
  //   }
  // }, [newFeature]);

  const toggleActionHandler = (value) => {
    toggleAction(value)
  }

  return (
    <div className="features-container">
      <div className="features">
        {features.map((feature) => {
          return (
            <Feature
              name={feature.name}
              action={feature.action}
              key={feature.id}
              toggleAction={toggleActionHandler}
              state={feature.state}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Features;
