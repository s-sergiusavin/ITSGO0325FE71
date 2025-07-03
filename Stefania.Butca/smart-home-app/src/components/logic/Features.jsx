import Feature from "./Feature";

function Features({toggleAction}) {
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

  const toggleActionHandler = (value) => {
    toggleAction(value);
  }

  return (
    <div className="features-container">
      {FEATURES.map((feature) => {
        return (
          <Feature
            name={feature.name}
            action={feature.action}
            key={feature.id}
            toggleAction={toggleActionHandler}
          />
        );
      })}

      {/* <Feature name={FEATURES[0].name} action={FEATURES[0]}/>
      <Feature name={FEATURES[1].name} action={FEATURES[1]}/>
      <Feature name={FEATURES[2].name} action={FEATURES[2]}/>
      <Feature name={FEATURES[3].name} action={FEATURES[3]}/> */}
    </div>
  );
}

export default Features;
