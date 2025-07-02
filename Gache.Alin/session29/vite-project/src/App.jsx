import "./App.css";
import DemoComponent from "./components/DemoComponent";

function App() {
  const persons = [
    {
      fullName: "Radu",
      birthday: new Date(1994, 6, 18),
      address: {
        city: "Bucuresti",
      },
    },
    {
      fullName: "Alin",
      birthday: new Date(1999, 5, 3),
      address: {
        city: "Vulcan",
      },
    },
  ];

  return (
    <div>
      <h1 className="test">This is my first ReactJS App</h1>

      <DemoComponent
        name={persons[0].fullName}
        birthday={persons[0].birthday}
      />
      <DemoComponent
        name={persons[1].fullName}
        birthday={persons[1].birthday}
      />

      {/* <DemoComponent></DemoComponent> */}
    </div>
  );
}

export default App;
