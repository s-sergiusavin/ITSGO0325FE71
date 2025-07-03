
import './App.css'
import DemoComponent from './components/DemoComponent'

function App() {
  const person = [ {
  fullName: 'Alexandra Alina',
  birthday: new Date(1996, 5, 29),
  address: {
    city: 'Bucharest'
  }
  
},
{
  fullName: 'Mihai Preda',
  birthday: new Date(1999, 1, 22),
  address: {
    city: 'Bucharest'
  }
}
];

  return (
      <div>
        <h1 className='test'>This is my first ReactJs App</h1>
<DemoComponent name={person[0].fullName} birthday={person[0].birthday} />
<DemoComponent name={person[1].fullName} birthday={person[1].birthday} />
      </div>
      
  )
}

export default App;
