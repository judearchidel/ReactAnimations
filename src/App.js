import React, { Component } from "react";
import Transition from 'react-transition-group/Transition';

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
 constructor(props){
 super(props);
 this.Openmodal = this.Openmodal.bind(this);
 this.Closemodal = this.Closemodal.bind(this);
 this.state ={
   modelOpen: false,
   showblock: false
 }
 }

 Openmodal = () => {
   console.log("clicked open");
   this.setState({
     modelOpen: true
   })
 } 
 Closemodal = () =>{
   console.log("clicked close");
   this.setState({
     modelOpen: false
   })
 }

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button  className="Button" onClick ={ ()=> { this.setState(prevstate => ({
          showblock: !prevstate.showblock
        }))}}>Toogle</button>
        <br></br>
        <Transition in={this.state.showblock} 
        timeout={1000} 
        mountOnEnter 
        unmountOnExit
        onEnter = {()=> console.log("enter")}
        onEntering = {()=> console.log("enterering")}
        onEntered = {()=> console.log("entered")}
        onExit ={ ()=> console.log("exit")}
        onExiting ={()=> console.log("exiting")}
        onExited ={()=>console.log('exicting')}
        >
         {state => (<div style={{
          backgroundColor: 'red',
          width: 100,
          height: 100,
          margin: "auto",
          transition: 'opacity 1s ease-out',
          opacity: state === 'exiting'? 0 : 1
        }}></div>)}
        </Transition>
      
       <Modal closed ={() => this.Closemodal}  sho ={this.state.modelOpen}/>
        { this.state.modelOpen? <Backdrop shows={this.state.modelOpen}/> : null }
        <button className="Button" onClick={() => this.Openmodal()}>Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
