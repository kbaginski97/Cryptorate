import './App.css';
import Crypto from './Crypto';
import logo from './btc.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='img-holder'>
          <img src={logo} alt='' />
        </div>
        <h1>Bitcoin Rate</h1>
      </header >
      <Crypto />
    </div >
  );
}

export default App;
