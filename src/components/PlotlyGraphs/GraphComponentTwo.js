import React, { useState, useEffect, useLayoutEffect } from "react";
import "../PlotlyGraphsStyles/plotly.css";
import axios from "axios";
import Plot from "react-plotly.js";
import FormControl from "@mui/material/FormControl";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import Box from '@mui/material/Box';

import FormLabel from "@mui/material/FormLabel";

const GraphComponentTwo = () => {


  var genVoltageColour =  <Box
  sx={{
    width: 300,
    height: 300,
    backgroundColor: 'red',
    '&:hover': {
      backgroundColor: 'red',
      opacity: [0],
    },
  }}
/>

var systemPowerColour = <Box

sx={{
  width: 10,
  height: 10,
  backgroundColor: 'red',
  '&:hover': {
    backgroundColor: 'red',
    opacity: [0],
  },
}}
/>
  const [plotData, setPlotData] = useState(JSON.parse(localStorage.getItem('graph-data')));

  useEffect(() => {
    localStorage.setItem('graph-data',JSON.stringify(plotData));
    const mapData = async () => {
      const res = await axios.get("http://localhost:3002");
      const plotData = res.data;
      var isValid = plotData[0].hasOwnProperty("genVoltage");
      if (isValid) {
        setPlotData(plotData);
      }
    };
    mapData();
  });

  ///////////////////////////////////////////////////////////// FLAT LINE Graph that has 0 values on both axis //////////////////

  useEffect(() => {
    const interval = setInterval(() => {
      plotData.map((value) =>
        setflatTrace((prev) => {
          return {
            x: [...prev.x, 0],
            y: [...prev.y.slice(1), null],
            marker: { color: "white" },
            showlegend: false,
          };
        })
      );
    }, []);

    return () => {
      clearInterval(interval);
    };
  });
  /// SHOW LEGEND STATE //
  const[toggleLegend,settoggleLegend]=useState(true)

  ////////////////////////////// FLAT LINE GRAPH ABOVE ////////////////////////////

  ///////////////////////////////////////////////////////////// USE EFFECT FOR SYSTEM POWER
  useEffect(() => {
    const interval = setInterval(() => {
      plotData.map((value) =>
        setsystemPower((prev) => {
          return {
            showlegend: true,
            x: [...prev.x, value.timeElapsed],
            y: [...prev.y.slice(1), value.systemPower],
            type: "scatter",
            mode: "lines",
            marker: { color: "red" },
            name: "System Power(KW)",
            
          }
      
        })
      );
    }, []);

    return () => {
      clearInterval(interval);
    };
  });

  //////////////////////////////////////////////////////// USE EFFECT FOR GEN POWER
  useEffect(() => {
    const interval = setInterval(() => {
      plotData.map((value) =>
        setgenPower((prev) => {
          return {
            x: [...prev.x, value.timeElapsed],
            y: [...prev.y.slice(1), value.genPower],
            name: "Gen Power(KW)",
            showlegend: true,
          };
        })
      );
    }, []);

    return () => {
      clearInterval(interval);
    };
  });

  ////////////////////////////////////////////////////////////Use Effect for GEN VOLTAGE
  useEffect(() => {
    const interval = setInterval(() => {
      plotData.map((value) =>
        setgenVoltage((prev) => {
          return {
            x: [...prev.x, value.timeElapsed],
            y: [...prev.y.slice(1), value.genVoltage * 100],
            name: "Gen Voltage(V)"
          };
        })
      );
    }, []);

    return () => {
      clearInterval(interval);
    };
  });

  ////////////////////////////////////////////////////////////Use Effect for BATTERY VOLTAGE
  useEffect(() => {
    const interval = setInterval(() => {
      plotData.map((value) =>
        setbatteryVoltage((prev) => {
          return {
            x: [...prev.x, value.timeElapsed],
            y: [...prev.y.slice(1), value.batteryVoltage * 100],
            name: "Bat Voltage(V)"
          };
        })
      );
    }, []);

    return () => {
      clearInterval(interval);
    };
  });

  ////////////////////////////////////////////////////////////Use Effect for generator current
  useEffect(() => {
    const interval = setInterval(() => {
      plotData.map((value) =>
        setgeneratorCurrent((prev) => {
          return {
            x: [...prev.x, value.timeElapsed],
            y: [...prev.y.slice(1), value.genCurrent * 100],
            name:"Gen Current(I)"
          };
        })
      );
    }, []);

    return () => {
      clearInterval(interval);
    };
  });

  ///////////////////////////////////////////////////////////// USE EFFECT FOR STATOR TEMP
  useEffect(() => {
    const interval = setInterval(() => {
      plotData.map((value) =>
        setstatorTemp((prev) => {
          return {
            x: [...prev.x, value.timeElapsed],
            y: [...prev.y.slice(1), value.statorTemp * 10],
            name:"Stator Temp(F)"
          };
        })
      );
    }, []);

    return () => {
      clearInterval(interval);
    };
  });

  ///////////////////////////////////////////////////////////// USE EFFECT FOR BATTERY CURRENT
  useEffect(() => {
    const interval = setInterval(() => {
      plotData.map((value) =>
        setbatterycurrentNet((prev) => {
          return {
            x: [...prev.x, value.timeElapsed],
            y: [...prev.y.slice(1), value.batteryCurrentNet * 10],
            name: "Bat Current(I)"
          };
        })
      );
    }, []);

    return () => {
      clearInterval(interval);
    };
  });

  ///////////////////////////////////////////////////////////// USE EFFECT FOR THROTTLE
  useEffect(() => {
    const interval = setInterval(() => {
      plotData.map((value) =>
        setThrottle((prev) => {
          return {
            x: [...prev.x, value.timeElapsed],
            y: [...prev.y.slice(1), value.throttle * 10],
            name: "Throttle(%)"
          };
        })
      );
    }, []);

    return () => {
      clearInterval(interval);
    };
  });

  ///////////////////////////////////////////////////////////// USE EFFECT FOR SETPOINT
  useEffect(() => {
    const interval = setInterval(() => {
      plotData.map((value) =>
        setSetpoint((prev) => {
          return {
            x: [...prev.x, value.timeElapsed],
            y: [...prev.y.slice(1), value.setpoint * 10],
            name: "SetPoint(V)"
          };
        })
      );
    }, []);

    return () => {
      clearInterval(interval);
    };
  });

  ///////////////////////////////////////////////////////////// USE EFFECT FOR RPM
  useEffect(() => {
    const interval = setInterval(() => {
      plotData.map((value) =>
        setRPM((prev) => {
          return {
            x: [...prev.x, value.timeElapsed],
            y: [...prev.y.slice(1), value.RPM],
            name: "RPM"
          };
        })
      );
    }, []);

    return () => {
      clearInterval(interval);
    };
  });

  ///////////////////////////////////////////////////////////// USE EFFECT FOR FUEL CONSUMPTION
  useEffect(() => {
    const interval = setInterval(() => {
      plotData.map((value) =>
        setfuelConsumption((prev) => {
          return {
            x: [...prev.x, value.timeElapsed],
            y: [...prev.y.slice(1), value.fuelConsumption],
            name: "Fuel Consumption(G/hr)"
          };
        })
      );
    }, []);

    return () => {
      clearInterval(interval);
    };
  });

  ///////////////////////////////////////////////////////////// USE EFFECT FOR MAP
  useEffect(() => {
    const interval = setInterval(() => {
      plotData.map((value) =>
        setMAP((prev) => {
          return {
            x: [...prev.x, value.timeElapsed],
            y: [...prev.y.slice(1), value.MAP * 100],
            name: "MAP(kPa)"
          };
        })
      );
    }, []);

    return () => {
      clearInterval(interval);
    };
  });

  ///////////////////////////////////////////////////////////// USE EFFECT FOR FUEL PRESSURE
  useEffect(() => {
    const interval = setInterval(() => {
      plotData.map((value) =>
        setfuelPressure((prev) => {
          return {
            x: [...prev.x, value.timeElapsed],
            y: [...prev.y.slice(1), value.fuelPressure],
            name:"Fuel Pressure(PSI)"
          };
        })
      );
    }, []);

    return () => {
      clearInterval(interval);
    };
  });

  ///////////////////////////////////////////////////////////// USE EFFECT FOR rectifier temperature
  useEffect(() => {
    const interval = setInterval(() => {
      plotData.map((value) =>
        setrectifierTemp((prev) => {
          return {
            x: [...prev.x, value.timeElapsed],
            y: [...prev.y.slice(1), value.rectifierTemp * 10],
            name:"Rectifier Temp(F)"
          };
        })
      );
    }, []);

    return () => {
      clearInterval(interval);
    };
  });

  ///////////////////////////////////////////////////////////// USE EFFECT FOR regulator temperature
  useEffect(() => {
    const interval = setInterval(() => {
      plotData.map((value) =>
        setregulatorTemp((prev) => {
          return {
            x: [...prev.x, value.timeElapsed],
            y: [...prev.y.slice(1), value.regulatorTemp * 10],
            name:"Regulator Temp(F)"
          };
        })
      );
    }, []);

    return () => {
      clearInterval(interval);
    };
  });

  ///////////////////////////////////////////////////////////// USE EFFECT FOR CHT
  useEffect(() => {
    const interval = setInterval(() => {
      plotData.map((value) =>
        setCHT((prev) => {
          return {
            x: [...prev.x, value.timeElapsed],
            y: [...prev.y.slice(1), value.CHT * 10],
            name: "CHT(F)"
          };
        })
      );
    }, []);

    return () => {
      clearInterval(interval);
    };
  });

  ///////////////////////////////////////////////////////////// USE EFFECT FOR MAT
  useEffect(() => {
    const interval = setInterval(() => {
      plotData.map((value) =>
        setMAT((prev) => {
          return {
            x: [...prev.x, value.timeElapsed],
            y: [...prev.y.slice(1), value.MAT * 10],
            name: "MAT(F)"
          };
        })
      );
    }, []);

    return () => {
      clearInterval(interval);
    };
  });

  ////////////////////////////////////////////////// DATA FOR DYNAMIC SCOPE RANGE
  const countZero = 1000;
  const countOne = 1000;
  const countTwo = 1000;
  const countThree = 1000;
  const countFour = 1000;
  ////////////////////////////////////////////////////// TEST TRACE ALGORITHM
  const startingTest = Array(countZero)
    .fill(1)
    .map((_, i) => i);

  ///////////////////////////////////////////////////// Trace Zero algorithm
  const startingNumbersZero = Array(countZero)
    .fill(1)
    .map((_, i) => i);

  ////////////////////////////////////////////////////// Trace One algorithm
  const startingNumbersOne = Array(countOne)
    .fill(1)
    .map((_, i) => i);

  /////////////////////////////////////////////////// Trace Two algorithm
  const startingNumbersTwo = Array(countTwo)
    .fill(1)
    .map((_, i) => i);

  /////////////////////////////////////////////////// Trace Three algorithm
  const startingNumbersbatteryVoltage = Array(countThree)
    .fill(1)
    .map((_, i) => i);

  /////////////////////////////////////////////////// Trace Four algorithm
  const startingNumbersgeneratorCurrent = Array(countFour)
    .fill(1)
    .map((_, i) => i);

  /////////////////////////////////////////////////// Trace Five algorithm
  const startingNumbersstatorTemp = Array(countFour)
    .fill(1)
    .map((_, i) => i);

  /////////////////////////////////////////////////// Trace six algorithm
  const startingNumbersbatteryCurrent = Array(countFour)
    .fill(1)
    .map((_, i) => i);

  /////////////////////////////////////////////////// Trace seven algorithm
  const startingNumbersthrottle = Array(countFour)
    .fill(1)
    .map((_, i) => i);

  /////////////////////////////////////////////////// Trace eight algorithm
  const startingNumberssetpoint = Array(countFour)
    .fill(1)
    .map((_, i) => i);

  /////////////////////////////////////////////////// Trace nine algorithm
  const startingNumbersRPM = Array(countFour)
    .fill(1)
    .map((_, i) => i);

  /////////////////////////////////////////////////// Trace ten algorithm
  const startingNumbersfuelconsumption = Array(countFour)
    .fill(1)
    .map((_, i) => i);

  /////////////////////////////////////////////////// Trace Eleven algorithm
  const startingNumbersMAP = Array(countFour)
    .fill(1)
    .map((_, i) => i);

  /////////////////////////////////////////////////// Trace Twelve algorithm
  const startingNumbersFuelPressure = Array(countFour)
    .fill(1)
    .map((_, i) => i);

  /////////////////////////////////////////////////// Trace Thirteen algorithm
  const startingNumbersrectifierTemp = Array(countFour)
    .fill(1)
    .map((_, i) => i);

  /////////////////////////////////////////////////// Trace fourteen algorithm
  const startingNumbersregulatorTemp = Array(countFour)
    .fill(1)
    .map((_, i) => i);

  /////////////////////////////////////////////////// Trace fifteen algorithm
  const startingNumbersCHT = Array(countFour)
    .fill(1)
    .map((_, i) => i);

  /////////////////////////////////////////////////// Trace fifteen algorithm
  const startingNumbersMAT = Array(countFour)
    .fill(1)
    .map((_, i) => i);

  //////////////////////////////////////////////////// STATE FOR ZERO PLOT GRAPH

  const [flatTrace, setflatTrace] = useState({
    x: startingTest,
    y: startingTest,
  });
  ///////////////////////////////////////////////////// State for system power

  const [systemPower, setsystemPower] = useState({
    x: startingNumbersZero,
    y: startingNumbersZero,
  });

  ///////////////////////////////////////////////////// State for gen power
  const [genPower, setgenPower] = useState({
    x: startingNumbersOne,
    y: startingNumbersOne,
  });

  ///////////////////////////////////////////////////// State for gen voltage
  const [genVoltage, setgenVoltage] = useState({
    x: startingNumbersTwo,
    y: startingNumbersTwo,
  });

  ///////////////////////////////////////////////////// State for battery voltage
  const [batteryVoltage, setbatteryVoltage] = useState({
    x: startingNumbersbatteryVoltage,
    y: startingNumbersbatteryVoltage,
  });

  ///////////////////////////////////////////////////// State for generator Current
  const [generatorCurrent, setgeneratorCurrent] = useState({
    x: startingNumbersgeneratorCurrent,
    y: startingNumbersgeneratorCurrent,
  });

  ///////////////////////////////////////////////////// State for stator temp
  const [statorTemp, setstatorTemp] = useState({
    x: startingNumbersstatorTemp,
    y: startingNumbersstatorTemp,
  });

  ///////////////////////////////////////////////////// State for Battery current
  const [batterycurrentNet, setbatterycurrentNet] = useState({
    x: startingNumbersbatteryCurrent,
    y: startingNumbersbatteryCurrent,
  });

  ///////////////////////////////////////////////////// State for throttle
  const [throttle, setThrottle] = useState({
    x: startingNumbersthrottle,
    y: startingNumbersthrottle,
  });

  ///////////////////////////////////////////////////// State for setpoint
  const [setpoint, setSetpoint] = useState({
    x: startingNumberssetpoint,
    y: startingNumberssetpoint,
  });

  ///////////////////////////////////////////////////// State for RPM
  const [RPM, setRPM] = useState({
    x: startingNumbersRPM,
    y: startingNumbersRPM,
  });

  ///////////////////////////////////////////////////// State for FUEL CONSUMPTION
  const [fuelConsumption, setfuelConsumption] = useState({
    x: startingNumbersfuelconsumption,
    y: startingNumbersfuelconsumption,
  });

  ///////////////////////////////////////////////////// State for MAP
  const [MAP, setMAP] = useState({
    x: startingNumbersMAP,
    y: startingNumbersMAP,
  });

  ///////////////////////////////////////////////////// State for FUEL PRESSURE
  const [fuelPressure, setfuelPressure] = useState({
    x: startingNumbersFuelPressure,
    y: startingNumbersFuelPressure,
  });

  ///////////////////////////////////////////////////// State for rectifier temp
  const [rectifierTemp, setrectifierTemp] = useState({
    x: startingNumbersrectifierTemp,
    y: startingNumbersrectifierTemp,
  });

  ///////////////////////////////////////////////////// State for regulator temp
  const [regulatorTemp, setregulatorTemp] = useState({
    x: startingNumbersregulatorTemp,
    y: startingNumbersregulatorTemp,
  });

  ///////////////////////////////////////////////////// State foR CHT temp
  const [CHT, setCHT] = useState({
    x: startingNumbersCHT,
    y: startingNumbersCHT,
  });

  ///////////////////////////////////////////////////// State foR MAT temp
  const [MAT, setMAT] = useState({
    x: startingNumbersMAT,
    y: startingNumbersMAT,
  });

  // state for changing plot points boolean

  const [genpowerChange, setgenpowerChange] = useState(false);
  const [systempowerChange, setsystempowerChange] = useState(false);
  const [genvoltageChange, setgenvoltageChange] = useState(false);
  const [batteryvoltageChange, setbatteryvoltageChange] = useState(false);
  const [generatorcurrentChange, setgeneratorcurrentChange] = useState(false);
  const [statortempChange, setstatortempChange] = useState(false);
  const [batterycurrentChange, setbatterycurrentChange] = useState(false);
  const [throttleChange, setthrottleChange] = useState(false);
  const [setpointChange, setSetpointChange] = useState(false);
  const [RPMChange, setRPMChange] = useState(false);
  const [fuelconsumptionChange, setfuelconsumptionChange] = useState(false);
  const [mapChange, setmapChange] = useState(false);
  const [fuelPressureChange, setfuelPressureChange] = useState(false);
  const [rectifierTempChange, setrectifierTempChange] = useState(false);
  const [regulatorTempChange, setregulatorTempChange] = useState(false);
  const [chtChange, setchtChange] = useState(false);
  const [matChange, setmatChange] = useState(false);

  /////////////// individual states for  load screen/page refresh state  //////////////

  const [systempowLoad, setsystempowLoad] = useState(true);
  const [genpowLoad, setgenpowLoad] = useState(true);
  const [genvoltageLoad, setgenvoltageLoad] = useState(true);
  const [batteryvoltageLoad, setbatteryvoltageLoad] = useState(true);
  const [gencurrentLoad, setgencurrentLoad] = useState(true);
  const [batterycurrentLoad, setbatterycurrentLoad] = useState(true);
  const [throttleLoad, setthrottleLoad] = useState(true);
  const [setpointLoad, setsetpointLoad] = useState(true);
  const [rpmLoad, setrpmLoad] = useState(true);
  const [fuelconsumptionLoad, setfuelconsumptionLoad] = useState(true);
  const [mapLoad, setmapLoad] = useState(true);
  const [fuelpressureLoad, setfuelpressureLoad] = useState(true);
  const [rectifiertempLoad, setrectifiertempLoad] = useState(true);
  const [regulatortempLoad, setregulatortempLoad] = useState(true);
  const [statortempLoad, setstatortempLoad] = useState(true);
  const [chtLoad, setchtLoad] = useState(true);
  const [matLoad, setmatLoad] = useState(true);

////////////////////////////////////////////////////////////////////////////////////////

//   useEffect(()=>{
//     localStorage.setItem('gen-power-storage',genpowLoad);
//     localStorage.setItem('setpoint-storage',setpointLoad);
//  },[genpowLoad,setpointLoad]);

///////////////////////////////////////////////////////////////////////////////////////////


  ////// PAGE LOAD FUNCTION: SETS ALL PLOTS ON GRAPH TO ZERO ON PAGE LOAD(INVISIBLE)
  // useLayoutEffect(() => {
  //   const onPageLoad = () => {
  //     if (
  //       systempowLoad === true &&
  //       genpowLoad === true &&
  //       genvoltageLoad === true &&
  //       batteryvoltageLoad === true &&
  //       gencurrentLoad === true &&
  //       batterycurrentLoad === true &&
  //       throttleLoad === true &&
  //       setpointLoad === true &&
  //       rpmLoad === true &&
  //       fuelconsumptionLoad === true &&
  //       mapLoad === true &&
  //       fuelpressureLoad === true &&
  //       rectifiertempLoad === true &&
  //       regulatortempLoad === true &&
  //       statortempLoad === true &&
  //       chtLoad === true &&
  //       matLoad === true
  //     ) {
  //       setsystemPower(flatTrace);
  //       setgenPower(flatTrace);
  //       setgenVoltage(flatTrace);
  //       setbatteryVoltage(flatTrace);
  //       setgeneratorCurrent(flatTrace);
  //       setbatterycurrentNet(flatTrace);
  //       setThrottle(flatTrace);
  //       setSetpoint(flatTrace);
  //       setRPM(flatTrace);
  //       setfuelConsumption(flatTrace);
  //       setMAP(flatTrace);
  //       setfuelPressure(flatTrace);
  //       setrectifierTemp(flatTrace);
  //       setregulatorTemp(flatTrace);
  //       setstatorTemp(flatTrace);
  //       setCHT(flatTrace);
  //       setMAT(flatTrace);

  //     } else if(systempowLoad === false){
  //       setsystemPower(systemPower)
  //     }
  //   };
  //   onPageLoad();
  // });
  //// system power disapearing act
  useLayoutEffect(() => {
    const onPageLoad = () => {
      if (systempowLoad === true) {
        setsystemPower(flatTrace);
      } else if (systempowLoad === false) {
        setsystemPower(systemPower);
      }
    };
    onPageLoad();
  });
  // gen power disapearing act
  useLayoutEffect(() => {
    const onPageLoad = () => {
      if (genpowLoad === true) {
        setgenPower(flatTrace);
      } else if (genpowLoad === false) {
        setgenPower(genPower);
      }
    };
    onPageLoad();
  });
  // gen voltage disappearing act
  useLayoutEffect(() => {
    const onPageLoad = () => {
      if (genvoltageLoad === true) {
        setgenVoltage(flatTrace);
      } else if (genvoltageLoad === false) {
        setgenVoltage(genVoltage);
      }
    };
    onPageLoad();
  });
  // battery voltage disappearing act
  useLayoutEffect(() => {
    const onPageLoad = () => {
      if (batteryvoltageLoad === true) {
        setbatteryVoltage(flatTrace);
      } else if (batteryvoltageLoad === false) {
        setbatteryVoltage(batteryVoltage);
      }
    };
    onPageLoad();
  });

  // gen current disappearing act
  useLayoutEffect(() => {
    const onPageLoad = () => {
      if (gencurrentLoad === true) {
        setgeneratorCurrent(flatTrace);
      } else if (gencurrentLoad === false) {
        setgeneratorCurrent(generatorCurrent);
      }
    };
    onPageLoad();
  });

  // battery current disappearing act
  useLayoutEffect(() => {
    const onPageLoad = () => {
      if (batterycurrentLoad === true) {
        setbatterycurrentNet(flatTrace);
      } else if (batterycurrentLoad === false) {
        setbatterycurrentNet(batterycurrentNet);
      }
    };
    onPageLoad();
  });

  // throttle disappearing act
  useLayoutEffect(() => {
    const onPageLoad = () => {
      if (throttleLoad === true) {
        setThrottle(flatTrace);
      } else if (throttleLoad === false) {
        setThrottle(throttle);
      }
    };
    onPageLoad();
  });

  // setpoint disappearing act
  useLayoutEffect(() => {
    const onPageLoad = () => {
      if (setpointLoad === true) {
        setSetpoint(flatTrace);
      } else if (setpointLoad === false) {
        setSetpoint(setpoint);
      }
    };
    onPageLoad();
  });

  // RPM disappearing act
  useLayoutEffect(() => {
    const onPageLoad = () => {
      if (rpmLoad === true) {
        setRPM(flatTrace);
      } else if (rpmLoad === false) {
        setRPM(RPM);
      }
    };
    onPageLoad();
  });

  // throttle disappearing act
  useLayoutEffect(() => {
    const onPageLoad = () => {
      if (throttleLoad === true) {
        setThrottle(flatTrace);
      } else if (throttleLoad === false) {
        setThrottle(throttle);
      }
    };
    onPageLoad();
  });

  // fuel consumption disappearing act
  useLayoutEffect(() => {
    const onPageLoad = () => {
      if (fuelconsumptionLoad === true) {
        setfuelConsumption(flatTrace);
      } else if (fuelconsumptionLoad === false) {
        setfuelConsumption(fuelConsumption);
      }
    };
    onPageLoad();
  });

  // fuel consumption disappearing act
  useLayoutEffect(() => {
    const onPageLoad = () => {
      if (fuelconsumptionLoad === true) {
        setfuelConsumption(flatTrace);
      } else if (fuelconsumptionLoad === false) {
        setfuelConsumption(fuelConsumption);
      }
    };
    onPageLoad();
  });

  // MAP disappearing act
  useLayoutEffect(() => {
    const onPageLoad = () => {
      if (mapLoad === true) {
        setMAP(flatTrace);
      } else if (mapLoad === false) {
        setMAP(MAP);
      }
    };
    onPageLoad();
  });

  // fuel pressure disappearing act
  useLayoutEffect(() => {
    const onPageLoad = () => {
      if (fuelpressureLoad === true) {
        setfuelPressure(flatTrace);
      } else if (fuelpressureLoad === false) {
        setfuelPressure(fuelPressure);
      }
    };
    onPageLoad();
  });

  // rectifier temp disappearing act
  useLayoutEffect(() => {
    const onPageLoad = () => {
      if (rectifiertempLoad === true) {
        setrectifierTemp(flatTrace);
      } else if (rectifiertempLoad === false) {
        setrectifierTemp(rectifierTemp);
      }
    };
    onPageLoad();
  });

  // regulator temp disappearing act
  useLayoutEffect(() => {
    const onPageLoad = () => {
      if (regulatortempLoad === true) {
        setregulatorTemp(flatTrace);
      } else if (regulatortempLoad === false) {
        setregulatorTemp(regulatorTemp);
      }
    };
    onPageLoad();
  });

  // stator temp disappearing act
  useLayoutEffect(() => {
    const onPageLoad = () => {
      if (statortempLoad === true) {
        setstatorTemp(flatTrace);
      } else if (statortempLoad === false) {
        setstatorTemp(statorTemp);
      }
    };
    onPageLoad();
  });

  // CHT disappearing act
  useLayoutEffect(() => {
    const onPageLoad = () => {
      if (chtLoad === true) {
        setCHT(flatTrace);
      } else if (chtLoad === false) {
        setCHT(CHT);
      }
    };
    onPageLoad();
  });

  // MAT disappearing act
  useLayoutEffect(() => {
    const onPageLoad = () => {
      if (matLoad === true) {
        setMAT(flatTrace);
      } else if (matLoad === false) {
        setMAT(MAT);
      }
    };
    onPageLoad();
  });

  //////////////////////***********************************////////////////////////////////////

  // This is a use effect containing one plot of live data, that switches to our dummy data "flatTrace" which gives the illusion of no plot on the graph. This toggles and returns back to the graph with actual data.
  //// Data :GenPower
  useLayoutEffect(() => {
    if (genpowerChange === true) {
      setgenPower(flatTrace);
      // console.log("data was changed");
    }
  }, [genpowerChange, flatTrace]);

  //// Data: SystemPower
  useLayoutEffect(() => {
    if (systempowerChange === true) {
      setsystemPower(flatTrace);
    }
  }, [systempowerChange, flatTrace]);

  //// Data: genVoltage
  useLayoutEffect(() => {
    if (genvoltageChange === true) {
      setgenVoltage(flatTrace);
      // console.log("data was changed");
    }
  }, [genvoltageChange, flatTrace]);

  //// Data :batteryVoltage
  useLayoutEffect(() => {
    if (batteryvoltageChange === true) {
      setbatteryVoltage(flatTrace);
      console.log("data was changed for battery voltage");
    }
  }, [batteryVoltage, flatTrace, batteryvoltageChange]);

  //// Data :generator Current
  useLayoutEffect(() => {
    if (generatorcurrentChange === true) {
      setgeneratorCurrent(flatTrace);
      // console.log("data was changed");
    }
  }, [generatorCurrent, flatTrace, generatorcurrentChange]);

  //// Data :stator temp
  useLayoutEffect(() => {
    if (statortempChange === true) {
      setstatorTemp(flatTrace);
      // console.log("data was changed");
    }
  }, [statorTemp, flatTrace, statortempChange]);

  //// Data : battery current
  useLayoutEffect(() => {
    if (batterycurrentChange === true) {
      setbatterycurrentNet(flatTrace);
      // console.log("data was changed");
    }
  }, [batterycurrentNet, flatTrace, batterycurrentChange]);

  //// Data : throttle
  useLayoutEffect(() => {
    if (throttleChange === true) {
      setThrottle(flatTrace);
      // console.log("data was changed");
    }
  }, [throttle, flatTrace, throttleChange]);

  //// Data : setpoint
  useLayoutEffect(() => {
    if (setpointChange === true) {
      setSetpoint(flatTrace);
      // console.log("data was changed");
    }
  }, [setpoint, flatTrace, setpointChange]);

  //// Data : RPM
  useLayoutEffect(() => {
    if (RPMChange === true) {
      setRPM(flatTrace);
      // console.log("data was changed");
    }
  }, [RPM, flatTrace, RPMChange]);

  //// Data : FUEL CONSUMPTION
  useLayoutEffect(() => {
    if (fuelconsumptionChange === true) {
      setfuelConsumption(flatTrace);
      // console.log("data was changed");
    }
  }, [fuelConsumption, flatTrace, fuelconsumptionChange]);

  //// Data : MAP
  useLayoutEffect(() => {
    if (mapChange === true) {
      setMAP(flatTrace);
      // console.log("data was changed");
    }
  }, [MAP, flatTrace, mapChange]);

  //// Data : fuel pressure
  useLayoutEffect(() => {
    if (fuelPressureChange === true) {
      setfuelPressure(flatTrace);
      // console.log("data was changed");
    }
  }, [fuelPressure, flatTrace, fuelPressureChange]);

  //// Data : rectifier temp
  useLayoutEffect(() => {
    if (rectifierTempChange === true) {
      setrectifierTemp(flatTrace);
      // console.log("data was changed");
    }
  }, [rectifierTemp, flatTrace, rectifierTempChange]);

  //// Data : regulator temp
  useLayoutEffect(() => {
    if (regulatorTempChange === true) {
      setregulatorTemp(flatTrace);
      // console.log("data was changed");
    }
  }, [regulatorTemp, flatTrace, regulatorTempChange]);

  //// Data : CHT
  useLayoutEffect(() => {
    if (chtChange === true) {
      setCHT(flatTrace);
      // console.log("data was changed");
    }
  }, [CHT, flatTrace, chtChange]);

  //// Data : MAT
  useLayoutEffect(() => {
    if (matChange === true) {
      setMAT(flatTrace);
      // console.log("data was changed");
    }
  }, [MAT, flatTrace, matChange]);

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////************************************************* ALL FUNCTIONS FOR OPTIONS ONE THROUGH 4, STARTING WITH OPTION 1 FUNCTIONS SHOWING EACH ENGINE STATUS ,STARTING AT SWITCH GEN POWER ENDING AT SWITCH MAP *********/
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //OPTIONS : 1

  ////////////////// This is our generator Power switch function for switching true and false values, i.e. toggle.

  const [name, setName] = useState("");

  const switchgenPower = () => {
    if (genpowLoad === true) {
      setgenpowLoad(false);
      setgraphoneoptionOne(false);
      setName("Gen Power");
      setUpArrowButton();
      plotOnedisable()
    }
    // console.log(genpowerChange);
  };

  // This is our system power switch function for switching true and false values, i.e. toggle.
  const switchsystemPower = () => {
    if (systempowLoad === true) {
      setsystempowLoad(false);
      setgraphoneoptionOne(false);
      setName("System Power");
      setUpArrowButton();
      plotOnedisable()
     
    }
    console.log(name);
  };

  // This is our generator Voltage switch function for switching true and false values, i.e. toggle.
  const switchgenVoltage = () => {
    if (genvoltageLoad === true) {
      setgenvoltageLoad(false);
      setgraphoneoptionOne(false);
      setName("Gen Voltage");
      setUpArrowButton();
      plotOnedisable()
    }
    // console.log(genvoltageChange);
  };

  // This is our battery Voltage switch function for switching true and false values, i.e. toggle.
  const switchbatteryVoltage = () => {
    if (batteryvoltageLoad === true) {
      setbatteryvoltageLoad(false);
      setgraphoneoptionOne(false);
      setName("Bat Voltage");
      setUpArrowButton();
      plotOnedisable()
    }
  };

  // This is our generator current switch function for switching true and false values, i.e. toggle.
  const switchgeneratorCurrent = () => {
    if (gencurrentLoad === true) {
      setgencurrentLoad(false);
      setgraphoneoptionOne(false);
      setName("Gen Current");
      setUpArrowButton();
      plotOnedisable();
    }
    // console.log(generatorcurrentChange);
  };

  // This is our stator temp switch function for switching true and false values, i.e. toggle.
  const switchstatorTemp = () => {
    if (statortempLoad === true) {
      setstatortempLoad(false);
      setgraphoneoptionOne(false);
      setName("Stator Temp");
      setUpArrowButton();
      plotOnedisable();
    }
    //console.log(statortempChange);
  };

  // This is our battery current switch function for switching true and false values, i.e. toggle.
  const switchbatteryCurrent = () => {
    if (batterycurrentLoad === true) {
      setbatterycurrentLoad(false);
      setgraphoneoptionOne(false);
      setName("Bat Current");
      setUpArrowButton();
      plotOnedisable();
    }
    //console.log(statortempChange);
  };

  // This is our throttle switch function for switching true and false values, i.e. toggle.
  const switchthrottle = () => {
    if (throttleLoad === true) {
      setthrottleLoad(false);
      setgraphoneoptionOne(false);
      setName("Throttle");
      setUpArrowButton();
      plotOnedisable();
    }
    //console.log(statortempChange);
  };

  // This is our setpoint switch function for switching true and false values, i.e. toggle.
  const switchSetpoint = () => {
    if (setpointLoad === true) {
      setsetpointLoad(false);
      setgraphoneoptionOne(false);
      setName("SetPoint");
      setUpArrowButton();
      plotOnedisable();
    }
    //console.log(statortempChange);
  };

  // This is our RPM switch function for switching true and false values, i.e. toggle.
  const switchRPM = () => {
    if (rpmLoad === true) {
      setrpmLoad(false);
      setgraphoneoptionOne(false);
      setName("RPM");
      setUpArrowButton();
      plotOnedisable();
    }
    //console.log(statortempChange);
  };

  // This is our fuel consumption switch function for switching true and false values, i.e. toggle.
  const switchfuelConsumption = () => {
    if (fuelconsumptionLoad === true) {
      setfuelconsumptionLoad(false);
      setgraphoneoptionOne(false);
      setName("Fuel Consumption");
      setUpArrowButton();
      plotOnedisable();
    }
    //console.log(statortempChange);
  };

  // This is our MAP switch function for switching true and false values, i.e. toggle.
  const switchMAP = () => {
    if (mapLoad === true) {
      setmapLoad(false);
      setgraphoneoptionOne(false);
      setName("MAP");
      setUpArrowButton();
      plotOnedisable();
    }
  };

  // This is our fuel pressure switch function for switching true and false values, i.e. toggle.
  const switchfuelPressure = () => {
    if (fuelpressureLoad === true) {
      setfuelpressureLoad(false);
      setgraphoneoptionOne(false);
      setName("Fuel Pressure");
      setUpArrowButton();
      plotOnedisable();
    }
    //console.log(statortempChange);
  };

  // This is our rectifier temperature switch function for switching true and false values, i.e. toggle.
  const switchrectifierTemp = () => {
    if (rectifiertempLoad === true) {
      setrectifiertempLoad(false);
      setgraphoneoptionOne(false);
      setName("Rect Temp");
      setUpArrowButton();
      plotOnedisable();
    }
    //console.log(statortempChange);
  };

  // This is our regulator temperature switch function for switching true and false values, i.e. toggle.
  const switchregulatorTemp = () => {
    if (regulatortempLoad === true) {
      setregulatortempLoad(false);
      setgraphoneoptionOne(false);
      setName("Reg Temp");
      setUpArrowButton();
      plotOnedisable();
    }
    //console.log(statortempChange);
  };

  // This is our CHT switch function for switching true and false values, i.e. toggle.
  const switchCHT = () => {
    if (chtLoad === true) {
      setchtLoad(false);
      setgraphoneoptionOne(false);
      setName("CHT");
      setUpArrowButton();
      plotOnedisable();
    }
    //console.log(statortempChange);
  };

  // This is our MAT switch function for switching true and false values, i.e. toggle.
  const switchMAT = () => {
    if (matLoad === true) {
      setmatLoad(false);
      setgraphoneoptionOne(false);
      setName("MAT");
      setUpArrowButton();
      plotOnedisable();
    }
    //console.log(statortempChange);
  };

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////OPTIONS : 2
  //////// OPTIONS : 2
  ////////////////// This is our generator Power switch function for switching true and false values, i.e. toggle.

  const [nameTwo, setNameTwo] = useState("");

  const switchgenPowerTwo = () => {
    if (genpowLoad === true) {
      setgenpowLoad(false);
      setgraphoneoptionTwo(false);
      setNameTwo("Gen Power");
      setUpArrowButtonTwo();
      plotTwodisable();
    }
    // console.log(genpowerChange);
  };

  // This is our system power switch function for switching true and false values, i.e. toggle.
  const switchsystemPowerTwo = () => {
    if (systempowLoad === true) {
      setsystempowLoad(false);
      setgraphoneoptionTwo(false);
      setUpArrowButtonTwo();
      setNameTwo("System Power");

      plotTwodisable();
    }
    console.log(name);
  };

  // This is our generator Voltage switch function for switching true and false values, i.e. toggle.
  const switchgenVoltageTwo = () => {
    if (genvoltageLoad === true) {
      setgenvoltageLoad(false);
      setgraphoneoptionTwo(false);
      setNameTwo("Gen Voltage");
      setUpArrowButtonTwo(false);
      plotTwodisable();
    }
    // console.log(genvoltageChange);
  };

  // This is our battery Voltage switch function for switching true and false values, i.e. toggle.
  const switchbatteryVoltageTwo = () => {
    if (batteryvoltageLoad === true) {
      setbatteryvoltageLoad(false);
      setgraphoneoptionTwo(false);
      setNameTwo("Bat Voltage");
      setUpArrowButtonTwo(false);
      plotTwodisable();
    }
  };

  // This is our generator current switch function for switching true and false values, i.e. toggle.
  const switchgeneratorCurrentTwo = () => {
    if (gencurrentLoad === true) {
      setgencurrentLoad(false);
      setgraphoneoptionTwo(false);
      setNameTwo("Gen Current");
      setUpArrowButtonTwo(false);
      plotTwodisable();
    }
    // console.log(generatorcurrentChange);
  };

  // This is our stator temp switch function for switching true and false values, i.e. toggle.
  const switchstatorTempTwo = () => {
    if (statortempLoad === true) {
      setstatortempLoad(false);
      setgraphoneoptionTwo(false);
      setNameTwo("Stator Temp");
      setUpArrowButtonTwo(false);
      plotTwodisable();
    }
    //console.log(statortempChange);
  };

  // This is our battery current switch function for switching true and false values, i.e. toggle.
  const switchbatteryCurrentTwo = () => {
    if (batterycurrentLoad === true) {
      setbatterycurrentLoad(false);
      setgraphoneoptionTwo(false);
      setNameTwo("Bat Current");
      setUpArrowButtonTwo(false);
      plotTwodisable();
    }
    //console.log(statortempChange);
  };

  // This is our throttle switch function for switching true and false values, i.e. toggle.
  const switchthrottleTwo = () => {
    if (throttleLoad === true) {
      setthrottleLoad(false);
      setgraphoneoptionTwo(false);
      setNameTwo("Throttle");
      setUpArrowButtonTwo(false);
      plotTwodisable();
    }
    //console.log(statortempChange);
  };

  // This is our setpoint switch function for switching true and false values, i.e. toggle.
  const switchSetpointTwo = () => {
    if (setpointLoad === true) {
      setsetpointLoad(false);
      setgraphoneoptionTwo(false);
      setNameTwo("SetPoint");
      setUpArrowButtonTwo(false);
      plotTwodisable();
    }
    //console.log(statortempChange);
  };

  // This is our RPM switch function for switching true and false values, i.e. toggle.
  const switchRPMTwo = () => {
    if (rpmLoad === true) {
      setrpmLoad(false);
      setgraphoneoptionTwo(false);
      setNameTwo("RPM");
      setUpArrowButtonTwo(false);
      plotTwodisable();
    }
    //console.log(statortempChange);
  };

  // This is our fuel consumption switch function for switching true and false values, i.e. toggle.
  const switchfuelConsumptionTwo = () => {
    if (fuelconsumptionLoad === true) {
      setfuelconsumptionLoad(false);
      setgraphoneoptionTwo(false);
      setNameTwo("Fuel Consumption");
      setUpArrowButtonTwo(false);
      plotTwodisable();
    }
    //console.log(statortempChange);
  };

  // This is our MAP switch function for switching true and false values, i.e. toggle.
  const switchMAPTwo = () => {
    if (mapLoad === true) {
      setmapLoad(false);
      setgraphoneoptionTwo(false);
      setNameTwo("MAP");
      setUpArrowButtonTwo(false);
      plotTwodisable();
    }
  };

  // This is our fuel pressure switch function for switching true and false values, i.e. toggle.
  const switchfuelPressureTwo = () => {
    if (fuelpressureLoad === true) {
      setfuelpressureLoad(false);
      setgraphoneoptionTwo(false);
      setNameTwo("Fuel Pressure");
      setUpArrowButtonTwo(false);
      plotTwodisable();
    }
    //console.log(statortempChange);
  };

  // This is our rectifier temperature switch function for switching true and false values, i.e. toggle.
  const switchrectifierTempTwo = () => {
    if (rectifiertempLoad === true) {
      setrectifiertempLoad(false);
      setgraphoneoptionTwo(false);
      setNameTwo("Rect Temp");
      setUpArrowButtonTwo(false);
      plotTwodisable();
    }
    //console.log(statortempChange);
  };

  // This is our regulator temperature switch function for switching true and false values, i.e. toggle.
  const switchregulatorTempTwo = () => {
    if (regulatortempLoad === true) {
      setregulatortempLoad(false);
      setgraphoneoptionTwo(false);
      setNameTwo("Reg Temp");
      setUpArrowButtonTwo(false);
      plotTwodisable();
    }
    //console.log(statortempChange);
  };

  // This is our CHT switch function for switching true and false values, i.e. toggle.
  const switchCHTTwo = () => {
    if (chtLoad === true) {
      setchtLoad(false);
      setgraphoneoptionTwo(false);
      setNameTwo("CHT");
      setUpArrowButtonTwo(false);
      plotTwodisable();
    }
    //console.log(statortempChange);
  };

  // This is our MAT switch function for switching true and false values, i.e. toggle.
  const switchMATTwo = () => {
    if (matLoad === true) {
      setmatLoad(false);
      setgraphoneoptionTwo(false);
      setNameTwo("MAT");
      setUpArrowButtonTwo(false);
      plotTwodisable();
    }
    //console.log(statortempChange);
  };

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////OPTIONS : 3
  ////// OPTION : 3
  ////////////////// This is our generator Power switch function for switching true and false values, i.e. toggle.

  const [nameThree, setNameThree] = useState("");

  const switchgenPowerThree = () => {
    if (genpowLoad === true) {
      setgenpowLoad(false);
      setgraphoneoptionThree(false);
      setNameThree("Gen Power");
      setUpArrowButtonThree();
      plotThreedisable();
    }
    // console.log(genpowerChange);
  };

  // This is our system power switch function for switching true and false values, i.e. toggle.
  const switchsystemPowerThree = () => {
    if (systempowLoad === true) {
      setsystempowLoad(false);
      setgraphoneoptionThree(false);
      setNameThree("System Power");
      setUpArrowButtonThree();
      plotThreedisable();
    }
  };

  // This is our generator Voltage switch function for switching true and false values, i.e. toggle.
  const switchgenVoltageThree = () => {
    if (genvoltageLoad === true) {
      setgenvoltageLoad(false);
      setgraphoneoptionThree(false);
      setNameThree("Gen Voltage");
      setUpArrowButtonThree();
      plotThreedisable();
    }
    // console.log(genvoltageChange);
  };

  // This is our battery Voltage switch function for switching true and false values, i.e. toggle.
  const switchbatteryVoltageThree = () => {
    if (batteryvoltageLoad === true) {
      setbatteryvoltageLoad(false);
      setgraphoneoptionThree(false);
      setNameThree("Bat Voltage");
      setUpArrowButtonThree();
      plotThreedisable();
    }
  };

  // This is our generator current switch function for switching true and false values, i.e. toggle.
  const switchgeneratorCurrentThree = () => {
    if (gencurrentLoad === true) {
      setgencurrentLoad(false);
      setgraphoneoptionThree(false);
      setNameThree("Gen Current");
      setUpArrowButtonThree();
      plotThreedisable();
    }
    // console.log(generatorcurrentChange);
  };

  // This is our stator temp switch function for switching true and false values, i.e. toggle.
  const switchstatorTempThree = () => {
    if (statortempLoad === true) {
      setstatortempLoad(false);
      setgraphoneoptionThree(false);
      setNameThree("Stator Temp");
      setUpArrowButtonThree();
      plotThreedisable();
    }
    //console.log(statortempChange);
  };

  // This is our battery current switch function for switching true and false values, i.e. toggle.
  const switchbatteryCurrentThree = () => {
    if (batterycurrentLoad === true) {
      setbatterycurrentLoad(false);
      setgraphoneoptionThree(false);
      setNameThree("Bat Current");
      setUpArrowButtonThree();
      plotThreedisable();
    }
    //console.log(statortempChange);
  };

  // This is our throttle switch function for switching true and false values, i.e. toggle.
  const switchthrottleThree = () => {
    if (throttleLoad === true) {
      setthrottleLoad(false);
      setgraphoneoptionThree(false);
      setNameThree("Throttle");
      setUpArrowButtonThree();
      plotThreedisable();
    }
    //console.log(statortempChange);
  };

  // This is our setpoint switch function for switching true and false values, i.e. toggle.
  const switchSetpointThree = () => {
    if (setpointLoad === true) {
      setsetpointLoad(false);
      setgraphoneoptionThree(false);
      setNameThree("SetPoint");
      setUpArrowButtonThree();
      plotThreedisable();
    }
    //console.log(statortempChange);
  };

  // This is our RPM switch function for switching true and false values, i.e. toggle.
  const switchRPMThree = () => {
    if (rpmLoad === true) {
      setrpmLoad(false);
      setgraphoneoptionThree(false);
      setNameThree("RPM");
      setUpArrowButtonThree();
      plotThreedisable();
    }
    //console.log(statortempChange);
  };

  // This is our fuel consumption switch function for switching true and false values, i.e. toggle.
  const switchfuelConsumptionThree = () => {
    if (fuelconsumptionLoad === true) {
      setfuelconsumptionLoad(false);
      setgraphoneoptionThree(false);
      setNameThree("Fuel Consumption");
      setUpArrowButtonThree();
      plotThreedisable();
    }
    //console.log(statortempChange);
  };

  // This is our MAP switch function for switching true and false values, i.e. toggle.
  const switchMAPThree = () => {
    if (mapLoad === true) {
      setmapLoad(false);
      setgraphoneoptionThree(false);
      setNameThree("MAP");
      setUpArrowButtonThree();
      plotThreedisable();
    }
  };

  // This is our fuel pressure switch function for switching true and false values, i.e. toggle.
  const switchfuelPressureThree = () => {
    if (fuelpressureLoad === true) {
      setfuelpressureLoad(false);
      setgraphoneoptionThree(false);
      setNameThree("Fuel Pressure");
      setUpArrowButtonThree();
      plotThreedisable();
    }
    //console.log(statortempChange);
  };

  // This is our rectifier temperature switch function for switching true and false values, i.e. toggle.
  const switchrectifierTempThree = () => {
    if (rectifiertempLoad === true) {
      setrectifiertempLoad(false);
      setgraphoneoptionThree(false);
      setNameThree("Rect Temp");
      setUpArrowButtonThree();
      plotThreedisable();
    }
    //console.log(statortempChange);
  };

  // This is our regulator temperature switch function for switching true and false values, i.e. toggle.
  const switchregulatorTempThree = () => {
    if (regulatortempLoad === true) {
      setregulatortempLoad(false);
      setgraphoneoptionThree(false);
      setNameThree("Reg Temp");
      setUpArrowButtonThree();
      plotThreedisable();
    }
    //console.log(statortempChange);
  };

  // This is our CHT switch function for switching true and false values, i.e. toggle.
  const switchCHTThree = () => {
    if (chtLoad === true) {
      setchtLoad(false);
      setgraphoneoptionThree(false);
      setNameThree("CHT");
      setUpArrowButtonThree();
      plotThreedisable();
    }
    //console.log(statortempChange);
  };

  // This is our MAT switch function for switching true and false values, i.e. toggle.
  const switchMATThree = () => {
    if (matLoad === true) {
      setmatLoad(false);
      setgraphoneoptionThree(false);
      setNameThree("MAT");
      setUpArrowButtonThree();
      plotThreedisable();
    }
    //console.log(statortempChange);
  };

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////OPTIONS : 4
  ////////// OPTION : 4
  ////////////////// This is our generator Power switch function for switching true and false values, i.e. toggle.

  const [nameFour, setNameFour] = useState("");

  const switchgenPowerFour = () => {
    if (genpowLoad === true) {
      setgenpowLoad(false);
      setgraphoneoptionFour(false);
      setNameFour("Gen Power");
      setUpArrowButtonFour();
      plotFourdisable();
    }
    // console.log(genpowerChange);
  };

  // This is our system power switch function for switching true and false values, i.e. toggle.
  const switchsystemPowerFour = () => {
    if (systempowLoad === true) {
      setsystempowLoad(false);
      setgraphoneoptionFour(false);
      setNameFour("System Power");
      setUpArrowButtonFour();
      plotFourdisable();
    }
  };

  // This is our generator Voltage switch function for switching true and false values, i.e. toggle.
  const switchgenVoltageFour = () => {
    if (genvoltageLoad === true) {
      setgenvoltageLoad(false);
      setgraphoneoptionFour(false);
      setNameFour("Gen Voltage");
      setUpArrowButtonFour();
      plotFourdisable();
    }
    // console.log(genvoltageChange);
  };

  // This is our battery Voltage switch function for switching true and false values, i.e. toggle.
  const switchbatteryVoltageFour = () => {
    if (batteryvoltageLoad === true) {
      setbatteryvoltageLoad(false);
      setgraphoneoptionFour(false);
      setNameFour("Bat Voltage");
      setUpArrowButtonFour();
      plotFourdisable();
    }
  };

  // This is our generator current switch function for switching true and false values, i.e. toggle.
  const switchgeneratorCurrentFour = () => {
    if (gencurrentLoad === true) {
      setgencurrentLoad(false);
      setgraphoneoptionFour(false);
      setNameFour("Gen Current");
      setUpArrowButtonFour();
      plotFourdisable();
    }
    // console.log(generatorcurrentChange);
  };

  // This is our stator temp switch function for switching true and false values, i.e. toggle.
  const switchstatorTempFour = () => {
    if (statortempLoad === true) {
      setstatortempLoad(false);
      setgraphoneoptionFour(false);
      setNameFour("Stator Temp");
      setUpArrowButtonFour();
      plotFourdisable();
    }
    //console.log(statortempChange);
  };

  // This is our battery current switch function for switching true and false values, i.e. toggle.
  const switchbatteryCurrentFour = () => {
    if (batterycurrentLoad === true) {
      setbatterycurrentLoad(false);
      setgraphoneoptionFour(false);
      setNameFour("Bat Current");
      setUpArrowButtonFour();
      plotFourdisable();
    }
    //console.log(statortempChange);
  };

  // This is our throttle switch function for switching true and false values, i.e. toggle.
  const switchthrottleFour = () => {
    if (throttleLoad === true) {
      setthrottleLoad(false);
      setgraphoneoptionFour(false);
      setNameFour("Throttle");
      setUpArrowButtonFour();
      plotFourdisable();
    }
    //console.log(statortempChange);
  };

  // This is our setpoint switch function for switching true and false values, i.e. toggle.
  const switchSetpointFour = () => {
    if (setpointLoad === true) {
      setsetpointLoad(false);
      setgraphoneoptionFour(false);
      setNameFour("SetPoint");
      setUpArrowButtonFour();
      plotFourdisable();
    }
    //console.log(statortempChange);
  };

  // This is our RPM switch function for switching true and false values, i.e. toggle.
  const switchRPMFour = () => {
    if (rpmLoad === true) {
      setrpmLoad(false);
      setgraphoneoptionFour(false);
      setNameFour("RPM");
      setUpArrowButtonFour();
      plotFourdisable();
    }
    //console.log(statortempChange);
  };

  // This is our fuel consumption switch function for switching true and false values, i.e. toggle.
  const switchfuelConsumptionFour = () => {
    if (fuelconsumptionLoad === true) {
      setfuelconsumptionLoad(false);
      setgraphoneoptionFour(false);
      setNameFour("Fuel Consumption");
      setUpArrowButtonFour();
      plotFourdisable();
    }
    //console.log(statortempChange);
  };

  // This is our MAP switch function for switching true and false values, i.e. toggle.
  const switchMAPFour = () => {
    if (mapLoad === true) {
      setmapLoad(false);
      setgraphoneoptionFour(false);
      setNameFour("MAP");
      setUpArrowButtonFour();
      plotFourdisable();
    }
  };

  // This is our fuel pressure switch function for switching true and false values, i.e. toggle.
  const switchfuelPressureFour = () => {
    if (fuelpressureLoad === true) {
      setfuelpressureLoad(false);
      setgraphoneoptionFour(false);
      setNameFour("Fuel Pressure");
      setUpArrowButtonFour();
      plotFourdisable();
    }
    //console.log(statortempChange);
  };

  // This is our rectifier temperature switch function for switching true and false values, i.e. toggle.
  const switchrectifierTempFour = () => {
    if (rectifiertempLoad === true) {
      setrectifiertempLoad(false);
      setgraphoneoptionFour(false);
      setNameFour("Rect Temp");
      setUpArrowButtonFour();
      plotFourdisable();
    }
    //console.log(statortempChange);
  };

  // This is our regulator temperature switch function for switching true and false values, i.e. toggle.
  const switchregulatorTempFour = () => {
    if (regulatortempLoad === true) {
      setregulatortempLoad(false);
      setgraphoneoptionFour(false);
      setNameFour("Reg Temp");
      setUpArrowButtonFour();
      plotFourdisable();
    }
    //console.log(statortempChange);
  };

  // This is our CHT switch function for switching true and false values, i.e. toggle.
  const switchCHTFour = () => {
    if (chtLoad === true) {
      setchtLoad(false);
      setgraphoneoptionFour(false);
      setNameFour("CHT");
      setUpArrowButtonFour();
      plotFourdisable();
    }
    //console.log(statortempChange);
  };

  // This is our MAT switch function for switching true and false values, i.e. toggle.
  const switchMATFour = () => {
    if (matLoad === true) {
      setmatLoad(false);
      setgraphoneoptionFour(false);
      setNameFour("MAT");
      setUpArrowButtonFour();
      plotFourdisable();
    }
    //console.log(statortempChange);
  };

  ////////////////////////// STATE AND FUNCTION AREA FOR TOGGLING SHOW OPTIONS ON GRAPHS /////////////////////

  const [graphoneoptionOne, setgraphoneoptionOne] = useState(false);
  const [graphoneoptionTwo, setgraphoneoptionTwo] = useState(false);
  const [graphoneoptionThree, setgraphoneoptionThree] = useState(false);
  const [graphoneoptionFour, setgraphoneoptionFour] = useState(false);

  const showOptions = () => {
    if (graphoneoptionOne === true) {
      setgraphoneoptionOne(false);
    } else if (graphoneoptionOne === false) {
      setgraphoneoptionOne(true);
    }
    toggleArrow();
  };

  const showOptionsTwo = () => {
    if (graphoneoptionTwo === true) {
      setgraphoneoptionTwo(false);
    } else if (graphoneoptionTwo === false) {
      setgraphoneoptionTwo(true);
    }
    toggleArrowTwo();
  };

  const showOptionsThree = () => {
    if (graphoneoptionThree === true) {
      setgraphoneoptionThree(false);
    } else if (graphoneoptionThree === false) {
      setgraphoneoptionThree(true);
    }
    toggleArrowThree();
  };

  const showOptionsFour = () => {
    if (graphoneoptionFour === true) {
      setgraphoneoptionFour(false);
    } else if (graphoneoptionFour === false) {
      setgraphoneoptionFour(true);
    }
    toggleArrowFour();
  };
  ////////////////////////// state for toggling arrow buttons up and down

  const [upArrowButton, setUpArrowButton] = useState(false);
  const [upArrowButtonTwo, setUpArrowButtonTwo] = useState(false);
  const [upArrowButtonThree, setUpArrowButtonThree] = useState(false);
  const [upArrowButtonFour, setUpArrowButtonFour] = useState(false);

  const toggleArrow = () => {
    if (upArrowButton === false) {
      setUpArrowButton(true);
    } else if (upArrowButton === true) {
      setUpArrowButton(false);
    }
  };
  const toggleArrowTwo = () => {
    if (upArrowButtonTwo === false) {
      setUpArrowButtonTwo(true);
    } else if (upArrowButtonTwo === true) {
      setUpArrowButtonTwo(false);
    }
  };
  const toggleArrowThree = () => {
    if (upArrowButtonThree === false) {
      setUpArrowButtonThree(true);
    } else if (upArrowButtonThree === true) {
      setUpArrowButtonThree(false);
    }
  };
  const toggleArrowFour = () => {
    if (upArrowButtonFour === false) {
      setUpArrowButtonFour(true);
    } else if (upArrowButtonFour === true) {
      setUpArrowButtonFour(false);
    }
  };

  //////disabled button//////////

  const [disabled, setDisabled] = useState(false);
  const [disabledTwo, setDisabledTwo] = useState(false);
  const [disabledThree, setDisabledThree] = useState(false);
  const [disabledFour, setDisabledFour] = useState(false);

  const plotOnedisable = () => {
    if (name === "") {
      setDisabled(true);
    }
  };
  const plotTwodisable = () => {
    if (nameTwo === "") {
      setDisabledTwo(true);
    }
  };
  const plotThreedisable = () => {
    if (nameThree === "") {
      setDisabledThree(true);
    }
  };
  const plotFourdisable = () => {
    if (nameFour === "") {
      setDisabledFour(true);
    }
  };

  ////////////////////////// RESET BUTTON ////////////////////////////////////
  const failSafeDisable = () => {
    if (disabled === false) {
      setDisabled(true);
    } else if (disabledTwo === false) {
      setDisabledTwo(true);
    }else if(disabledThree === false){
      setDisabledThree(true)
    } else if (disabledFour === false){
      setDisabledFour(true);
    }
  };
  const reset = () => {
    setDisabled(false);
    setDisabledTwo(false);
    setDisabledThree(false);
    setDisabledFour(false);
    setgenpowLoad(true);
    setsystempowLoad(true);
    setbatteryvoltageLoad(true);
    setgencurrentLoad(true);
    setstatortempLoad(true);
    setgenvoltageLoad(true);
    setbatterycurrentLoad(true);
    setthrottleLoad(true);
    setsetpointLoad(true);
    setrpmLoad(true);
    setfuelconsumptionLoad(true);
    setmapLoad(true);
    setfuelpressureLoad(true);
    setrectifiertempLoad(true);
    setregulatortempLoad(true);
    setchtLoad(true);
    setmatLoad(true);
    setName("");
    setNameTwo("");
    setNameThree("");
    setNameFour("");
    // failSafeDisable()
  };

  return (
    <div className="plotbody">
      <div className="graph-1-box-1-scrollbox">
        <div id="demo-radio-buttons-group-label">GRAPH TWO </div>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">
            {name}
         
            {upArrowButton ? (
              <button
                disabled={disabled}
                className="arrow-up-plot"
                onClick={showOptions}
              >
                <FontAwesomeIcon icon={faChevronUp} />
              </button>
            ) : (
              <button disabled={disabled} className="arrow-up-plot" onClick={showOptions}>
                <FontAwesomeIcon icon={faChevronDown} />
              </button>
            )}
          </FormLabel>

          <RadioGroup
            className="testandwin"
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            {graphoneoptionOne ? (
              <p className="graphOneplotOneinnerbox">
                <FormControlLabel
                  value="systempower"
                  control={<Radio />}
                  label="System Power"
                  onClick={switchsystemPower}
                />
                <FormControlLabel 
                  value="genPower"
                  control={<Radio />}
                  label="Gen Power"
                  onClick={switchgenPower}
                />
                <FormControlLabel
                  value="batteryVoltage"
                  control={<Radio />}
                  label="Bat Voltage"
                  onClick={switchbatteryVoltage}
                />
                <FormControlLabel
                  value="generatorCurrent"
                  control={<Radio />}
                  label="Gen Current"
                  onClick={switchgeneratorCurrent}
                />
                <FormControlLabel
                  value="statorTemp"
                  control={<Radio />}
                  label="Stator Temp"
                  onClick={switchstatorTemp}
                />
                <FormControlLabel
                  value="genVoltage"
                  control={<Radio />}
                  label="Gen Voltage"
                  onClick={switchgenVoltage}
                />
                <FormControlLabel
                  value="batCurrent"
                  control={<Radio />}
                  label="Battery Current"
                  onClick={switchbatteryCurrent}
                />
                <FormControlLabel
                  value="throttle"
                  control={<Radio />}
                  label="throttle"
                  onClick={switchthrottle}
                />
                <FormControlLabel
                  value="setpoint"
                  control={<Radio />}
                  label="SetPoint"
                  onClick={switchSetpoint}
                />
                <FormControlLabel
                  value="rpm"
                  control={<Radio />}
                  label="RPM"
                  onClick={switchRPM}
                />
                <FormControlLabel
                  value="fuelconsumption"
                  control={<Radio />}
                  label="Fuel Consumption"
                  onClick={switchfuelConsumption}
                />
                <FormControlLabel
                  value="MAP"
                  control={<Radio />}
                  label="MAP"
                  onClick={switchMAP}
                />
                <FormControlLabel
                  value="fuelpressure"
                  control={<Radio />}
                  label="Fuel Pressure"
                  onClick={switchfuelPressure}
                />
                <FormControlLabel
                  value="rectifiertemp"
                  control={<Radio />}
                  label="Rectifier Temp"
                  onClick={switchrectifierTemp}
                />
                <FormControlLabel
                  value="regulatortemp"
                  control={<Radio />}
                  label="Regulator Temp"
                  onClick={switchregulatorTemp}
                />
                <FormControlLabel
                  value="CHT"
                  control={<Radio />}
                  label="CHT"
                  onClick={switchCHT}
                />
                <FormControlLabel
                  value="MAT"
                  control={<Radio />}
                  label="MAT"
                  onClick={switchMAT}
                />
              </p>
            ) : null}
          </RadioGroup>
        </FormControl>
        {/***************PLOT 2 **************/}
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">
            {nameTwo}
            {upArrowButtonTwo ? (
              <button
                disabled={disabledTwo}
                className="arrow-up-plot"
                onClick={showOptionsTwo}
              >
                <FontAwesomeIcon icon={faChevronUp} />
              </button>
            ) : (
              <button disabled={disabledTwo} className="arrow-up-plot" onClick={showOptionsTwo}>
                <FontAwesomeIcon icon={faChevronDown} />
              </button>
            )}
          </FormLabel>
          <RadioGroup
            className="testandwin"
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            {graphoneoptionTwo ? (
              <p className="graphOneplotOneinnerbox">
                <FormControlLabel
                  value="systemPower"
                  control={<Radio />}
                  label="System Power"
                  onClick={switchsystemPowerTwo}
                />
                <FormControlLabel
                  value="genPower"
                  control={<Radio />}
                  label="Gen Power"
                  onClick={switchgenPowerTwo}
                />
                <FormControlLabel
                  value="batteryVoltage"
                  control={<Radio />}
                  label="Bat Voltage"
                  onClick={switchbatteryVoltageTwo}
                />
                <FormControlLabel
                  value="generatorCurrent"
                  control={<Radio />}
                  label="Gen Current"
                  onClick={switchgeneratorCurrentTwo}
                />
                <FormControlLabel
                  value="statorTemp"
                  control={<Radio />}
                  label="Stator Temp"
                  onClick={switchstatorTempTwo}
                />
                <FormControlLabel
                  value="genVoltage"
                  control={<Radio />}
                  label="Gen Voltage"
                  onClick={switchgenVoltageTwo}
                />
                <FormControlLabel
                  value="batCurrent"
                  control={<Radio />}
                  label="Battery Current"
                  onClick={switchbatteryCurrentTwo}
                />
                <FormControlLabel
                  value="throttle"
                  control={<Radio />}
                  label="throttle"
                  onClick={switchthrottleTwo}
                />
                <FormControlLabel
                  value="setpoint"
                  control={<Radio />}
                  label="SetPoint"
                  onClick={switchSetpointTwo}
                />
                <FormControlLabel
                  value="rpm"
                  control={<Radio />}
                  label="RPM"
                  onClick={switchRPMTwo}
                />
                <FormControlLabel
                  value="fuelconsumption"
                  control={<Radio />}
                  label="Fuel Consumption"
                  onClick={switchfuelConsumptionTwo}
                />
                <FormControlLabel
                  value="MAP"
                  control={<Radio />}
                  label="MAP"
                  onClick={switchMAPTwo}
                />
                <FormControlLabel
                  value="fuelpressure"
                  control={<Radio />}
                  label="Fuel Pressure"
                  onClick={switchfuelPressureTwo}
                />
                <FormControlLabel
                  value="rectifiertemp"
                  control={<Radio />}
                  label="Rectifier Temp"
                  onClick={switchrectifierTempTwo}
                />
                <FormControlLabel
                  value="regulatortemp"
                  control={<Radio />}
                  label="Regulator Temp"
                  onClick={switchregulatorTempTwo}
                />
                <FormControlLabel
                  value="CHT"
                  control={<Radio />}
                  label="CHT"
                  onClick={switchCHTTwo}
                />
                <FormControlLabel
                  value="MAT"
                  control={<Radio />}
                  label="MAT"
                  onClick={switchMATTwo}
                />
              </p>
            ) : null}
          </RadioGroup>
        </FormControl>
        {/***************PLOT 3 **************/}
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">
            {nameThree}
            {upArrowButtonThree ? (
              <button
                disabled={disabledThree}
                className="arrow-up-plot"
                onClick={showOptionsThree}
              >
                <FontAwesomeIcon icon={faChevronUp} />
              </button>
            ) : (
              <button  disabled={disabledThree}className="arrow-up-plot" onClick={showOptionsThree}>
                <FontAwesomeIcon icon={faChevronDown} />
              </button>
            )}
          </FormLabel>
          <RadioGroup
            className="testandwin"
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            {graphoneoptionThree ? (
              <p className="graphOneplotOneinnerbox">
                <FormControlLabel
                  value="systemPower"
                  control={<Radio />}
                  label="System Power"
                  onClick={switchsystemPowerThree}
                />
                <FormControlLabel
                  value="genPower"
                  control={<Radio />}
                  label="Gen Power"
                  onClick={switchgenPowerThree}
                />
                <FormControlLabel
                  value="batteryVoltage"
                  control={<Radio />}
                  label="Bat Voltage"
                  onClick={switchbatteryVoltageThree}
                />
                <FormControlLabel
                  value="generatorCurrent"
                  control={<Radio />}
                  label="Gen Current"
                  onClick={switchgeneratorCurrentThree}
                />
                <FormControlLabel
                  value="statorTemp"
                  control={<Radio />}
                  label="Stator Temp"
                  onClick={switchstatorTempThree}
                />
                <FormControlLabel
                  value="genVoltage"
                  control={<Radio />}
                  label="Gen Voltage"
                  onClick={switchgenVoltageThree}
                />
                <FormControlLabel
                  value="batCurrent"
                  control={<Radio />}
                  label="Battery Current"
                  onClick={switchbatteryCurrentThree}
                />
                <FormControlLabel
                  value="throttle"
                  control={<Radio />}
                  label="throttle"
                  onClick={switchthrottleThree}
                />
                <FormControlLabel
                  value="setpoint"
                  control={<Radio />}
                  label="SetPoint"
                  onClick={switchSetpointThree}
                />
                <FormControlLabel
                  value="rpm"
                  control={<Radio />}
                  label="RPM"
                  onClick={switchRPMThree}
                />
                <FormControlLabel
                  value="fuelconsumption"
                  control={<Radio />}
                  label="Fuel Consumption"
                  onClick={switchfuelConsumptionThree}
                />
                <FormControlLabel
                  value="MAP"
                  control={<Radio />}
                  label="MAP"
                  onClick={switchMAPThree}
                />
                <FormControlLabel
                  value="fuelpressure"
                  control={<Radio />}
                  label="Fuel Pressure"
                  onClick={switchfuelPressureThree}
                />
                <FormControlLabel
                  value="rectifiertemp"
                  control={<Radio />}
                  label="Rectifier Temp"
                  onClick={switchrectifierTempThree}
                />
                <FormControlLabel
                  value="regulatortemp"
                  control={<Radio />}
                  label="Regulator Temp"
                  onClick={switchregulatorTempThree}
                />
                <FormControlLabel
                  value="CHT"
                  control={<Radio />}
                  label="CHT"
                  onClick={switchCHTThree}
                />
                <FormControlLabel
                  value="MAT"
                  control={<Radio />}
                  label="MAT"
                  onClick={switchMATThree}
                />
              </p>
            ) : null}
          </RadioGroup>
        </FormControl>
        {/***************PLOT 4 **************/}
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">
            {nameFour}
            {upArrowButtonFour ? (
              <button
                disabled={disabledFour}
                className="arrow-up-plot"
                onClick={showOptionsFour}
              >
                <FontAwesomeIcon icon={faChevronUp} />
              </button>
            ) : (
              <button  disabled={disabledFour} className="arrow-up-plot" onClick={showOptionsFour}>
                <FontAwesomeIcon icon={faChevronDown} />
              </button>
            )}
          </FormLabel>
          <RadioGroup
            className="testandwin"
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            {graphoneoptionFour ? (
              <p className="graphOneplotOneinnerbox">
                <FormControlLabel
                  value="systemPower"
                  control={<Radio />}
                  label="System Power"
                  onClick={switchsystemPowerFour}
                />
                <FormControlLabel
                  value="genPower"
                  control={<Radio />}
                  label="Gen Power"
                  onClick={switchgenPowerFour}
                />
                <FormControlLabel
                  value="batteryVoltage"
                  control={<Radio />}
                  label="Bat Voltage"
                  onClick={switchbatteryVoltageFour}
                />
                <FormControlLabel
                  value="generatorCurrent"
                  control={<Radio />}
                  label="Gen Current"
                  onClick={switchgeneratorCurrentFour}
                />
                <FormControlLabel
                  value="statorTemp"
                  control={<Radio />}
                  label="Stator Temp"
                  onClick={switchstatorTempFour}
                />
                <FormControlLabel
                  value="genVoltage"
                  control={<Radio />}
                  label="Gen Voltage"
                  onClick={switchgenVoltageFour}
                />
                <FormControlLabel
                  value="batCurrent"
                  control={<Radio />}
                  label="Battery Current"
                  onClick={switchbatteryCurrentFour}
                />
                <FormControlLabel
                  value="throttle"
                  control={<Radio />}
                  label="throttle"
                  onClick={switchthrottleFour}
                />
                <FormControlLabel
                  value="setpoint"
                  control={<Radio />}
                  label="SetPoint"
                  onClick={switchSetpointFour}
                />
                <FormControlLabel
                  value="rpm"
                  control={<Radio />}
                  label="RPM"
                  onClick={switchRPMFour}
                />
                <FormControlLabel
                  value="fuelconsumption"
                  control={<Radio />}
                  label="Fuel Consumption"
                  onClick={switchfuelConsumptionFour}
                />
                <FormControlLabel
                  value="MAP"
                  control={<Radio />}
                  label="MAP"
                  onClick={switchMAPFour}
                />
                <FormControlLabel
                  value="fuelpressure"
                  control={<Radio />}
                  label="Fuel Pressure"
                  onClick={switchfuelPressureFour}
                />
                <FormControlLabel
                  value="rectifiertemp"
                  control={<Radio />}
                  label="Rectifier Temp"
                  onClick={switchrectifierTempFour}
                />
                <FormControlLabel
                  value="regulatortemp"
                  control={<Radio />}
                  label="Regulator Temp"
                  onClick={switchregulatorTempFour}
                />
                <FormControlLabel
                  value="CHT"
                  control={<Radio />}
                  label="CHT"
                  onClick={switchCHTFour}
                />
                <FormControlLabel
                  value="MAT"
                  control={<Radio />}
                  label="MAT"
                  onClick={switchMATFour}
                />
              </p>
            ) : null}
          </RadioGroup>
          <button id="cleargraph" onClick={reset}>
            Clear Graph
          </button>
        </FormControl>
      </div>
      <Plot id="g-1"
        data={[
          systemPower,
          genPower,
          batteryVoltage,
          generatorCurrent,
          statorTemp,
          genVoltage,
          batterycurrentNet,
          throttle,
          setpoint,
          RPM,
          fuelConsumption,
          MAP,
          fuelPressure,
          rectifierTemp,
          regulatorTemp,
          CHT,
          MAT,
        ]}
        layout={{
          title: "Power Management Unit Data Chart",
          width:1500,
          height:850
        }}
      />

      <br></br>
    </div>
  );
};

export default GraphComponentTwo;
