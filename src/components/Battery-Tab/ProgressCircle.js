import React, { useState, useEffect } from "react";
import "../Battery-Tab-Styles/ProgressCircle.scss";
import axios from "axios";
import { timeMillisecond } from "d3";
const ProgressCircle = () => {
  const [progressData, setProgressData] = useState([]);
  useEffect(() => {
    const voltageData = async () => {
      const res = await axios.get("http://localhost:3002");
      const progressData = res.data;
      var isValid = progressData[0].hasOwnProperty("b1c0");
      if (isValid) {
        setProgressData(progressData);
      }
    };
    voltageData()
  });

var root = document.documentElement.style;

progressData.map((value)=>{
    root.setProperty("--progress",value.b1c0)
})

var batteryOne="";
progressData.map((value) =>{
    batteryOne = parseFloat(value.battery1Percentage).toFixed(1);
})


var batteryTwo="";
progressData.map((value) =>{
    batteryTwo = parseFloat(value.battery2Percentage).toFixed(1);
})


  return (
    <div>
     
        <div>
             <div class="container-pro">
        <div class="container__progressbars">
            {}
          <div class="progressbar">
            <svg class="progressbar__svg">
              <circle
                cx="80"
                cy="80"
                r="70"
                class="progressbar__svg-circle circle-html shadow-html"
              >
                {" "}
              </circle>
            </svg>
            <span class="progressbar__text shadow-html">Battery One Percentage <br></br>
            {/* replace sin value with batteryOnePercentage */}
            {batteryOne }%</span>
          </div>

          <div class="progressbar">
            <svg class="progressbar__svg">
              <circle
                cx="80"
                cy="80"
                r="70"
                class="progressbar__svg-circle circle-css shadow-css"
              >
                {" "}
              </circle>
            </svg>
            <span class="progressbar__text shadow-css">Battery Two Percentage<br></br>{batteryTwo}%</span>
          </div>
        </div>
      </div>

      <div id="main-container-social" class="main-container-social"></div>
        </div>
    
     
    </div>
  );
};

export default ProgressCircle;
