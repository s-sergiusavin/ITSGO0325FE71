import "./Feature.scss";

const Feature = ({ name, action, toggleAction }) => {
  //   const smartHomeApp = {
  //     toggleLights: "Toggle Lights",
  //     toggleAc: "Toggle AC",
  //     startCleaning: "Start cleaning",
  //     espresso: "Make coffe",
  //   };

  //   const { toggleLights, espresso } = smartHomeApp;
  //   console.log(name, ' Feature');

  //   console.log(toggleLights);
  //   console.log(espresso);

  function featureButtonHandler() {
    toggleAction(name);
  }

  return (
    <div className="feature">
      <h3>{name}</h3>
      <button onClick={featureButtonHandler}>{action}</button>
    </div>
  );
};

export default Feature;
