import Header from './component/header';
import './App.css';
import { Component } from 'react';
import Porto from './component/porto';
import frame from './Frame.svg';
import Propos from './component/propos';


class Navbar extends Component{
  state={
    title : 'Arouna Amadou Konake'
}
  render() {
    return(
    <div>
      <div className='App' style={{ 
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        marginTop: "2%",
       }}
        >
        <h1>{this.state.title}</h1> 
        <Header></Header>
      </div>
      <img src={frame} className="App-logo" alt="logo" />
      <Porto></Porto>
      <Propos />
    </div>
      
    )
   
  }
}

export default Navbar;
