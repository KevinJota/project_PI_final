// import React from 'react';
import { BiSearchAlt2 } from "react-icons/bi";
import './App.css';
import CardGame from './components/CardGame';

function App() {
 
  return (
    <div className="app">
      <form className="busca-form">
          <input
            type="text"
            placeholder="Busque por um jogo"
          />
          <button type="submit">
            <BiSearchAlt2 />
          </button>
        </form>
      <div className='filters'>
        {/* FILTROS AQUI: APLIQUE FUNÇÕES aqui NESSA P#### */}
        <select name="Opcoes" id="caixa_options">
          <option value="ano">Todos os anos</option>
          <option value="ano">2022</option>
          <option value="ano">2023</option>
        </select>
        <select name="Opcoes" id="caixa_options">
          <option value="ano">Todas as plataformas</option>
          <option value="ano">Playstation 4</option>
          <option value="ano">Playstation 5</option>
        </select>
        <select name="Opcoes" id="caixa_options">
          <option value="ano">Todos os genêros</option>
          <option value="ano">acao</option>
          <option value="ano">rpg</option>
        </select>
      </div>
      
      <div className="games-container">
        <CardGame/>
        <CardGame/>
        <CardGame/>
        <CardGame/>
        <CardGame/>
        <CardGame/>
        <CardGame/>
        <CardGame/>
      </div>
      
    </div>
  );
}

export default App;


