import { Card } from "../../components/card";
import "./style.css";
import React, { useState } from "react";


export function Home() {

const [userName, setUserName] = useState('Seu nome aparecerá aqui...')


  return (
    <div className="container">
      <h1>Nome: {userName} </h1>
      <input 
        type={"text"} 
        placeholder={"Insira seu nome..."} 
        onChange={e => setUserName(e.target.value)}
      />
      <button type="button">Adicionar</button>

      <Card name= 'Rubens' dataCadastro='16/04/2023'/>
      <Card name= 'Rubens' dataCadastro='16/04/2023'/>
      <Card name= 'Rubens' dataCadastro='16/04/2023'/>
    </div>
  );
}
