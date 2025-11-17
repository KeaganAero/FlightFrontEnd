import React, { useState, useEffect } from "react";
import "../SettingsPageStyles/index.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import GenBatteryIcon from "../Icon-folder/GenBatteryIcon";
import GenPidIcon from "../Icon-folder/GenPidIcon";
import GenGeneratorIcon from "../Icon-folder/GenGeneratorIcon";
import AutoPilotIcon from "../Icon-folder/AutoPilotIcon";
import GuiIcon from "../Icon-folder/GuiIcon";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import IconSun from "../Icon-folder/IconSun";
import io from "socket.io-client";
import axios from "axios";
import IconMoonStars from "../Icon-folder/IconMoonStars";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
// available port received from backenda

const SettingsCarousel = () => {
  //GENERATOR SETTINGS PID GAINS NORMAL OPERATION, SAFE TEMP, AND LOW POWER, KP KI KD TAB
  const [NOKI, setNOKI] = useState("");

  const [NOKP, setNOKP] = useState("");

  const [NOKD, setNOKD] = useState("");
  const [STKI, setSTKI] = useState("");
  const [STKP, setSTKP] = useState("");
  const [STKD, setSTKD] = useState("");
  const [LPKI, setLPKI] = useState("");
  const [LPKP, setLPKP] = useState("");
  const [LPKD, setLPKD] = useState("");
  // GENERATOR SETTINGS BATTERY TAB
  const [CELLS, setCELLS] = useState("");
  const [BATQTY, setBATQTY] = useState("");
  // GENERATOR SETTINGS GENERATOR TAB
  const [STSETPOINT, setSTSETPOINT] = useState("");
  const [MAXENGINEGENTEMP, setMAXENGINEGENTEMP] = useState("");

  const [FUELDIVISOR, setFUELDIVISOR] = useState("");
  // AUTOPILOT TAB
  const [NODE, setNODE] = useState("");
  const [BAUDE, setBAUDE] = useState("");
  const [dataStream, setDataStream] = useState([]);
  const [temp, setTemp] = React.useState("");
  const handleTempChange = (event) => {
    setTemp(event.target.value);
  };

  const indicatorOne = () => {
    const divElements = document.querySelectorAll(".liveDataLight");
    divElements.forEach((element) => {
      element.style.setProperty("background-color", "greenyellow");
      element.style.setProperty(
        "-webkit-box-shadow",
        "0px 0px 15px 5px rgba(46, 255, 46, 0.9)"
      );
      element.style.setProperty(
        "-moz-box-shadow",
        "0px 0px 15px 5px rgba(46, 255, 46, 0.9)"
      );
      element.style.setProperty("animation", "LiveData 1s infinite");
    });
  };

  useEffect(() => {
    const incomingData = async () => {
      const res = await axios.get("http://localhost:3002");
      const dataStream = res.data;
      var isValid = dataStream[0].hasOwnProperty("rectifierTemp");
      if (isValid) {
        setDataStream(dataStream);
      }
      if (isValid) {
        indicatorOne();
      }
    };
    incomingData();
  });

  const fetchData = () => {
    //setShowCelsius(false);
    const settings = io("ws://localhost:3005");
    settings.emit("read_config", 1);
    // MESSAGE 1:

    settings.on("NOKI", (data) => {
      // console.log(data, "<--- new server data KI ");
      setNOKI(data);
    });
    // MESSAGE 2:

    settings.on("NOKP", (data) => {
     setNOKP(data);
    
     //changeUnitToF()
     //changeUnit()
    });
    // MESSAGE 3:
    settings.on("NOKD", (data) => {
      // console.log(data, "<--- new server data KP");
      setNOKD(data);
    });
    // MESSAGE 4:
    settings.on("STKP", (data) => {
      // console.log(data, "<--- new server data KI ");
      setSTKP(data);
    });
    // MESSAGE 5:
    settings.on("STKI", (data) => {
      // console.log(data, "<--- new server data KP");
      setSTKI(data);
    });
    // MESSAGE 6:
    settings.on("STKD", (data) => {
      // console.log(data, "<--- new server data KP");
      setSTKD(data);
    });
    // MESSAGE 7:
    settings.on("LPKP", (data) => {
      // console.log(data, "<--- new server data KI ");
      setLPKP(data);
    });
    // MESSAGE 8:
    settings.on("LPKI", (data) => {
      // console.log(data, "<--- new server data KP");
      setLPKI(data);
    });
    // MESSAGE 9:
    settings.on("LPKD", (data) => {
      // console.log(data, "<--- new server data KP");
      setLPKD(data);
    });
    // MESSAGE 10:
    settings.on("CELLS", (data) => {
      // console.log(data, "<--- new server data KI ");
      setCELLS(data);
    });
    // MESSAGE 11:
    settings.on("BATQTY", (data) => {
      // console.log(data, "<--- new server data KP");
      setBATQTY(data);
    });
    // MESSAGE 12:
    settings.on("STSETPOINT", (data) => {
      // console.log(data, "<--- new server data KP");
      setSTSETPOINT(data);
    });
    // MESSAGE 13:
    settings.on("MAXENGINEGENTEMP", (data) => {
      // console.log(data, "<--- new server data KI ");
      setMAXENGINEGENTEMP(data);
    });

    // MESSAGE 14:
    settings.on("FUELDIVISOR", (data) => {
      // console.log(data, "<--- new server data KP");
      setFUELDIVISOR(data);
    });
    // MESSAGE 15:
    settings.on("NODE", (data) => {
      // console.log(data, "<--- new server data KP");
      setNODE(data);
    });
    // MESSAGE 16:
    settings.on("BAUDE", (data) => {
      // console.log(data, "<--- new server data KP");
      setBAUDE(data);
    });

    return () => {
      settings.disconnect();
    };
  };
  // console.log(NOKP, "<--- updated KP DATA")

  const resetFormFields = () => {
    setNOKI("");
    setNOKP("");
    setNOKD("");
    setSTKP("");
    setSTKD("");
    setSTKI("");
    setLPKI("");
    setLPKP("");
    setLPKD("");
    setSTSETPOINT("");
    setMAXENGINEGENTEMP("");
    setFUELDIVISOR("");
    setNODE("");
    setBAUDE("");
  };

  const sendUpdatedState = () => {
    const writeSettings = io.connect("ws://localhost:3007");

    const updateSettingsObject = {
      PMU_ID: 0,
      majorVersion: 2,
      minorVersion: 0,
      JSON_rate: 100,
      JSON_baud: 115200,
      log_rate: 200,
      droneCAN_nodeID: Number(NODE),
      droneCAN_baud: Number(BAUDE),
      Kp: Number(NOKP),
      Kd: Number(NOKD),
      Ki: Number(NOKI),
      lowPowerSetpoint: 4000,
      lowPowerKp: Number(LPKP),
      lowpowerKd: Number(LPKD),
      lowPowerKi: Number(LPKI),
      safeTempSetpoint: Number(STSETPOINT),
      safeTempKp: Number(STKP),
      safeTempKd: Number(STKD),
      safeTempKi: Number(STKI),
      batteryPacks: 0,
      batteryVoltage: 0,
      batteryCapcity_mAh: 0,
      batteryCells: 0,
      batteryDischarge_C: 0,
      batteryCharge_C: 0,
      batteryNum: 0,
      ECU_id: 2,
      fuelDivisor: Number(FUELDIVISOR),
    };

    console.log("Submitted Data after Write:", updateSettingsObject);

    writeSettings.emit("updatedSettingsObject", updateSettingsObject, (ack) => {
      console.log("Server acknowledged:", ack);
      writeSettings.disconnect();
      //reset form
      resetFormFields();
    });
  };

  // const handleNOKIChange = (e) => {
  //   const newValue = e.target.value;
  //   setNOKI(newValue);
  // };
  // useEffect(() => {
  //   console.log("NOKI updated:", NOKI);
  // }, [
  //   NOKI,
  //   NOKD,
  //   NOKP,
  //   LPKD,
  //   LPKD,
  //   LPKI,
  //   STSETPOINT,
  //   STKI,
  //   STKD,
  //   STKP,
  //   FUELDIVISOR,
  //   BAUDE,
  //   NODE,
  // ]);

  const [showCelsius, setShowCelsius] = useState(false);

  const changeUnit = () => {
    if (showCelsius === false) { //If in Fahrenheit first and hit celsius button
      //fetchData();
      setNOKP(((NOKP - 32) * 5) / 9);
      setShowCelsius(true);
    }
    else if(showCelsius === true){  //If in Celsius but celsius button hit again
      //fetchData();
      setNOKP(((NOKP - 32) * 5) / 9);
    } 
    else{     //In Fahrenheit mode
      //fetchData();
      setNOKP(NOKP);
      showCelsius(false);
    }


    console.log("showCelsius = " + showCelsius);
  };

  const changeUnitToF = () => {
    if (showCelsius === true) {  //If in Celsius and FAhrenheit mode hit
      setShowCelsius(false);
      fetchData()
      setNOKP(NOKP)
    }
    else{
      fetchData();
      setNOKP(NOKP);
    }

    console.log("showCelsius = " + showCelsius);
  };

  const [readOnce,setReadOnce] = useState(false);

  const readIncomingData = () => {
    
    if(readOnce === false){
      fetchData();
      setReadOnce(true);
    }
    else if (readOnce === true && showCelsius === true){
      //fetchData();
      changeUnit();
      console.log("Reached the Celsius Read Button Function....WTF");
    }
    else if (readOnce === true && showCelsius === false){
      changeUnitToF();
    }


  }


  return (
    <div>
      <div className="container-settings">
        <div className="icon-container">
          <div></div>
          <button onClick={readIncomingData} class="glowing-btn">
        
           Read
           
          </button>

          <button onClick={sendUpdatedState} class="glowing-btn">
           
            Write
           
          </button>

          {/* <IconSun className="mode-icon" id="sun-icon" onClick={lightMode} />
          <IconMoonStars
            className="mode-icon"
            id="moon-icon"
            onClick={nightMode}
          /> */}
        </div>

        <div className="settings-box" id="autopilot-box">
          <Tabs className="tab-structure">
            <div className="title-style">Autopilot</div>

            <TabList>
              <Tab>
                <AutoPilotIcon />
              </Tab>

              {/* <ComTab /> */}
            </TabList>

            <TabPanel>
              DroneCAN
              <form>
                <label>
                  Node:
                  <textarea
                    className="form-box"
                    type="text"
                    value={NODE}
                    onChange={(e) => setNODE(e.target.value)}
                  />
                </label>
                <br />
                <label>
                  Baude:
                  <textarea
                    className="form-box"
                    type="text"
                    value={BAUDE}
                    onChange={(e) => setBAUDE(e.target.value)}
                  />
                </label>
              </form>
            </TabPanel>
          </Tabs>
        </div>
        {/* *********** GUI ************** */}
        <div className="settings-box" id="gui-box">
          <Tabs className="tab-structure">
            <div className="title-style">GUI</div>
            <TabList>
              {/* <Tab>
                <GenBatteryIcon />
              </Tab>
              <Tab>
                <GenPidIcon />
              </Tab> */}
              <Tab>
                <GuiIcon />
              </Tab>

              {/* <ComTab /> */}
            </TabList>

            <TabPanel>
              Display Speed: {""}
              Pressure: Temperature Unit Conversion:
            </TabPanel>
          </Tabs>
        </div>
        {/* ************** generartor settings *************** */}
        {/* <div className="settings-box">Generator Settings</div> */}
        <div className="settings-box">
          <Tabs className="tab-structure">
            &nbsp;&nbsp;&nbsp;
            <TabList>
              <Tab>
                Battery
                <GenBatteryIcon />
              </Tab>

              {/* <ComTab /> */}
            </TabList>
            <TabPanel className="panel-style">
              Fw: <br></br>
              Type: LiPo<br></br>
              liFe "drop down menu?"<br></br>
              Cells:{CELLS}
              <br></br>
              Charge Balance Vmax:
              <br></br>
              Charge Balance Vmin:
              <br></br>
              MaxTemp:
              <br></br>
              Discharge Temp:
              <br></br>
              Battery Pack Quantity:{BATQTY}
              <br></br>
            </TabPanel>
            <TabPanel className="panel-style">
              {/* NORMAL OPERATION PID GAINS*/}

              <form>
                Normal Operation <br></br>
                <label>
                  Kp:
                  <textarea
                    className="form-box"
                    type="text"
                    value={NOKP}
                    onChange={(e) => setNOKP(e.target.value)}
                  />
                </label>
                <br />
                <label>
                  Ki:
                  <textarea
                    className="form-box"
                    type="text"
                    value={NOKI}
                    onChange={(e) => setNOKI(e.target.value)}
                  />
                </label>
                <br />
                <label>
                  Kd:
                  <textarea
                    className="form-box"
                    type="text"
                    value={NOKD}
                    onChange={(e) => setNOKD(e.target.value)}
                  />
                </label>
                <br />
                {/* Safe Temp PID Gains */}
                Safe Temp <br></br>
                <label>
                  Kp:
                  <textarea
                    className="form-box"
                    type="text"
                    value={STKP}
                    onChange={(e) => setSTKP(e.target.value)}
                  />
                </label>
                <br />
                <label>
                  Ki:
                  <textarea
                    className="form-box"
                    type="text"
                    value={STKI}
                    onChange={(e) => setSTKI(e.target.value)}
                  />
                </label>
                <br />
                <label>
                  Kd:
                  <textarea
                    className="form-box"
                    type="text"
                    value={STKD}
                    onChange={(e) => setSTKD(e.target.value)}
                  />
                </label>
                <br />
                {/* ****** Low Power ****** */}
                Low Power <br></br>
                <label>
                  Kp:
                  <textarea
                    className="form-box"
                    type="text"
                    value={LPKP}
                    onChange={(e) => setLPKP(e.target.value)}
                  />
                </label>
                <br />
                <label>
                  Ki:
                  <textarea
                    className="form-box"
                    type="text"
                    value={LPKI}
                    onChange={(e) => setLPKI(e.target.value)}
                  />
                </label>
                <br />
                <label>
                  Kd:
                  <textarea
                    className="form-box"
                    type="text"
                    value={LPKD}
                    onChange={(e) => setLPKD(e.target.value)}
                  />
                </label>
                <br />
                {/* <button type="submit" onClick={sendUpdatedState}>Write</button> */}
              </form>
            </TabPanel>
          </Tabs>
          <Tabs className="tab-structure">
            <div className="title-style">Generator Settings</div>
            <TabList>
              <Tab>
                PID Gains
                <GenPidIcon />
              </Tab>

              {/* <ComTab /> */}
            </TabList>

            <TabPanel className="panel-style">
              {/* NORMAL OPERATION PID GAINS*/}

              <form>
                Normal Operation <br></br>
                <label>
                  Kp:
                  <textarea
                    className="form-box"
                    type="text"
                    value={NOKP}
                    onChange={(e) => setNOKP(e.target.value)}
                  />
                </label>
                <br />
                <label>
                  Ki:
                  <textarea
                    className="form-box"
                    type="text"
                    value={NOKI}
                    onChange={(e) => setNOKI(e.target.value)}
                  />
                </label>
                <br />
                <label>
                  Kd:
                  <textarea
                    className="form-box"
                    type="text"
                    value={NOKD}
                    onChange={(e) => setNOKD(e.target.value)}
                  />
                </label>
                <br />
                {/* Safe Temp PID Gains */}
                Safe Temp <br></br>
                <label>
                  Kp:
                  <textarea
                    className="form-box"
                    type="text"
                    value={STKP}
                    onChange={(e) => setSTKP(e.target.value)}
                  />
                </label>
                <br />
                <label>
                  Ki:
                  <textarea
                    className="form-box"
                    type="text"
                    value={STKI}
                    onChange={(e) => setSTKI(e.target.value)}
                  />
                </label>
                <br />
                <label>
                  Kd:
                  <textarea
                    className="form-box"
                    type="text"
                    value={STKD}
                    onChange={(e) => setSTKD(e.target.value)}
                  />
                </label>
                <br />
                {/* ****** Low Power ****** */}
                Low Power <br></br>
                <label>
                  Kp:
                  <textarea
                    className="form-box"
                    type="text"
                    value={LPKP}
                    onChange={(e) => setLPKP(e.target.value)}
                  />
                </label>
                <br />
                <label>
                  Ki:
                  <textarea
                    className="form-box"
                    type="text"
                    value={LPKI}
                    onChange={(e) => setLPKI(e.target.value)}
                  />
                </label>
                <br />
                <label>
                  Kd:
                  <textarea
                    className="form-box"
                    type="text"
                    value={LPKD}
                    onChange={(e) => setLPKD(e.target.value)}
                  />
                </label>
                <br />
                {/* <button type="submit" onClick={sendUpdatedState}>Write</button> */}
              </form>
            </TabPanel>
          </Tabs>
          <Tabs className="tab-structure">
            <div> &nbsp; &nbsp;&nbsp;&nbsp; </div>
            <TabList>
              <Tab>
                Generator
                <GenGeneratorIcon />
              </Tab>

              {/* <ComTab /> */}
            </TabList>

            <TabPanel>
              <div id="generator-pmu-panel">
                <h4>GPMU</h4>
                <p className="paragraph-settings-boxes">
                  Firmware Major: <br></br> <br></br>Firmware Minor:<br></br>{" "}
                  <br></br> Date:
                </p>
                {/***** FORM HANDLING AREA FOR GEN SETTINGS GENERATOR *******/}

                <form>
                  <label>
                    <br></br>
                    Safe Temp Setpoint:<br></br>
                    <textarea
                      id="generator-text-box"
                      className="form-box"
                      type="text"
                      value={STSETPOINT}
                      onChange={(e) => setSTSETPOINT(e.target.value)}
                    />
                  </label>
                  <br />
                  <label>
                    Max Engine Generate Temp: <br></br>
                    <textarea
                      id="generator-text-box"
                      className="form-box"
                      type="text"
                      value={MAXENGINEGENTEMP}
                      onChange={(e) => setMAXENGINEGENTEMP(e.target.value)}
                    />
                  </label>
                  <h4>Engine</h4>
                  Firmware: Date: <br></br>
                  <label>
                    <br></br>
                    Fuel Divisor:<br></br>
                    <textarea
                      id="generator-text-box"
                      className="form-box"
                      type="text"
                      value={FUELDIVISOR}
                      onChange={(e) => setFUELDIVISOR(e.target.value)}
                    />
                  </label>
                  <br />
                  {/* Low Power PID Gains */}
                  {/* <button type="submit" onClick={sendUpdatedState}>Write</button> */}
                </form>
              </div>
            </TabPanel>
          </Tabs>
        </div>

        {dataStream.map((value) => (
          <ul key={value.id0} className="statistics">
            <li>Power Cycle:</li>
            <div className="stats-style"> {value.runIndex}</div>
            <li>Engine Run Time: </li>
            <div className="stats-style">{value.engineRunTime} </div>
            <li>System Active: </li>
            <div className="stats-style"> {value.systemActive_run}</div>
            <li>Power Consumed: </li>
            <div className="stats-style"> {value.powerConsumed_run}</div>
            <li>Power Generated: </li>
            <div className="stats-style">{value.powerGenerated_run}</div>
            <li>Total Starts:</li>
            <div className="stats-style"> {value.totalStarts_run}</div>
          </ul>
        ))}
          <div className="converter-box-settings">UNIT &nbsp;CONVERTER</div>
        <ToggleButtonGroup 
          className="unit-button-settings"
          color="primary"
          value={temp}
          exclusive
          onChange={handleTempChange}
          aria-label="Platform"
        >
          <ToggleButton value="celsius" onClick={changeUnit}>
            &deg;CelSius
          </ToggleButton>
          <ToggleButton value="fahrenheit" onClick={changeUnitToF}>
            &deg;Fahrenheit
          </ToggleButton>
        </ToggleButtonGroup>
      </div>

      <div className="data-indicators">
        {/* <div className="indicator-title">: Live Data Stream</div>  */}

        <div className="liveDataLight"> </div>
        <div id="dataLiveStream">Data Live Stream</div>
      
      </div>
    </div>
  );
};

export default SettingsCarousel;
