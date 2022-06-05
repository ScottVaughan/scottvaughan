import logo from './logo.svg';
import './App.scss';
import { Quote } from './components';
import { About, Expertise } from './sections';

function App() {


  return (
    <div className="App">
      <header>
        <img src="./img/header.png" alt="scott vaughan title"></img>
        <div className='line'></div>
      </header>
      <About></About>
      <Quote person="Mia Hamm">
        If you don’t love what you do, you won’t do it with much conviction or passion
      </Quote>
      <Expertise></Expertise>
    </div>
  );
}

export default App;
