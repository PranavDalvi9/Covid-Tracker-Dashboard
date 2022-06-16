import logo from './logo.svg';
import './App.css';
import Total from './Component/Total';
import Home from './Component/Home/Home';
import Countries from './Component/Countries/Countries';
import PiechartMain from './Component/PiechartMain/PiechartMain';

function App() {
  return (
    <div className="App">
      <h1>Hello Pranav</h1>
      {/* <Total/> */}

      <Home/>
      {/* <Countries/> */}
      <PiechartMain/>
    </div>
  );
}

export default App;
