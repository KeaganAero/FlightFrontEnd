import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "../Data-Logging-Styles/datalog.css";
import { Fade, ListItemSecondaryAction } from "@mui/material";
import { useReactToPrint } from 'react-to-print';
import Databutton from "./Databutton";
import FadeIn from "react-fade-in";

const LiveLog = () => {
  const [logs, setLogs] = useState([]);
 
  const [messages, setMessages] = useState(() => {
    const storedMessages = sessionStorage.getItem("messages");
    return storedMessages ? JSON.parse(storedMessages) : [];
  });


  // THE FOLLOW DATA IS FOR THE PRINT LIBRARY

  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  useEffect(() => {
    const logging = async () => {
      const res = await axios.get("http://localhost:3002");
      const logs = res.data;

      var isValid = logs[0].hasOwnProperty("msg");

      if (isValid) {
        console.log(logs[0],"******************************************************")
        setLogs(logs);
        setTimeout(function () {
          addItem(logs[0]);
          
        }, 50);
      }
 
    };
    logging();
    
  });


// In this code, the addItem function checks if the oldArray is empty or if the msg value of the first item in the oldArray is different from the msg value of the new msg. If either of these conditions is true, it adds the new msg to the beginning of the array using the spread operator. Otherwise, it returns the oldArray as it is.
//This way, only when the previous value is different from the current value, the new msg will be added to the array. Otherwise, if the previous value is the same as the current value, the new msg will not be added to the array.
const addItem = (msg) => {
  setMessages((oldArray) => {
    if (oldArray.length === 0 || oldArray[0].msg !== msg.msg) {
      const newArray = [msg, ...oldArray];
      sessionStorage.setItem("messages", JSON.stringify(newArray));
      return newArray;
    }
    return oldArray;
  });
};





  return (
    <div className="box-container">
      <button id="pdf-button" onClick={handlePrint}>
        <Databutton />
      </button>

      <div class="livestatus-container">
      
        <div ref={componentRef}>
        <h1  className="log-title">ENGINE LOG</h1>
        <div className="row-messages" id="log-id-column">
          <div className="column" id="log-id">
            Time
          </div>
          <div className="column" id="log-id">
            Message-Type
          </div>
          <div className="column" id="log-id">
            Message
          </div>
        </div>
          {messages.map((message) => (
            
            <div>

              <div class="columns">
                <FadeIn className="column">
                  <div  className="column">{message.systemTime / 1000}</div>
                </FadeIn>
                <FadeIn className="column">
                  <div  className="column">{message.msgType}</div>
                </FadeIn>
                <FadeIn className="column">
                  <div  className="column">{message.msg}</div>
                </FadeIn>
              </div>
            </div>
          ))}
        </div>
      </div>


    </div>
  );
};

export default LiveLog;
