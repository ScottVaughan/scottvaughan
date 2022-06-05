import logo from './logo.svg';
import './App.scss';
import { About } from './sections';

function App() {
  return (
    <div className="App">
      <header>
        <img src="./img/header.gif" alt="scott vaughan title"></img>
        <div className='line'></div>
      </header>
      <About></About>
    </div>
  );
}

export default App;
