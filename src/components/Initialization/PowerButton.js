import React, { useState, useEffect } from "react";
// import "../Initialization-Styles/powerbutton.scss";
import {io} from "socket.io-client"
import { set } from "@antv/util";
import Buttontest from "./Buttontest";
const socket = io('http://localhost:3001')


const PowerButton = () => {
  const[engineOn,setEngineOn]=useState(2)

const toggle = () => {
  togglePower()
  socket.emit('send_message', {"start":engineOn})
  socket.close()
  console.log("toggle is fired from its last state**************************************************************************")
}


const togglePower = () => {
  if (engineOn === 2){
    setEngineOn(3)
  } else { setEngineOn(7)}
  console.log(engineOn, "*********** Check engine status")
  }
  




  return (
    <div>


{/* <h1>Welcome to HFE test site! 👋🏾</h1> */}


  <div onClick={toggle} ><Buttontest/></div>

  

      

    </div>
  );
};

export default PowerButton;
