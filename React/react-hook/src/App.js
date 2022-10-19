import './App.css';
import StateEffectHookComp from './components/StateEffectHookComp';
import ReducerComp from './components/ReducerComp';
import UseMemoComp from './components/useMemoComp';
import CallbackComp from './components/CallbackComp';
import RefComp from './components/RefComp';
function App() {
  return (
    <div className="App">
    <StateEffectHookComp />
    <ReducerComp />
    <UseMemoComp />
    <CallbackComp />   
    <RefComp />
    </div>
  );
}

export default App;
