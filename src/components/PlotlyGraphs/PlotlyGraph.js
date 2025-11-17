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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import FormLabel from "@mui/material/FormLabel";
import { borderRadius } from "@mui/system";
import GraphComponentTwo from "./GraphComponentTwo";
import GraphComponentThree from "./GraphComponentThree";
import GraphComponentFour from "./GraphComponentFour";
import GraphComponentOne from "./GraphComponentOne";

const PlotlyGraph = () => {

  return (
    <div className="graphs-container">
      <div className="left">
      <div id="graph-1">
        <GraphComponentOne />
      </div>
   
      {/* <div id="graph-2">
        <GraphComponentTwo />
      </div> */}
      {/* </div>
      <div className="right">
      <div id="graph-3">
        <GraphComponentThree />
      </div>
      <div id="graph-4">
        <GraphComponentFour />
      </div> */}

      </div>
      

      <br></br>
    </div>
  );
};

export default PlotlyGraph;
