import Feature from "./Feature";
import FeaturesForm from "./FeaturesForm";
import { useEffect, useState } from "react";

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

  const [feature, setFeature] = useState(FEATURES);

  useEffect(() => {
    if (newFeature.name !== "") {
      setFeature((prevState) => [newFeature, ...prevState]);
    }
  }, [newFeature]);

  const toggleLights = () => {
    setFeature((prevState) => {
      const updateFeatures = prevState.map((feature) => {
        if (feature.name === "Toggle lights") {
          feature.state = !feature.state;
          feature.action = `Turn the lights ${feature.state ? "off" : "on"}`;
        }
        return feature;
      });
      return updateFeatures;
    });
  };

  const toggleAc = () => {
    setFeature((prevState) => {
      const updateFeatures = prevState.map((feature) => {
        if (feature.name === "Toggle AC") {
          feature.state = !feature.state;
          feature.action = `Turn the AC ${feature.state ? "off" : "on"}`;
        }
        return feature;
      });
      return updateFeatures;
    });
  };

  const toggleActionHandler = (value) => {
    toggleAction(value);

    switch (value) {
      case "Toggle lights":
        toggleLights();
        break;
      case "Toggle AC":
        toggleAc();
        break;
    }
  };

  return (
    <div className="features-container">
      <div className="features">
        {feature.map((feature) => {
          return (
            <Feature
              name={feature.name}
              action={feature.action}
              key={feature.id}
              toggleAction={toggleActionHandler}
            />
          );
        })}
      </div>

      {/* <Feature name={FEATURES[0].name} action={FEATURES[0].action}/>
      <Feature name={FEATURES[1].name} action={FEATURES[1].action}/>
      <Feature name={FEATURES[2].name} action={FEATURES[2].action}/>
      <Feature name={FEATURES[3].name} action={FEATURES[3].action}/> */}
    </div>
  );
}

export default Features;
