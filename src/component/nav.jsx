import { Component } from "react";
import '/Users/aroun/portofolio/src/App.css';
import { Nom } from "./nom";

export class Nav extends Component {
    
    render() {
    return(
        
        <div className="nav" >
            <Nom />
            <a href="#" style={{textDecoration: "none",color:"white",}}>A Propos</a>
            <a href="#" style={{textDecoration: "none",color:"white",}}>Competences</a>
            <a href="#" style={{textDecoration: "none",color:"white",}}>Projet</a>
        </div>
    )
    }
}

