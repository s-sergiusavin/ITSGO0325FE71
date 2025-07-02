import Feature from "./Feature";

function Features({ toggleAction }) {
  const FEATURES = [
    {
      name: "Toggle lights",
      action: "Turn the lights on",
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
      name: "Clean",
      action: "Turn on the vacuum",
      state: false,
      id: 2,
    },
    {
      name: "Coffe time ",
      action: "Make a coffe",
      state: false,
      id: 3,
    },
  ];

  const toggleTheActionHandler = (value) => {
    toggleAction(value);
  };

  return (
    <div className="features-container">
      {FEATURES.map((feature) => {
        return (
          <Feature
            name={feature.name}
            action={feature.action}
            key={feature.id}
            toggleAction={toggleTheActionHandler}
          />
        );
      })}

      {/* <Feature name={FEATURES[0].name} action={FEATURES[0].action} />
      <Feature name={FEATURES[1].name} action={FEATURES[1].action} />
      <Feature name={FEATURES[2].name} action={FEATURES[2].action} />
      <Feature name={FEATURES[3].name} action={FEATURES[3].action} /> */}
    </div>
  );
}
export default Features;
