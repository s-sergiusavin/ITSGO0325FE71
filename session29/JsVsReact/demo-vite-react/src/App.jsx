import "./App.css";
import DemoComponent from "./components/DemoComponent";

function App() {
  const persons = [
    {
      fullName: 'Sergiu Savin',
      birthday: new Date(1990, 6, 30),
      address: {
        city: 'Brasov'
      }
    },
    {
      fullName: 'Sergiu Altecva',
      birthday: new Date(1980, 0, 30),
      address: {
        city: 'Bucharest'
      }
    }
  ];
  return (
    <div>
      <h1 className="test">This is my first ReactJs App</h1>
      <DemoComponent name={persons[0].fullName} birthday={persons[0].birthday}/>
      <DemoComponent name={persons[1].fullName} birthday={persons[1].birthday}/>
    </div>
  );
}

export default App;
