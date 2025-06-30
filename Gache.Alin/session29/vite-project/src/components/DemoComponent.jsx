import Birthdate from "./Birthdate";
import "./DemoComponent.scss";
import PropTypes from "prop-types";
// function DemoComponent(props) {
//   return (
//     <div className="demo-component">
//       <h2>{props.name}</h2>
//       <div>{props.birthday}</div>
//     </div>
//   );
// }

function DemoComponent({ name, birthday }) {
  const logInDemoComponent = (age) => {
    console.log("Log in demo component", age);
  };

  return (
    <div className="demo-component">
      <h2>{name}</h2>
      <div>{birthday.toLocaleDateString()}</div>
      <Birthdate birthdate={birthday} loggerHandler={logInDemoComponent} />
    </div>
  );
}

DemoComponent.propTypes = {
  name: PropTypes.string,
  birthday: PropTypes.instanceOf(Date),
};

export default DemoComponent;
