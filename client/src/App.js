import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, useLocation } from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage'
import Home from './components/Home/Home';
import CreatePokemon from './components/CreatePokemon/CreatePokemon';
import PokemonDetail from './components/PokemonDetail/PokemonDetail';
import NavBar from './components/NavBar/NavBar';

function App() {

  fetch('http://localhost:3001/types') // se crean cuando se renderiza

  const location = useLocation();

  const [color, setColor] = useState('teamY')

  return (
    <div>
      <React.Fragment>
        {location.pathname !== '/' && <NavBar color={color} />}
        <Route exact path="/" > <LandingPage setColor = {setColor}/> </Route>
        <Route exact path="/home"><Home color={color}/></Route>
        <Route exact path="/createpokemon"><CreatePokemon color={color}/></Route>
        <Route exact path="/pokemons/:id"
          render={({ match }) => <PokemonDetail id={match.params.id} color={color}/>} />
      </React.Fragment>
    </div>
  )
}

export default App;
