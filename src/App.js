import './App.css';
import Device from './conponents/Device/Device';
import Watch from './conponents/Watch/Watch';

function App() {
  return (
    <div className="App">
      <Device name="uPhone" price="13000"></Device>
      <Watch></Watch>
    </div>
  );
}

export default App;
