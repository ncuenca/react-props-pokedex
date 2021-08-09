import logo from './logo.svg';
import './App.css';
import Pokecard from './Pokecard'

function App() {
  return (
    <Pokecard id={4} name='Charmander' type= 'fire' baseExperience={62}/>
  );
}

export default App;
