import logo from './logo.svg';
import './App.css';
import Header from '../appHeader/appHeader';
import RandomCharacter from '../appRandom/appRandom';
import Characters from '../appCharacters/appCharacters';

function App() {
  return (
    <div className="App">
      <Header/>
      <RandomCharacter/>
      <Characters/>
      <img src="bg asset.png" alt="" style={{position: 'absolute', right: 0, bottom: 0}}/>
    </div>
  );
}

export default App;
