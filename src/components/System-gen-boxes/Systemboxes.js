import React, { useState, useEffect } from "react";
import "../System-gen-boxes-styles/box-styles.css";
import axios from "axios";

const Systemboxes = () => {
  const [readings, setReadings] = useState([]);
  useEffect((e) => {
    const incomingReading = async () => {
      const res = await axios.get("http://localhost:3002");
      const readings = res.data;
      // console.log(readings);
      var isValid = readings[0].hasOwnProperty("rectifierTemp");

      if (isValid) {
        setReadings(readings);
      }

      // setReadings(readings);

      // console.log(res);
    };
    incomingReading();
  });

  return (
    <div>
    
        <div className="system-boxes">
            {/* {readings.map((reading) => (
                <div>
                 <div id="box-1"></div>System Power:{reading.systemPower}
                 <div id="box-2"></div>Gen Power:{reading.genPower}
                 <div id="box-3"></div>System Capacity: 35000.0
                 </div>
            ))} */}
         
        </div>

    </div>
  );
};

export default Systemboxes;
