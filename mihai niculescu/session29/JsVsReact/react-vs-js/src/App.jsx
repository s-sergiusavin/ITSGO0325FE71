import Todo from './components/Todo';
import './App.css';

function App() {
  return (
      <div>
        <h1>My Todos</h1>
        <Todo text='Learn React' />
        <Todo text='Learn React 2' />
      </div>
  );
}

export default App;
