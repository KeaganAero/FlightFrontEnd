import React, { useState, useEffect } from "react";
import BatteryGauge from "react-battery-gauge";
import axios from "axios";
import "../Gauge-styles/battery.css";

const Battery = () => {
  const [batteryMeter, setBatteryMeter] = useState([]);

  useEffect(() => {
    const batteryLevel = async () => {
      const res = await axios.get("http://localhost:3002");
      const batteryMeter = res.data;
      var isValid = batteryMeter[0].hasOwnProperty("genVoltage");
      if (isValid) {
        setBatteryMeter(batteryMeter);
      }
      // setBatteryMeter(batteryMeter);
      // console.log(res,'battery response component');
    };
    batteryLevel();
  });

  //function to alter colour
  // const[lowBatteryValue,setLowBatteryValue]=useState()
  // const[fill,setFill]=useState()
  // const changeColor = () => {
  //   if(lowBatteryValue == 40){
  //     setFill('black')
  //   }
  // changeColor()
  // }

  var fish = "volts"
  return (
    <div className="battery-gauge">
      {batteryMeter.map((value) => (
        <BatteryGauge
          className="battery-container"
          key={value.id0}
          value={value.genVoltage }
          orientation={"vertical"}
          padding={5}
          size={400}
          animated={false}
          aspectRatio={0.28}
          charging={false}
          customization={{
            batteryBody: {
              strokeWidth: 0.5,
              cornerRadius: 5,
              fill: "none",
              strokeColor: "#111",
            },
            batteryCap: {
              fill: "red",
              strokeWidth: 1,
              strokeColor: "#111",
              cornerRadius: 2,
              capToBodyRatio: 0.4,
            },
            batteryMeter: {
              fill: "#00ff00",
              lowBatteryValue: 40,
              lowBatteryFill: "#ff3300",
              outerGap: 1,
              noOfCells: 1, // more than 1, will create cell battery
              interCellsGap: 0.5,
            },
            readingText: {
              lightContrastColor: "#111",
              darkContrastColor: "black ",
              lowBatteryColor: "red",
              fontFamily: "Helvetica",
              fontSize: 5,
              showPercentage: false,
            },
          }}
        />
      ))}
    </div>
  );
};

export default Battery;
