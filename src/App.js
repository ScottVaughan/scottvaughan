
import './App.scss';

import { Quote } from './components';
import { About, Expertise, Footer, Portfolio } from './sections';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import {faCheck, faCog, faTimes} from '@fortawesome/free-solid-svg-icons';
library.add(faCheck, faCog, faTimes);

function App() {


  return (
    <div className="App">
      <header>
        <img src="./img/header.png" alt="scott vaughan title"></img>
        <div className='line'></div>
      </header>
      <About></About>
      <Quote person="Mia Hamm" color="orange">
        If you don’t love what you do, you won’t do it with much conviction or passion
      </Quote>
      <Expertise></Expertise>
      <Quote person="David Frost" color="blue">
        Don’t aim for success if you want it, just do what you love and believe in and it will come naturally
      </Quote>
      <Portfolio></Portfolio>
      <Footer></Footer>
    </div>
  );
}

export default App;
