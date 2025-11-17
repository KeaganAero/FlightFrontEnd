import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Data-Logging-Styles/datalog.css";
import { Fade, ListItemSecondaryAction } from "@mui/material";
import Pdf from "react-to-pdf";
import Databutton from "./Databutton";
import FadeIn from 'react-fade-in';

const LiveLog = () => {
  const [logs, setLogs] = useState([]);
  const [messages, setMessages] = useState([]);

  // useEffect(()=> {
  //   localStorage.setItem('log-messages',JSON.stringify(messages));
  // },[messages])
  
// localStorage.setItem('log-messages', JSON.stringify(messages));
// JSON.parse(localStorage.getItem('log-messages'));





  useEffect(() => {
    const logging = async () => {
      // localStorage.setItem('log-messages',JSON.stringify(messages));
      const res = await axios.get("http://localhost:3002");
      const logs = res.data;
      //   console.log(logs);
      var isValid = logs[0].hasOwnProperty("msg");

      if (isValid) {
        setLogs(logs);
        console.log(logs[0], "************ live log *****************");
        setTimeout(function () {
          addItem(logs[0]);
        }, 500);
        // setTimeout(function () {
        //   addItem(logs[0].msg);
        // }, 9000);
      }
      //extract message string from object with messages
      // set messages to whatever messages we extracted from the object
    };
    logging();
  });

  const addItem = (msg) => {
    setMessages((oldArray) => [msg, ...oldArray]);
  };
  //   console.log(messages, "agaegrreeeeeeeeeeeeeeeeeeeeeeeeeeeee");

  const ref = React.createRef();

  return (
    
    <div className="box-container">

<Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button id="pdf-button" onClick={toPdf}><Databutton/></button>}
      </Pdf>

  <div class="livestatus-container">

    <h1 className="log-title">Engine Log</h1>
    <div className="row-messages" id="log-id-column">
    <div className="column" id="log-id">Time</div>
<div className="column"id="log-id">Message-Type</div>
<div className="column"id="log-id">Message</div>

    </div>
    <div ref={ref}>
  {messages.map((message) => (
    <div>
 {/* <div class="grid-item"><p className="hello">Message </p> {message.msg}</div>
 <div class="grid-item"> <p>Message Type</p>  {message.msgType}</div>
 <div class="grid-item"> <p>Time</p> {(message.systemTime)/1000}</div> */}
   
 <div class="columns">
<FadeIn className="column">
  <div className="column">{(message.systemTime)/1000}</div>
  </FadeIn>
  <FadeIn className="column">
  <div className="column">{message.msgType}</div>
  </FadeIn>
  <FadeIn className="column">
  <div className="column">{message.msg}</div>
  </FadeIn>


</div>
    
 </div>
  ))} 
  </div>
</div>


{/* 
      <ul className="log-box">
        {messages.map((item) => (
          <div>
 <li >{item.msg}</li>
          <li >{item.msgType}</li>
          </div>
         
        ))}
      </ul> */}
    </div>
  );
};

export default LiveLog;
