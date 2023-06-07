import React, { Component } from 'react';
import { Header } from './component/header';
import './App.css';
import { Porto } from './component/porto';
import  frame  from './Frame.svg';
import { Propos } from './component/propos';
import { Compt } from './component/compt';
import { Projets } from './component/projets';
import { Resaux } from './component/reseauxs';



class Navbar extends Component{
  state={
    title : 'Arouna Amadou Konake'
}
  render() {
    return(
    <div>
      <div className='App'>
        <h1> {this.state.title} </h1>
        <Header></Header>
      </div>
      <img src={frame} className="App-logo" alt="logo" />
      <Porto></Porto>
      <Propos />
      <Compt />
      <div className='min'>
        <Projets />
        <Resaux />
      </div>
    </div>
      
    )
   
  }
}
 export default Navbar

