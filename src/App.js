 import React, { useState} from 'react';
import './App.css';
import { TabelaContagem } from './TabelaContagem';



function App() {
   const [frase, setFrase] = useState("");
   const [frases, setFrases] = useState([]);
   console.log (frases)
  return (
    <div className="App">
      <h2>
        TABELA CONTAGEM VOGAIS E CONSOANTES
      </h2>
      <p>
        <input type="text" onChange = {(E)=>setFrase(E.target.value)} value = {frase} />
        <button onClick = {()=>setFrases([...frases,frase])}>Inserir</button>
      </p>
      <br />
      <br />
      <TabelaContagem frases={frases} />
    </div>
  );
}

export default App;