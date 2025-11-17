import React, { useState, useEffect, useLayoutEffect } from "react";
import "../PlotlyGraphsStyles/plotly.css";
import axios from "axios";
import Plot from "react-plotly.js";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

import FormLabel from "@mui/material/FormLabel";
import { borderRadius } from "@mui/system";

const GraphComponentFour = () => {
  const [plotData, setPlotData] = useState([]);

  useEffect(() => {
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
  ///////////// HANDLE CHANGE STATE AND FUNCTION FOR EACH GRAPH AND BOX ////////////////////////
  const [graphoneboxOne, setgraphoneboxOne] = useState("");
  const [graphoneboxTwo, setgraphoneboxTwo] = useState("");
  const [graphoneboxThree, setgraphoneboxThree] = useState("");
  const [graphoneboxFour, setgraphoneboxFour] = useState("");

  const handlegraphOneboxOne = (event) => {
    setgraphoneboxOne(event.target.value);
  };

  const handlegraphOneboxTwo = (event) => {
    setgraphoneboxTwo(event.target.value);
  };

  const handlegraphOneboxThree = (event) => {
    setgraphoneboxThree(event.target.value);
  };

  const handlegraphOneboxFour = (event) => {
    setgraphoneboxFour(event.target.value);
  };

  ///////////////////////////////////////////////////////////// FLAT LINE Graph that has 0 values on both axis //////////////////

  useEffect(() => {
    const interval = setInterval(() => {
      plotData.map((value) =>
        setflatTrace((prev) => {
          return {
            x: [...prev.x, 0],
            y: [...prev.y.slice(1), 0],
          };
        })
      );
    }, []);

    return () => {
      clearInterval(interval);
    };
  });

  ////////////////////////////// FLAT LINE GRAPH ABOVE ////////////////////////////

  ///////////////////////////////////////////////////////////// USE EFFECT FOR SYSTEM POWER
  useEffect(() => {
    const interval = setInterval(() => {
      plotData.map((value) =>
        setsystemPower((prev) => {
          return {
            x: [...prev.x, value.timeElapsed],
            y: [...prev.y.slice(1), value.systemPower],
          };
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
            y: [...prev.y.slice(1), value.genVoltage * 10000],
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
            y: [...prev.y.slice(1), value.batteryVoltage * 18000],
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
            y: [...prev.y.slice(1), value.MAP * 10],
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
       setsystemPower(flatTrace)
      } else if(systempowLoad === false){
        setsystemPower(systemPower)
      }
    };
    onPageLoad()
  })
// gen power disapearing act
  useLayoutEffect(() => {
    const onPageLoad = () => {
      if (genpowLoad === true) {
       setgenPower(flatTrace)
      } else if(genpowLoad === false){
        setgenPower(genPower)
      }
    };
    onPageLoad()
  })
// gen voltage disappearing act
  useLayoutEffect(() => {
    const onPageLoad = () => {
      if (genvoltageLoad === true) {
       setgenVoltage(flatTrace)
      } else if(genvoltageLoad === false){
        setgenVoltage(genVoltage)
      }
    };
    onPageLoad()
  })
// battery voltage disappearing act
  useLayoutEffect(() => {
    const onPageLoad = () => {
      if (batteryvoltageLoad === true) {
       setbatteryVoltage(flatTrace)
      } else if(batteryvoltageLoad === false){
        setbatteryVoltage(batteryVoltage)
      }
    };
    onPageLoad()
  })

  // gen current disappearing act
  useLayoutEffect(() => {
    const onPageLoad = () => {
      if (gencurrentLoad === true) {
       setgeneratorCurrent(flatTrace)
      } else if(gencurrentLoad === false){
        setgeneratorCurrent(generatorCurrent)
      }
    };
    onPageLoad()
  })

    // battery current disappearing act
    useLayoutEffect(() => {
      const onPageLoad = () => {
        if (batterycurrentLoad === true) {
         setbatterycurrentNet(flatTrace)
        } else if(batterycurrentLoad === false){
          setbatterycurrentNet(batterycurrentNet)
        }
      };
      onPageLoad()
    })

       // throttle disappearing act
       useLayoutEffect(() => {
        const onPageLoad = () => {
          if (throttleLoad === true) {
           setThrottle(flatTrace)
          } else if(throttleLoad === false){
            setThrottle(throttle)
          }
        };
        onPageLoad()
      })

       // setpoint disappearing act
       useLayoutEffect(() => {
        const onPageLoad = () => {
          if (setpointLoad === true) {
           setSetpoint(flatTrace)
          } else if(setpointLoad === false){
            setSetpoint(setpoint)
          }
        };
        onPageLoad()
      })

       // RPM disappearing act
       useLayoutEffect(() => {
        const onPageLoad = () => {
          if (rpmLoad === true) {
           setRPM(flatTrace)
          } else if(rpmLoad === false){
            setRPM(RPM)
          }
        };
        onPageLoad()
      })

       // throttle disappearing act
       useLayoutEffect(() => {
        const onPageLoad = () => {
          if (throttleLoad === true) {
           setThrottle(flatTrace)
          } else if(throttleLoad === false){
            setThrottle(throttle)
          }
        };
        onPageLoad()
      })

       // fuel consumption disappearing act
       useLayoutEffect(() => {
        const onPageLoad = () => {
          if (fuelconsumptionLoad === true) {
           setfuelConsumption(flatTrace)
          } else if(fuelconsumptionLoad === false){
            setfuelConsumption(fuelConsumption)
          }
        };
        onPageLoad()
      })

      // fuel consumption disappearing act
      useLayoutEffect(() => {
        const onPageLoad = () => {
          if (fuelconsumptionLoad === true) {
           setfuelConsumption(flatTrace)
          } else if(fuelconsumptionLoad === false){
            setfuelConsumption(fuelConsumption)
          }
        };
        onPageLoad()
      })


      // MAP disappearing act
      useLayoutEffect(() => {
        const onPageLoad = () => {
          if (mapLoad === true) {
           setmapLoad(flatTrace)
          } else if(mapLoad === false){
           setMAP(MAP)
          }
        };
        onPageLoad()
      })
      
      // fuel pressure disappearing act
      useLayoutEffect(() => {
        const onPageLoad = () => {
          if (fuelpressureLoad === true) {
           setfuelPressure(flatTrace)
          } else if(fuelpressureLoad === false){
            setfuelPressure(fuelPressure)
          }
        };
        onPageLoad()
      })

            // rectifier temp disappearing act
            useLayoutEffect(() => {
              const onPageLoad = () => {
                if (rectifiertempLoad === true) {
                 setrectifierTemp(flatTrace)
                } else if(rectifiertempLoad === false){
                  setrectifierTemp(rectifierTemp)
                }
              };
              onPageLoad()
            })

                  // regulator temp disappearing act
      useLayoutEffect(() => {
        const onPageLoad = () => {
          if (regulatortempLoad === true) {
           setregulatorTemp(flatTrace)
          } else if(regulatortempLoad === false){
            setregulatorTemp(regulatorTemp)
          }
        };
        onPageLoad()
      })

            // stator temp disappearing act
            useLayoutEffect(() => {
              const onPageLoad = () => {
                if (statortempLoad === true) {
                 setstatorTemp(flatTrace)
                } else if(statortempLoad === false){
                  setstatorTemp(statorTemp)
                }
              };
              onPageLoad()
            })

                  // CHT disappearing act
      useLayoutEffect(() => {
        const onPageLoad = () => {
          if (chtLoad === true) {
           setCHT(flatTrace)
          } else if(chtLoad === false){
            setCHT(CHT)
          }
        };
        onPageLoad()
      })

            // MAT disappearing act
            useLayoutEffect(() => {
              const onPageLoad = () => {
                if (matLoad === true) {
                 setMAT(flatTrace)
                } else if(matLoad === false){
                  setMAT(MAT)
                }
              };
              onPageLoad()
            })
      
  


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
      setsystemPower(flatTrace)
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

  ////////////////// This is our generator Power switch function for switching true and false values, i.e. toggle.
  const switchgenPower = () => {
    if (genpowLoad === true) {
      setgenpowLoad(false);
      showOptions();
    }
    // console.log(genpowerChange);
  };

  // This is our system power switch function for switching true and false values, i.e. toggle.
  const switchsystemPower = () => {
    if (systempowLoad === true) {
      setsystempowLoad(false);
      showOptions();
    } 
    // console.log(systempowerChange);
  };

  // This is our generator Voltage switch function for switching true and false values, i.e. toggle.
  const switchgenVoltage = () => {
      if (genvoltageLoad === true) {
     setgenvoltageLoad(false);
      showOptions();
    }
    // console.log(genvoltageChange);
  };

  // This is our battery Voltage switch function for switching true and false values, i.e. toggle.
  const switchbatteryVoltage = () => {
    if (batteryvoltageLoad === true) {
      setbatteryvoltageLoad(false);
       showOptions();
    }
  
  };

  // This is our generator current switch function for switching true and false values, i.e. toggle.
  const switchgeneratorCurrent = () => {
    if (gencurrentLoad === true) {
      setgencurrentLoad(false);
       showOptions();
    }
    // console.log(generatorcurrentChange);
  };

  // This is our stator temp switch function for switching true and false values, i.e. toggle.
  const switchstatorTemp = () => {
    if (statortempLoad === true) {
      setstatortempLoad(false);
       showOptions();
    }
    //console.log(statortempChange);
  };

  // This is our battery current switch function for switching true and false values, i.e. toggle.
  const switchbatteryCurrent = () => {
    if (batterycurrentLoad === true) {
      setbatterycurrentLoad(false);
       showOptions();
    }
    //console.log(statortempChange);
  };

  // This is our throttle switch function for switching true and false values, i.e. toggle.
  const switchthrottle = () => {
    if (throttleLoad === true) {
      setthrottleLoad(false);
       showOptions();
    }
    //console.log(statortempChange);
  };

  // This is our setpoint switch function for switching true and false values, i.e. toggle.
  const switchSetpoint = () => {
    if (setpointLoad === true) {
      setsetpointLoad(false);
       showOptions();
    }
    //console.log(statortempChange);
  };

  // This is our RPM switch function for switching true and false values, i.e. toggle.
  const switchRPM = () => {
    if (rpmLoad === true) {
     setrpmLoad(false);
       showOptions();
    }
    //console.log(statortempChange);
  };

  // This is our fuel consumption switch function for switching true and false values, i.e. toggle.
  const switchfuelConsumption = () => {
    if (fuelconsumptionLoad === true) {
      setfuelconsumptionLoad(false);
       showOptions();
    }
    //console.log(statortempChange);
  };

  // This is our MAP switch function for switching true and false values, i.e. toggle.
  const switchMAP = () => {
    if (mapLoad === true) {
      setmapLoad(false);
       showOptions();
    }
    //console.log(statortempChange);
  };

  // This is our fuel pressure switch function for switching true and false values, i.e. toggle.
  const switchfuelPressure = () => {
    if (fuelpressureLoad === true) {
      setfuelpressureLoad(false);
       showOptions();
     
    }
    //console.log(statortempChange);
  };

  // This is our rectifier temperature switch function for switching true and false values, i.e. toggle.
  const switchrectifierTemp = () => {
    if (rectifiertempLoad === true) {
      setrectifiertempLoad(false);
       showOptions();
    }
    //console.log(statortempChange);
  };

  // This is our regulator temperature switch function for switching true and false values, i.e. toggle.
  const switchregulatorTemp = () => {
    if (regulatortempLoad === true) {
      setregulatortempLoad(false);
       showOptions();
    }
    //console.log(statortempChange);
  };

  // This is our CHT switch function for switching true and false values, i.e. toggle.
  const switchCHT = () => {
    if (chtLoad === true) {
      setchtLoad(false);
       showOptions();
    }
    //console.log(statortempChange);
  };

  // This is our MAT switch function for switching true and false values, i.e. toggle.
  const switchMAT = () => {
    if (matLoad === true) {
      setmatLoad(false);
       showOptions();
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
  };

  const showOptionsTwo = () => {
    if (graphoneoptionTwo === true) {
      setgraphoneoptionTwo(false);
    } else if (graphoneoptionTwo === false) {
      setgraphoneoptionTwo(true);
    }
  }

  const showOptionsThree = () => {
    if (graphoneoptionThree === true) {
      setgraphoneoptionThree(false);
    } else if (graphoneoptionThree === false) {
      setgraphoneoptionThree(true);
    }
  }

  const showOptionsFour = () => {
    if (graphoneoptionFour === true) {
      setgraphoneoptionFour(false);
    } else if (graphoneoptionFour === false) {
      setgraphoneoptionFour(true);
    }
  }



  return (
    <div className="plotbody">
      
      <div className="graph-1-box-1-scrollbox">
      <div id="demo-radio-buttons-group-label">GRAPH FOUR</div>
        <FormControl>
         
          <FormLabel id="demo-radio-buttons-group-label" >PLOT 1
          
            <button className="arrow-up-plot" onClick={showOptions}><FontAwesomeIcon icon={faChevronDown} /></button>
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
                  value="systemPower"
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
        <FormLabel id="demo-radio-buttons-group-label" >PLOT 2
            <button className="arrow-up-plot" onClick={showOptionsTwo} ><FontAwesomeIcon icon={faChevronDown} /></button>
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
                   {/***************PLOT 3 **************/}
                   <FormControl>
        <FormLabel id="demo-radio-buttons-group-label" >PLOT 3
           <button className="arrow-up-plot" onClick={showOptionsThree}><FontAwesomeIcon icon={faChevronDown} /></button> 
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
                   {/***************PLOT 4 **************/}
                   <FormControl>
        <FormLabel id="demo-radio-buttons-group-label" >
          PLOT 4 <button className="arrow-up-plot" onClick={showOptionsFour} ><FontAwesomeIcon icon={faChevronDown} /></button>
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
        <button id="cleargraph">Clear Graph</button>
        </FormControl>
      </div>
      <Plot
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
        }}
      />
      {/* <Plot
        data={[genVoltage, genPower, systemPower]}
        layout={{
          title: "Power Management Unit Data Chart",
        }}
      />{" "}
      <Plot
        data={[genVoltage, genPower]}
        layout={{
          title: "Power Management Unit Data Chart",
        }}
      />{" "}
      <Plot
        data={[genVoltage]}
        layout={{
          title: "Power Management Unit Data Chart",
        }}
      /> */}
      <br></br>
    </div>
  );
};

export default GraphComponentFour;
