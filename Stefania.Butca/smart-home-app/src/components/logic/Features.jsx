import React, { useEffect, useState } from "react";
import Feature from "./Feature";
import FeaturesForm from "./FeaturesForm";

function Features({ toggleAction, newFeature }) {
  const FEATURES = [
    {
      name: "Toggle lights",
      action: "Turn de lights on",
      state: false,
      id: 0,
    },
    {
      name: "Toggle AC",
      action: "Turn the AC on",
      state: false,
      id: 1,
    },
    {
      name: "Clean the room",
      action: "Turn on the vacuum",
      state: false,
      id: 2,
    },
    {
      name: "Coffee machine",
      action: "Make a coffee",
      state: false,
      id: 3,
    },
  ];

  const [features, setFeatures] = useState(FEATURES);


  useEffect(() => {
    if (newFeature.name !== '') {
      setFeatures(prevState => [newFeature, ...prevState]);
      // updateFeatures(newFeature);
    }
  }, [newFeature]);

const toggleLights = () => {
  setFeatures(prevState => {
    const updatedFeatures = prevState.map(feature => {
      if (feature.name === "Toggle lights") {
        feature.state = !feature.state;
        feature.action = `Turn the Lights ${feature.state ? 'off' : 'on'}`
      }
      return feature;
    });
    return updatedFeatures;
  });
};

const toggleAc = () => {
  setFeatures(prevState => {
    const updatedFeatures = prevState.map(feature => {
      if (feature.name === "Toggle AC") {
        feature.state = !feature.state;
        feature.action = `Turn the AC ${feature.state ? 'on' : 'off'}`
      }
      return feature;
    });
    return updatedFeatures;
  });
};

const toggleActionHandler = (value) => {
  toggleAction(value);

  switch (value) {
    case "Toggle lights":
      toggleLights('');
      break;
     case "Toggle AC":
      toggleAc('');
      break;
  }
};

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

      {/* <Feature name={FEATURES[0].name} action={FEATURES[0]}/>
      <Feature name={FEATURES[1].name} action={FEATURES[1]}/>
      <Feature name={FEATURES[2].name} action={FEATURES[2]}/>
      <Feature name={FEATURES[3].name} action={FEATURES[3]}/> */}
    </div>
  );
};

export default Features;