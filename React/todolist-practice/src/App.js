import './App.css';
import Clock from './components/Clock';
import Login from './components/Login';
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
      <Clock />
      <Login />
      <Todo/>
    </div>
  );
}

export default App;
