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

  const toggleActionHandler = (value) => {
    toggleAction(value);
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
