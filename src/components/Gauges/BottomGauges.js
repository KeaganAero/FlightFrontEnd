import React, { useState, useEffect } from "react";
import LiveLog from "../Data-Logging/LiveLog";
import axios from "axios";
import Battery from "./Battery";
import "../Gauge-styles/bottomGauges.css";
import "../Initialization-Styles/killButton.css";
import "../Initialization/Button";
// import SystemGen from "./SystemGen";
import { io } from "socket.io-client";
import Zoom from "react-reveal/Zoom";
import Flash from "react-reveal/Flash";
import Spin from "react-reveal/Spin";
// import Buttontest from "../Initialization/Buttontest";
import ActiveComponent from "../system-lights/ActiveComponent";
import ActiveComponentTwo from "../system-lights/ActiveComponentTwo";
import FaultOneOn from "../system-lights/FaultOneOn";
import FaultOneOff from "../system-lights/FaultOneOff";
import FaultTwoOn from "../system-lights/FaultTwoOn";
import FaultTwoOff from "../system-lights/FaultTwoOff";
import Button from "../Initialization/Button";
import ButtonActive from "../Initialization/ButtonActive";
import KillButton from "../Initialization/KillButton";
import KillButtonActive from "../Initialization/KillButtonActive";
import Systemboxes from "../System-gen-boxes/Systemboxes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Speedometer, {
  Background,
  Arc,
  Needle,
  DangerPath,
  Progress,
  Marks,
  Indicator,
} from "react-speedometer";
import { local } from "d3";

// engine status websocket
const socket = io("http://127.0.0.1:3001");

// safe temp mode websocket
const socketTempMode = io("http://127.0.0.1:3003");

// Low Pow Mode websocket
const socketLowPowMode = io("http://127.0.0.1:3004");

// available port received from backend
// const socketPortSelection = io("http://localhost:3005");

// kill engine control websocket
const socketKillEngine = io("http://127.0.0.1:3006");

// exit low power mode
const socketExitLowPower = io("http://127.0.0.1:3008");

// send selected port as COM port on the server
// const socketSendComPort = io("http://localhost:3006");

var engineOn = 0;
// var safeTempMode = 0;

const BottomGauges = () => {
  const [test, setTest] = useState(0);
  const [temp, setTemp] = React.useState("");
  const handleTempChange = (event) => {
    setTemp(event.target.value);
  };
  // Passing a variable as an argument(data) in order to receive our message being emitted from the socket on the server
  // const [comPort, setComPort] = useState(JSON.stringify());

  // socketPortSelection.on("COM ports", (data) => {
  //   console.log(data, "<--- Available COM ports");
  //   setComPort(data);
  // });

  // console.log(comPort ,"%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")

  const [message, setMessage] = useState(true);

  useEffect((e) => {
    const incomingReading = async () => {
      const res = await axios.get("http://localhost:3002");
      const readings = res.data;
      // console.log(readings);
      var isValid = readings[0].hasOwnProperty("rectifierTemp");

      if (isValid) {
        setReadings(readings);
      }
      if (isValid === true) {
        setMessage(false);
      }
      setReadings(readings);

      // console.log(res);
    };
    incomingReading();
  });

  const [readings, setReadings] = useState([]);

  const [value, setValue] = useState();
  // // const[color,setColor]=useState(Background)

  // button data
  const [disabled, setDisabled] = useState(true);

  const toggleScreen = () => {
    if (disabled === true) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
    toggleScreen();
  };

  //live log data
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const logging = async () => {
      const res = await axios.get("http://localhost:3002");
      const logs = res.data;
      setLogs(logs);
      // console.log(res, "************ live log *****************");
    };
    logging();
  });
  //socket io send comport

  // const sendCom = () => {
  //   try{
  //     socketSendComPort.emit("COM from front-end",comPort);
  //     console.log("com sent to server via websocket 3006")
  //   }
  //  catch(err){
  //   console.log(err)
  //  }
  // }

  //socket io engine start button
  // const [engineOn, setEngineOn] = useState(localStorage.getItem('engine-status')==='true');
  // const [engineOn, setEngineOn] = useState();
  // const [status, setStatus] = useState("");
  // useEffect(() => {
  //   localStorage.setItem('engine-status',(engineOn))
  // },[engineOn])

  var killButtonElement = document.querySelector(".kill-button");

  const togglePower = () => {
    readings.map((value) => {
      console.log("Engine was is in", value.statusGen);
      if (value.statusGen === "STANDBY") {
        engineOn = 1;
        killButtonElement.style.pointerEvents = "auto";
        killButtonElement.style.opacity = "100%";
        console.log(engineOn, "<--- sending 1");
      } else {
        engineOn = 0;

        console.log(engineOn, "<--- sending 0");
      }
      // console.log("engine is going to be in" + value.statusGen)
    });
  };
  const toggle = () => {
    togglePower();
    socket.emit("send_engine_message", engineOn);
    // console.log(
    //   "toggle is fired from its last state**************************************************************************"
    // );
  };

  //socket io safe temp mode button
  // const [safeTempMode, setSafeTempMode] = useState(
  //   localStorage.getItem("temp-status")
  // );

  // useEffect(() => {
  //   localStorage.setItem("temp-status", safeTempMode);
  // }, [safeTempMode]);
  const [safeTempMode, setSafeTempMode] = useState(0);

  const toggleSafeTemp = () => {
    if (safeTempMode === 0) {
      setSafeTempMode(1);
    } else {
      setSafeTempMode(0);
    }
  };

  const toggleTempMode = () => {
    toggleTempColor();
    toggleSafeTemp();
    // Use the updated value after the state update is complete
    socketTempMode.emit("send_temperature_message", safeTempMode, () => {
      socketTempMode.close();
    });
  };

  // console.log(safeTempMode, "*********** Check temperature status");

  // socket io Low Power Mode button

  const [formField, setFormField] = useState(0);

  const sendFormData = (e) => {
    e.preventDefault();
    socketLowPowMode.emit("send_low_power_message", formField, () => {
      // The WebSocket is closed after the message is sent
      socketLowPowMode.close();
    });
  };

  //record form data
  const recordFormField = (e) => {
    setFormField(e.target.value);
    // console.log(e.target.value)
  };
  // state for engine light
  const [lightOn, setLightOn] = useState(
    localStorage.getItem("status-light") === "true"
  );

  useEffect(() => {
    localStorage.setItem("status-light", lightOn);
  }, [lightOn]);

  const toggleLight = () => {
    readings.map((value) => {
      if (value.statusGen === "STANDBY") {
        setLightOn(false);
      } else setLightOn(true);
    });
  };
  ///////////////////// new active light data
  const [buttonLight, setButtonLight] = useState(
    localStorage.getItem("button-light") === "true"
  );

  useEffect(() => {
    localStorage.setItem("button-light", buttonLight);
  }, [buttonLight]);

  const showColor = () => {
    readings.map((value) => {
      if (value.statusGen === "STANDBY") {
        setButtonLight(false);
      } else setButtonLight(true);
    });
  };
  var killEngine = 0;

  ////////////////// kill button light/////////////////////////
  const [killLight, setKillLight] = useState(false);

  // const killValue = () => {
  //   if (killLight === false) {
  //     setKillLight(true);
  //   } else setKillLight(false);
  // };

  const killValue = () => {
    readings.map((value) => {
      if (value.statusGen === "SUSTAIN") {
        setKillLight(true);
      } else setKillLight(false);
    });
  };

  useEffect(() => {
    localStorage.setItem("kill-light", killLight);
  }, [killLight]);

  const toggleKill = () => {
    socketKillEngine.emit("kill_engine_message", 1);
    socketKillEngine.close();
  };

  const endLowPower = () => {
    socketExitLowPower.emit("exit_lowPower", 0);
  };
  ////////////////////////////////////////////////////////////////////

  //this function is just a combo of the two toggle functions to make for cleaner jsx code
  const engineControl = () => {
    toggle();
    toggleLight();
    showColor();
  };
  // this is just a combo of the two toggle kill functions
  const killControl = () => {
    toggleKill();
    killValue();
  };
  var chtMaxValue = 300;

  const [showDefault, setShowDefault] = useState(true);

  useEffect(() => {
    const showGauges = () => {
      readings.map((value) => {
        if (value.rectifierTemp !== 0) {
          setShowDefault(false);
          //console.log("switchted to " + showDefault);
        }
      });
    };
    showGauges();
  });

  const [toggleColor, setToggleColor] = useState(
    localStorage.getItem("ice-light") === "true"
  );

  useEffect(() => {
    localStorage.setItem("ice-light", toggleColor);
  }, [toggleColor]);

  const toggleTempColor = () => {
    if (toggleColor === false) {
      setToggleColor(true);
    } else setToggleColor(!toggleColor);
  };

  /////////////////////////////////////////////////// ARGONITE STATUS REFERENCE //////////////////

  // useEffect(() => {
  //   const argoniteStatus = () => {

  //   }
  //   argoniteStatus()
  // })
  ////////////////////////////////////////////////// ARGONITE STATUS ABOVE //////////////////////
  const [faultLightOn, setFaultLightOn] = useState(false);
  const [faultLightTwoOn, setFaultLightTwoOn] = useState(false);
  ////////////

  /////////////////////////////////// GAUGE DESCRIPTIONS FUNCTIONS  /////////////////////////

  const [showRect, setShowRect] = useState(false);
  const [showGen, setShowGen] = useState(false);
  const [showSystem, setShowSystem] = useState(false);
  const [showRegulator, setShowRegulator] = useState(false);
  const [showCylinder, setShowCylinder] = useState(false);
  const [showBat, setShowBat] = useState(false);

  /////////////////// (1) rectifier temp
  const showInfoRect = () => {
    if (showRect === false) {
      setShowRect(true);
      console.log(showRect);
    }
  };

  const hideInfoRect = () => {
    if (showRect === true) {
      setShowRect(false);
      console.log(showRect);
    }
  };
  /////////////////// (2) generator power
  const showInfoGen = () => {
    if (showGen === false) {
      setShowGen(true);
      console.log(showGen);
    }
  };

  const hideInfoGen = () => {
    if (showGen === true) {
      setShowGen(false);
      console.log(showGen);
    }
  };

  ///////////////// (3) system power

  const showInfoSystem = () => {
    if (showSystem === false) {
      setShowSystem(true);
      console.log(showSystem);
    }
  };

  const hideInfoSystem = () => {
    if (showSystem === true) {
      setShowSystem(false);
      console.log(showSystem);
    }
  };
  ///////////////// (4) Regulator Temp

  const showInfoRegulator = () => {
    if (showRegulator === false) {
      setShowRegulator(true);
      console.log(showRegulator);
    }
  };

  const hideInfoRegulator = () => {
    if (showRegulator === true) {
      setShowRegulator(false);
      console.log(showRegulator);
    }
  };

  ////////////////////// (5) Cylinder Temperature

  const showInfoCylinder = () => {
    if (showCylinder === false) {
      setShowCylinder(true);
      console.log(showCylinder);
    }
  };

  const hideInfoCylinder = () => {
    if (showCylinder === true) {
      setShowCylinder(false);
      console.log(showCylinder);
    }
  };

  ////////////////////// (6) Battery

  const showInfoBat = () => {
    if (showBat === false) {
      setShowBat(true);
      console.log(showBat);
    }
  };

  const hideInfoBat = () => {
    if (showBat === true) {
      setShowBat(false);
      console.log(showBat);
    }
  };
  ///// TEMP UNIT CONVERSION FUNCTION

  const [showCelcius, setShowCelcius] = useState(false);
  var convertedRegTemp = document.querySelector(".grid-item-six");
  var convertRecTemp = document.querySelector(".grid-item-three");
  var convertCHTemp = document.querySelector(".grid-item-four");
  useEffect(() => {
    console.log(showCelcius, ": SHOW CELCIUS STATUS");
    if (showCelcius === true) {
      convertedRegTemp.style.visibility = "hidden";
      convertRecTemp.style.visibility = "hidden";
      convertCHTemp.style.visibility = "hidden";
    }
  }, [showCelcius]);

  const changeUnit = () => {
    setShowCelcius(true);
  };

  const changeUnitToF = () => {
    setShowCelcius(false);
  };
  return (
    <div>
      <header className="App-header">
        {/*  */}

        {/* <ComTab/> */}
        <div className="grid-container">
          {message ? (
            <h1 className="inactive-message">
              <p className="info">No Data Detected</p>
            </h1>
          ) : null}

          {/****************** gen power ******************* */}
          {showDefault ? ( // <Zoom durationOut="3000">
            <div class="grid-item-one-default">
              <Spin durationOut="3000">
                <Speedometer
                  //  onchange={valueRead}
                  key={0}
                  value={0}
                  max={20}
                  accentColor="white"
                >
                  <Background />
                  <Arc />
                  <Needle color="red" />
                  <DangerPath
                    offset={40}
                    angle={150}
                    arcWidth={14}
                    color="lightred"
                  />
                  <Progress color="red" />
                  <Marks />
                  <Indicator />
                </Speedometer>
              </Spin>

              <h3 className="gauge-title">Generator Power(kw)</h3>
            </div> // <Zoom durationOut="3000">
          ) : (
            readings.map((value) => (
              <div class="grid-item-one">
                <Spin durationOut="3000">
                  <Speedometer
                    //  onchange={valueRead}
                    key={value.id0}
                    value={value.genPower / 1000}
                    max={20}
                    accentColor="white"
                  >
                    <Background />
                    <Arc color="red" />
                    <Needle color="red" />
                    <DangerPath
                      offset={40}
                      angle={150}
                      arcWidth={14}
                      color="red"
                    />
                    <Progress />
                    <Marks />
                    <Indicator />
                  </Speedometer>
                </Spin>
                {readings.map((value) => (
                  <div className="gen-value-box">
                    {parseFloat((value.genPower / 1000).toFixed(2))}
                  </div>
                ))}
                <h3 className="gauge-title">Generator Power(kw)</h3>
                {/* **********  QUESTION MARK DESCRIPTION ************* */}
                <div className="gauge-descriptor">
                  <FontAwesomeIcon
                    icon={faCircleQuestion}
                    onMouseEnter={showInfoGen}
                    onMouseLeave={hideInfoGen}
                  />
                  {showGen ? (
                    <div className="pop-up-box" id="rectifier-pop-up">
                      <div className="text-desc">
                        {" "}
                        This monitors the power produced by the generator with a
                        range between 0k - 10k.
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            ))
          )}

          {/*************************** SYSTEM POWER ************** */}
          {showDefault ? (
            <div class="grid-item-two-default">
              <Spin>
                <Speedometer key={0} value={0} max={40} accentColor="white">
                  <Background color="black" />

                  <Arc />
                  <Needle color="red" />
                  <DangerPath color="lightred" />
                  <Progress color="red" />

                  <Marks />
                  <Indicator />
                </Speedometer>
              </Spin>
              <h3 className="gauge-title">System Power(kw)</h3>
            </div>
          ) : (
            readings.map((value) => (
              <div class="grid-item-two">
                <Spin>
                  <Speedometer
                    key={value.id0}
                    value={value.systemPower / 1000}
                    max={40}
                    accentColor="white"
                  >
                    <Background />
                    <Arc color="red" />
                    <Needle color="red" />
                    <DangerPath />
                    <Progress />
                    <Marks />
                    <Indicator />
                  </Speedometer>
                </Spin>
                {readings.map((value) => (
                  <div className="gen-value-box">
                    {parseFloat((value.systemPower / 1000).toFixed(2))}
                  </div>
                ))}
                <h3 className="gauge-title">System Power(kw)</h3>
                {/* **********  QUESTION MARK DESCRIPTION ************* */}
                <div className="gauge-descriptor">
                  <FontAwesomeIcon
                    icon={faCircleQuestion}
                    onMouseEnter={showInfoSystem}
                    onMouseLeave={hideInfoSystem}
                  />
                  {showSystem ? (
                    <div className="pop-up-box" id="rectifier-pop-up">
                      <div className="text-desc">
                        {" "}
                        This monitors the total power consumed by the system
                        minus the power generated by the generator.
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            ))
          )}
          {/****************************** rectifier **********************/}

          {showDefault ? (
            <div class="grid-item-three-default">
              <Spin>
                <Speedometer key={0} value={0} max={200}>
                  <Background color="black" />
                  <Arc />
                  <Needle color="red" />
                  <DangerPath color="red" />
                  <Progress color="lightred" />
                  <Marks />
                  <Indicator />
                </Speedometer>
              </Spin>
              <h3 className="gauge-title">Rectifier Temperature(°F)</h3>
            </div>
          ) : (
            readings.map((value) => (
              <div class="grid-item-three">
                <div className="celcius-rec-temp">
                  {showCelcius ? (
                    <div>
                      <Spin>
                        <Speedometer
                          //  onchange={valueRead}
                          key={value.id0}
                          value={value.rectifierTemp - (32 * 5) / 9}
                          max={((90 - 32) * 5) / 9}
                          accentColor="white"
                        >
                          <Background />
                          <Arc color="red" />
                          <Needle color="red" />
                          <DangerPath
                            offset={40}
                            angle={61}
                            arcWidth={14}
                            color="red"
                          />
                          <Progress />
                          <Marks />
                          <Indicator />
                        </Speedometer>
                      </Spin>
                      <h3 className="gauge-title">Rectifier Temperature(°C)</h3>

                      {/* **********  QUESTION MARK DESCRIPTION ************* */}
                      <div className="gauge-descriptor">
                        <FontAwesomeIcon
                          icon={faCircleQuestion}
                          onMouseEnter={showInfoRect}
                          onMouseLeave={hideInfoRect}
                        />
                        {showRect ? (
                          <div className="pop-up-box" id="rectifier-pop-up">
                            <div className="text-desc">
                              {" "}
                              This monitors the onboard passive rectifier
                              diodes. Nominal operating temperature: 82.2°C -
                              115.6°C Absolute temperature ratings: -55°C -
                              150°C
                            </div>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  ) : (
                    <Spin>
                      <Speedometer
                        key={value.id0}
                        value={value.rectifierTemp}
                        max={200}
                        accentColor="white"
                      >
                        <Background color="black" />
                        <Arc color="red" />
                        <Needle color="red" />
                        <DangerPath color="red" />
                        <Progress color="lightred" />
                        <Marks />
                        <Indicator />
                      </Speedometer>
                      <h3 className="gauge-title">Rectifier Temperature(°F)</h3>
                      {/* **********  QUESTION MARK DESCRIPTION ************* */}
                      <div className="gauge-descriptor">
                        <FontAwesomeIcon
                          icon={faCircleQuestion}
                          onMouseEnter={showInfoRect}
                          onMouseLeave={hideInfoRect}
                        />
                        {showRect ? (
                          <div className="pop-up-box" id="rectifier-pop-up">
                            <div className="text-desc">
                              {" "}
                              This monitors the onboard passive rectifier
                              diodes. Nominal operating temperature: 180°F -
                              240°F Absolute temperature ratings: -67°F - 302°F
                            </div>
                          </div>
                        ) : null}
                      </div>
                    </Spin>
                  )}
                </div>
              </div>
            ))
          )}

          {/****************************** CHT TEMP**************************** */}

          {showDefault ? (
            <div class="grid-item-four-default">
              {/* Four */}
              <Spin>
                <Speedometer key={0} value={0} max={40} accentColor="white">
                  <Background color="black" />
                  <Arc />
                  <Needle color="red" />
                  <DangerPath color="red" />
                  <Progress color="lightred" />
                  <Marks />
                  <Indicator />
                </Speedometer>
              </Spin>
              <h3 className="gauge-title">Cylinder Head Temp(°F)</h3>
            </div>
          ) : (
            readings.map((value) => (
              <div className="grid-item-four">
                <div className="celcius-ch-temp">
                  {showCelcius ? (
                    <div>
                      <Spin>
                        <Speedometer
                          //  onchange={valueRead}
                          key={value.id0}
                          value={value.CHT - (32 * 5) / 9}
                          max={((chtMaxValue - 32) * 5) / 9}
                          accentColor="white"
                        >
                          <Background />
                          <Arc color="red" />
                          <Needle color="red" />
                          <DangerPath
                            offset={40}
                            angle={61}
                            arcWidth={14}
                            color="red"
                          />
                          <Progress />
                          <Marks />
                          <Indicator />
                        </Speedometer>
                      </Spin>
                      <h3 className="gauge-title">Cylinder Head Temp(°C)</h3>
                      {/* **************  QUESTION MARK DESCRIPTION CELCIUS  */}
                      <div className="gauge-descriptor">
                        <FontAwesomeIcon
                          icon={faCircleQuestion}
                          onMouseEnter={showInfoCylinder}
                          onMouseLeave={hideInfoCylinder}
                        />
                        {showCylinder ? (
                          <div className="pop-up-box" id="rectifier-pop-up">
                            <div className="text-desc">
                              {" "}
                              It monitors the temperature of the aft cylinder
                              head. It should not exceed 137.8°C.
                            </div>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  ) : (
                    <Spin durationOut="3000">
                      <Speedometer
                        key={value.id0}
                        value={value.CHT}
                        max={chtMaxValue}
                        accentColor="white"
                      >
                        <Background color="black" />
                        <Arc color="red" />
                        <Needle color="red" />
                        <DangerPath
                          offset={40}
                          angle={45}
                          arcWidth={14}
                          color="red"
                        />
                        <Progress color="lightred" />
                        <Marks fontSize={12} />
                        <Indicator />
                      </Speedometer>
                      <h3 className="gauge-title">Cylinder Head Temp(°F)</h3>
                      <div className="gauge-descriptor">
                        <FontAwesomeIcon
                          icon={faCircleQuestion}
                          onMouseEnter={showInfoCylinder}
                          onMouseLeave={hideInfoCylinder}
                        />
                        {showCylinder ? (
                          <div className="pop-up-box" id="rectifier-pop-up">
                            <div className="text-desc">
                              {" "}
                              It monitors the temperature of the aft cylinder
                              head. It should not exceed 280°F.
                            </div>
                          </div>
                        ) : null}
                      </div>
                    </Spin>
                  )}
                </div>
              </div>
            ))
          )}

          {/*********************** BATTERY ***************** */}

          <div class="grid-item-five">
            {/* Five */}

            <div className="gauge-descriptor">
              <div id="bat-icon">
                <FontAwesomeIcon
                  icon={faCircleQuestion}
                  onMouseEnter={showInfoBat}
                  onMouseLeave={hideInfoBat}
                />
              </div>

              {showBat ? (
                <div className="pop-up-box" id="battery-pop-up">
                  <div className="text-desc-bat">
                    {" "}
                    This monitors the battery Voltage(V). Nominal battery
                    voltage is 95v - 117v.
                  </div>
                </div>
              ) : null}
            </div>
            <Battery />

            <div className="radio-container"></div>
          </div>

          {/****************** regulator temp ******************* */}
          {showDefault ? (
            <div class="grid-item-six-default">
              <Spin durationOut="3000">
                <Speedometer
                  //  onchange={valueRead}
                  key={0}
                  value={0}
                  max={200}
                  accentColor="white"
                >
                  <Background />
                  <Arc />
                  <Needle color="red" />
                  <DangerPath offset={40} angle={61} arcWidth={14} />
                  <Progress />
                  <Marks />
                  <Indicator />
                </Speedometer>
              </Spin>
              {/* ********* QUESTION MARK DESCRIPTIOPN CELCIUS */}
              <h3 className="gauge-title">Regulator Temperature(°C)</h3>

              <div className="gauge-descriptor">
                <FontAwesomeIcon
                  icon={faCircleQuestion}
                  onMouseEnter={showInfoRegulator}
                  onMouseLeave={hideInfoRegulator}
                />
                {showRegulator ? (
                  <div className="pop-up-box" id="rectifier-pop-up">
                    <div className="text-desc">
                      {" "}
                      This is the temperature of the internal rectifier diodes.
                      Nominal temperature is 37.8°F - 60°F.
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          ) : (
            readings.map((value) => (
              <div className="grid-item-six">
                <div className="celcius-reg-temp">
                  {showCelcius ? (
                    <div>
                      <div>
                        <Spin>
                          <Speedometer
                            //  onchange={valueRead}
                            key={value.id0}
                            value={value.regulatorTemp - (32 * 5) / 9}
                            max={90}
                            accentColor="white"
                          >
                            <Background />
                            <Arc color="red" />
                            <Needle color="red" />
                            <DangerPath
                              offset={40}
                              angle={61}
                              arcWidth={14}
                              color="red"
                            />
                            <Progress />
                            <Marks />
                            <Indicator />
                          </Speedometer>
                        </Spin>
                        <h3 className="gauge-title">
                          Regulator Temperature(°C)
                        </h3>
                        {/* ********* QUESTION MARK DESCRIPTIOPN CELCIUS */}
                      </div>
                      {/* Description circle for Celcius Gauge of Regulator Temperature */}
                      <div className="gauge-descriptor">
                        <FontAwesomeIcon
                          icon={faCircleQuestion}
                          onMouseEnter={showInfoRegulator}
                          onMouseLeave={hideInfoRegulator}
                        />
                        {showRegulator ? (
                          <div className="pop-up-box" id="rectifier-pop-up">
                            <div className="text-desc">
                              {" "}
                              This is the temperature of the internal rectifier
                              diodes. Nominal temperature is 37.8°C - 60°C.
                            </div>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  ) : (
                    <Spin durationOut="3000">
                      <Speedometer
                        //  onchange={valueRead}
                        key={value.id0}
                        value={value.regulatorTemp}
                        max={200}
                        accentColor="none"
                      >
                        <Background />
                        <Arc color="red" />
                        <Needle color="red" />
                        <DangerPath
                          offset={40}
                          angle={61}
                          arcWidth={14}
                          color="red"
                        />
                        <Progress />
                        <Marks />
                        <Indicator />
                      </Speedometer>
                      <h3 className="gauge-title">Regulator Temperature(°F)</h3>
                      <div className="gauge-descriptor">
                        <FontAwesomeIcon
                          icon={faCircleQuestion}
                          onMouseEnter={showInfoRegulator}
                          onMouseLeave={hideInfoRegulator}
                        />
                        {showRegulator ? (
                          <div className="pop-up-box" id="rectifier-pop-up">
                            <div className="text-desc">
                              {" "}
                              This is the temperature of the internal rectifier
                              diodes. Nominal temperature is 100°F - 140°F.
                            </div>
                          </div>
                        ) : null}
                      </div>
                    </Spin>
                  )}
                </div>
              </div>
            ))
          )}

          {/******* ECB - ENGINE CONTROL BUTTON ********** */}
          {showDefault ? (
            <div class="grid-item-seven-default">
              <div className="button">
                <input
                  type="checkbox"
                  id="checkbox"
                  onClick={engineControl}
                ></input>
                <div className="button-center">
                  <i class="fa-solid fa-power-off"></i>
                </div>
              </div>

              {/****** STATUS LIGHT NO.1 */}
              <div className="status-box">
                <div className="gauge-title" id="system-status-message">
                  <div className="light">
                    {lightOn ? <ActiveComponent /> : <ActiveComponentTwo />}
                  </div>
                  {/* ARGONITE SYSTEM STATUS */} System Status:{" "}
                  {readings.map((value) => value.statusGen)}
                  {/* {console.log(value.statusGen ,"**************************************************************************")} */}
                </div>
                {/*****STATUS LIGHT NO. 2 ******* */}
                <div className="gauge-title" id="system-status-message">
                  <div className="light">
                    {faultLightOn ? <FaultOneOn /> : <FaultOneOff />}
                  </div>
                  Fault 1: {readings.map((value) => value.PLACEVALUEHERE)}
                </div>
                {/********* STATUS LIGHT NO. 3 */}
                <div className="gauge-title" id="system-status-message">
                  <div className="light">
                    {lightOn ? <ActiveComponent /> : <ActiveComponent />}
                  </div>
                  Fault 2: {readings.map((value) => value.PLACEVALUEHERE)}
                </div>
              </div>
            </div>
          ) : (
            <div class="grid-item-seven">
              <div id="mode-container">
                {toggleColor ? (
                  <div class="btn ice" onClick={toggleTempMode}>
                    <p className="temp-msg-before">Safe Temp Mode On</p>
                  </div>
                ) : (
                  <div class="btn-ice-click" onClick={toggleTempMode}>
                    <p className="temp-msg">Safe Temp Mode Off</p>
                  </div>
                )}
                {/***************** low power mode *******************/}
                <form type="password" className="form" onSubmit={sendFormData}>
                  <ul>
                    <li>
                      <label id="form-label" for="msg">
                        Low Power Mode(kw)
                      </label>
                      <textarea
                        value={formField}
                        onChange={recordFormField}
                        id="form-message"
                        name="user_message"
                        placeholder="2.6"
                      ></textarea>
                    </li>
                  </ul>

                  <li id="form-button">
                    <button className="submit-button" type="submit">
                      Change SetPoint
                    </button>
                  </li>
                </form>
                <button
                  className="submit-button"
                  id="exit-low-power"
                  onClick={endLowPower}
                >
                  Low Power Off
                </button>
              </div>

              {/************************ active button engine component here , starts with no color then colour on*************************************/}
              <div onClick={engineControl}>
                <div id="font-icon-question-mark-power">
                  <FontAwesomeIcon icon={faCircleCheck} />
                </div>
                <div className="power-button" id="power-title">
                  START UP / SHUTDOWN
                </div>

                {buttonLight ? <Button /> : <ButtonActive />}
              </div>
              <div id="font-icon-question-mark-kill">
                <FontAwesomeIcon icon={faCircleExclamation} />
              </div>
              <div id="kill-title"> EMERGENCY SHUTDOWN</div>
              <div className="kill-button" onClick={killControl}>
                {buttonLight ? (
                  <div className="kill-button">
                    <input type="kill-checkbox" id="kill-checkbox"></input>
                    <div className="kill-button-center" id="kill-button-on">
                      <i class="fa-solid fa-power-off"></i>
                    </div>
                  </div>
                ) : (
                  <div className="kill-active-button">
                    <input type="checkbox" id="kill-active-checkbox"></input>
                    <div
                      className="kill-active-button-center"
                      id="kill-active-button-on"
                    >
                      <i class="fa-solid fa-power-off"></i>
                    </div>
                  </div>
                )}
              </div>

              {/* Low Power Mode */}

              <div className="status-box">
                {/****** STATUS LIGHT NO.1 */}
                <div className="gauge-title" id="system-status-message">
                  <div className="light">
                    {lightOn ? <ActiveComponent /> : <ActiveComponentTwo />}
                  </div>
                  - System Status: {readings.map((value) => value.statusGen)}
                </div>
                {/*****STATUS LIGHT NO. 2 ******* */}
                <div className="gauge-title" id="system-status-message">
                  <div className="light">
                    {faultLightOn ? <FaultOneOn /> : <FaultOneOff />}
                  </div>
                  Fault 1: {readings.map((value) => value.PLACEVALUEHERE)}
                </div>
                {/********* STATUS LIGHT NO. 3 */}
                <div className="gauge-title" id="system-status-message">
                  <div className="light">
                    {faultLightTwoOn ? <FaultTwoOn /> : <FaultTwoOff />}
                  </div>
                  Fault 2: {readings.map((value) => value.PLACEVALUEHERE)}
                </div>
              </div>
            </div>
          )}

          <div className="grid-item-seven">
            {" "}
            <div className="converter-box-title">UNIT CONVERTER</div>
            <ToggleButtonGroup
              className="unit-button"
              color="primary"
              value={temp}
              exclusive
              onChange={handleTempChange}
              aria-label="Platform"
            >
              <ToggleButton value="celcius" onClick={changeUnit}>
                &deg;Celsius
              </ToggleButton>
              <ToggleButton value="fahrenheit" onClick={changeUnitToF}>
                &deg;Fahrenheit
              </ToggleButton>
            </ToggleButtonGroup>
          </div>

          {/* ////////////////////
          <div className="grid-item-seven">
            {" "}
            <div className="converter-box-title" >Unit Converter</div>
            <FormControl className="temp-box"sx={{ m: 1, minWidth: 80 }}>
              <InputLabel id="demo-simple-select-autowidth-label">
           
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={temp}
                onChange={handleTempChange}
                autoWidth
                label="Temperature"
              >
                <MenuItem value="Temp"></MenuItem>
                <MenuItem className="temp-disc"value={10}  onClick={changeUnit}>   &deg;Celcius</MenuItem>
                <MenuItem className="temp-disc"value={21}>&deg;Fahrenheit</MenuItem>
              </Select>
            </FormControl>
          </div>
///////////////////////  */}
          <div class="grid-item-eight">
            <Flash>
              {/* <SystemGen /> */}
              <Systemboxes />
            </Flash>
          </div>
          {showDefault ? (
            <div class="grid-item-ten-default">
              <LiveLog />
            </div>
          ) : (
            <div class="grid-item-ten">
              <LiveLog />
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default BottomGauges;
