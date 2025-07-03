import './Feature.scss';

const Feature = ({ name, action, toggleAction }) => {

    // Example of destructuring an object
//   const smartHomeApp = {
//     toggleLights: "Turn the lights on",
//     toggleAC: "Turn the AC on",
//     cleanRoom: "Turn on the vacuum",
//     coffeeMachine: "Make a coffee",
//   };
//   const { toggleLights, espresso } = smartHomeApp;
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
