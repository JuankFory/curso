import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./Api.css";
//import App from './App';
import reportWebVitals from './reportWebVitals';
import {/*Greeting*/ Greeting, UserCard,} from "./Greeting";
import {Button} from "./Button"
import {Api} from "./Posts";
import { App } from './Dato';
import { Employee } from './Employee';
import { Modal } from 'bootstrap';
import {Soap} from "./ServiceWeb";

//import {refresh} from "react-refresh"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
   {/*  <Greeting  title="Hola Mundo" name="Juan"/>
    <Greeting title="Hola Mundo"  name="Carlos" />    
    <Greeting title="Hola Mundo" />
    <Greeting  title="Hola Mundo"/>  */}
  {/*   <UserCard name="Juan Carlos" valor={3000} married={false} 
    point={[199,200,300]} address={{street:"calle 27# 26 a 72",
     city:"Cali, Valle del Cauca"}} text={true}/>

<UserCard name="Andres Felipe" valor={7500} married={true} 
    point={[500,700,30]} address={{street:"calle 27# 26 a 72", city:"Bucaramanga"}} text={false}/>
<Button text="Inicio" />
<Button text="Login"/>
<Button text="salir"/>
<input onChange={function(e){
console.log(e.target.value)
}}/>
<br/><br/>
<form onSubmit={Greeting}>
  <span>Nombre</span> <input id='nom'/>
  <span>Apellido</span> <input id='ape'/>  
  <button onClick={(e)=>{  
    console.log("Enviando Dato")
  }}>Enviar</button>
</form> */}
    <Api />
    <App/>
   <Soap/>
    <Employee/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
