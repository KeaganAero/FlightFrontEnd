import React, { useState, useEffect } from "react";

import axios from "axios";
const EngineStatus = () => {
  const [consoleMessages, setConsoleMessages] = useState([]);

  useEffect(() => {
    const engineData = async () => {
      const res = await axios.get("http://localhost:3002");
      const consoleMessages = res.data;
      var isValid = consoleMessages[0].hasOwnProperty('msgType')
      if(isValid){
        setConsoleMessages(consoleMessages)
      }
      // setConsoleLogs(consoleLogs);
    };
    engineData();
  });

  //msgType acts as Previous data while consoleLogs acts as current data.
  // when new data comes in, check the data vs the previous data i.e. 
  //check msgType vs consoleLogs, if msgType not equal to consolelogs then add a new line
  const[msgType,setMessageType]=useState(consoleMessages)


//  const newLineParser =()=> {if(consoleLogs != msgType ){
//     msgType+"\n"
//   }}
  return (
    <div className="engine-status-container">
      {consoleMessages.map((consolelog) => (
      
        <ul className="log-box" key={consoleMessages.timeElapsed}>
     <li>msgType:{consolelog.msgType}</li>
    
          <li>msg:{consolelog.msg}</li>
        </ul>
       
      ))}
    </div>
  );
};

export default EngineStatus;
