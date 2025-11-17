import React, { useState, useEffect } from "react";
import { PieChart } from "react-minimal-pie-chart";
import HSBar from "react-horizontal-stacked-bar-chart";
import axios from "axios";
import "../Gauge-styles/bar.css";

const SystemGen = () => {
  const [systemData, setSystemData] = useState([]);
  useEffect(() => {
    const systemPwr = async () => {
      const res = await axios.get("http://localhost:3002");
      const systemData = res.data;
var isValid = systemData[0].hasOwnProperty("genPower")
if(isValid){
  setSystemData(systemData);
}
      // setSystemData(systemData);
      // console.log(res, " <-------------------system data for top gauge");
    };
    systemPwr();
  });
// var test1 = 60;
// var test2 = 20;
  return (
    <div className="system-bar-wrapper">
      {systemData.map((data) => (
        <div className="test">
  
          <HSBar
            height={55}
            
            //showTextIn
            // showTextUp
            // showTextDown
            id="new_id"
        
            fontColor="rgb(50,20,100)"
            data={[
              {
                name: "",
                value: Math.round(
                
                  (data.systemPower /1000-
                     data.genPower /1000+
                     data.genPower/1000)
                ),
                
                description: "",
                color: "lightgray",
              },
            
              {
                name: "",
                value: Math.round(data.genPower /1000),
                description: "",
                color: "#39FF14",
              },
       
              {
                name: "",
                value: Math.round(
                  data.systemPower  - data.genPower /1000
                ),
                
                description: "",
                color: "red",
              },
            
            ]}
          />
        </div>
      ))}
    </div>
  );
};

export default SystemGen;
