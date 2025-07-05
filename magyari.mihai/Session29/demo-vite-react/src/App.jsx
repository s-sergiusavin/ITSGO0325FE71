import './App.css'
import DemoComponent from './components/DemoComponent'

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
      fullName: 'Marius Moga',
      birthday: new Date(1984, 6, 5),
      address: {
        city: 'Bucuresti'
      }
    },

    {
      fullName: 'Alin Ghita',
      birthday: new Date(1987, 3, 6),
      address: {
        city: 'Craiova'
      }
    },

    {
      fullName: 'Stefan Cherescu',
      birthday: new Date(1991, 8, 12),
      address: {
        city: 'Orsova'
      }
    }

  ]

  return (
    <div>
      <h1 className='test'>4 people, 4 cities, 4 birthdays, 4 ages</h1>

      {/* <DemoComponent name={persons[0].fullName} birthday={persons[0].birthday}/>
      <DemoComponent name={persons[1].fullName} birthday={persons[1].birthday}/>
      <DemoComponent name={persons[2].fullName} birthday={persons[2].birthday}/>
      <DemoComponent name={persons[3].fullName} birthday={persons[3].birthday}/> */}

      <DemoComponent name={persons[0].fullName} city={persons[0].address.city} birthday={persons[0].birthday}/>
      <DemoComponent name={persons[1].fullName} city={persons[1].address.city} birthday={persons[1].birthday}/>
      <DemoComponent name={persons[2].fullName} city={persons[2].address.city} birthday={persons[2].birthday}/>
      <DemoComponent name={persons[3].fullName} city={persons[3].address.city} birthday={persons[3].birthday}/>




    </div>
  )
}

export default App
