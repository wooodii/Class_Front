import logo from './logo.svg';
import './App.css';
import MapComp from './components/MapComp';
import MapCompTest from './components/MapCompTest';
import LifeCycleComp from './components/LifeCycleComp';

function App() {
  return (
    <div className="App">
      <MapComp/>    
      <MapCompTest/>
      <LifeCycleComp /> 
    </div>
  );
}

export default App;
