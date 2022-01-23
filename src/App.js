import logo from './logo.svg';
import './App.css';
import './components/header/header.js'
import HeaderNav from './components/header/header.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderNav />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
