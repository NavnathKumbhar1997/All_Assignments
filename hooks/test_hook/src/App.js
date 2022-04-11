import logo from './logo.svg';
import './App.css';
import CounterClass from './component/CounterClass';
import HookCounter from './component/HookCounter';
import HookCounterTwo from './component/HookCounterTwo';
import HookObject from './component/HookObject';
import UseEffectHook from './component/UseEffectHook';
import HookUseEffect2 from './component/HookUseEffect2';
import DataFetching from './component/DataFetching';

function App() {
  return (
    <div className="App">
      {/* <CounterClass></CounterClass> */}
      {/* <HookCounter></HookCounter> */}
      {/* <HookCounterTwo></HookCounterTwo> */}
      {/* <HookObject></HookObject> */}
      {/* <UseEffectHook></UseEffectHook> */}
      {/* <HookUseEffect2></HookUseEffect2> */}
      <DataFetching></DataFetching>
    </div>
  );
}

export default App;
