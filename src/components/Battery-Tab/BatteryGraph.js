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
import Box from "@mui/material/Box";

import FormLabel from "@mui/material/FormLabel";

const BatteryGraph = () => {
  const [plotData, setPlotData] = useState([]);
  const [b1c0, setB1c0] = useState([]);
  useEffect(() => {
    const mapData = async () => {
      const res = await axios.get("http://localhost:3002");
      const plotData = res.data;
      var isValid = plotData[0].hasOwnProperty("b1c0");
      if (isValid) {
        setPlotData(plotData);
      }
    };
    mapData();
  });
  //////////////////////////////////////////

  const [c0Color, setC0color] = useState("");
  const [c1Color, setC1color] = useState("");
  const [c2Color, setC2color] = useState("");
  const [c3Color, setC3color] = useState("");
  const [c4Color, setC4color] = useState("");
  const [c5Color, setC5color] = useState("");
  const [c6Color, setC6color] = useState("");
  const [c7Color, setC7color] = useState("");
  const [c8Color, setC8color] = useState("");
  const [c9Color, setC9color] = useState("");
  const [c10Color, setC10color] = useState("");
  const [c11Color, setC11color] = useState("");
  const [c12Color, setC12color] = useState("");
  const [c13Color, setC13color] = useState("");
  const [c14Color, setC14color] = useState("");
  const [c15Color, setC15color] = useState("");
  const [c16Color, setC16color] = useState("");
  const [c17Color, setC17color] = useState("");
  const [c18Color, setC18color] = useState("");
  const [c19Color, setC19color] = useState("");
  const [c20Color, setC20color] = useState("");
  const [c21Color, setC21color] = useState("");
  const [c22Color, setC22color] = useState("");
  const [c23Color, setC23color] = useState("");
  const [c24Color, setC24color] = useState("");
  const [c25Color, setC25color] = useState("");
  const [c26Color, setC26color] = useState("");
  const [c27Color, setC27color] = useState("");

//cell 0
  useLayoutEffect(() => {
    plotData.map((value) => {
      const colorChange = () => {
        if (value.b1c0  >= 3.2 && value.b1c0 <= 4.2) {
          setC0color("39FF14");
          console.log("voltage is above 3.2 volts", value.b1c0);
        } else if (value.b1c0 <= 3.2 || value.b1c0  >= 4.2) {
          setC0color("#FF3131");
        }
      };
      colorChange();
    });
  });
  /////////////// cell 1
  useLayoutEffect(() => {
    plotData.map((value) => {
      const colorChange = () => {
        if (value.b1c1 >= 3.2 && value.b1c1 <= 4.2) {
          setC1color("39FF14");
          console.log("voltage is above 3.2 volts", value.b1c0);
        } else if (value.b1c1 <= 3.2 || value.b1c1 >= 4.2) {
          setC1color("#FF3131");
        }
      };
      colorChange();
    });
  });

  ///////// 2
  useLayoutEffect(() => {
    plotData.map((value) => {
      const colorChange = () => {
        if (value.b1c2 >= 3.2 && value.b1c2 <= 4.2) {
          setC2color("39FF14");
          console.log("voltage is above 3.2 volts", value.b1c0);
        } else if (value.b1c2 <= 3.2 || value.b1c2 >= 4.2) {
          setC2color("#FF3131");
        }
      };
      colorChange();
    });
  });

  ///// 3
  useLayoutEffect(() => {
    plotData.map((value) => {
      const colorChange = () => {
        if (value.b1c3 >= 3.2 && value.b1c3 <= 4.2) {
          setC3color("39FF14");
          console.log("voltage is above 3.2 volts", value.b1c0);
        } else if (value.b1c3 <= 3.2 || value.b1c3 >= 4.2) {
          setC3color("#FF3131");
        }
      };
      colorChange();
    });
  });

  /////////////4 -- start here to re-factor
  useLayoutEffect(() => {
    plotData.map((value) => {
      const colorChange = () => {
        if (value.b1c4 >= 3.2 && value.b1c4 <= 4.2) {
          setC4color("39FF14");
          console.log("voltage is above 3.2 volts", value.b1c0);
        } else if (value.b1c4 <= 3.2 || value.b1c4 >= 4.2) {
          setC4color("#FF3131");
        }
      };
      colorChange();
    });
  });
  ////////////////// 5
  useLayoutEffect(() => {
    plotData.map((value) => {
      const colorChange = () => {
        if (value.b1c5 >= 3.2 && value.b1c5 <= 4.2) {
          setC5color("39FF14");
          console.log("voltage is above 3.2 volts", value.b1c0);
        } else if (value.b1c5 <= 3.2 || value.b1c5 >= 4.2) {
          setC5color("#FF3131");
        }
      };
      colorChange();
    });
  });

  ////////////////////////6

  useLayoutEffect(() => {
    plotData.map((value) => {
      const colorChange = () => {
        if (value.b1c6 >= 3.2 && value.b1c6 <= 4.2) {
          setC6color("39FF14");
          console.log("voltage is above 3.2 volts", value.b1c0);
        } else if (value.b1c6 <= 3.2 || value.b1c6 >= 4.2) {
          setC6color("#FF3131");
        }
      };
      colorChange();
    });
  });
  //////////////////////////////7
  useLayoutEffect(() => {
    plotData.map((value) => {
      const colorChange = () => {
        if (value.b1c7 >= 3.2 && value.b1c7 <= 4.2) {
          setC7color("39FF14");
          console.log("voltage is above 3.2 volts", value.b1c0);
        } else if (value.b1c7 <= 3.2 || value.b1c7 >= 4.2) {
          setC7color("#FF3131");
        }
      };
      colorChange();
    });
  });
  //////////////////////////////////8

  useLayoutEffect(() => {
    plotData.map((value) => {
      const colorChange = () => {
        if (value.b1c8 >= 3.2 && value.b1c8 <= 4.2) {
          setC8color("39FF14");
          console.log("voltage is above 3.2 volts", value.b1c0);
        } else if (value.b1c8 <= 3.2 || value.b1c8 >= 4.2) {
          setC8color("#FF3131");
        }
      };
      colorChange();
    });
  });
  //////////////////////////////9

  useLayoutEffect(() => {
    plotData.map((value) => {
      const colorChange = () => {
        if (value.b1c9 >= 3.2 && value.b1c9 <= 4.2) {
          setC9color("39FF14");
          console.log("voltage is above 3.2 volts", value.b1c0);
        } else if (value.b1c9 <= 3.2 || value.b1c9 >= 4.2) {
          setC9color("#FF3131");
        }
      };
      colorChange();
    });
  });
  ///////////////////////////////10

  useLayoutEffect(() => {
    plotData.map((value) => {
      const colorChange = () => {
        if (value.b1c10 >= 3.2 && value.b1c10 <= 4.2) {
          setC10color("39FF14");
          console.log("voltage is above 3.2 volts", value.b1c0);
        } else if (value.b1c10 <= 3.2 || value.b1c10 >= 4.2) {
          setC10color("#FF3131");
        }
      };
      colorChange();
    });
  });

  ////////////////////////////////////11
  useLayoutEffect(() => {
    plotData.map((value) => {
      const colorChange = () => {
        if (value.b1c11 >= 3.2 && value.b1c11 <= 4.2) {
          setC11color("39FF14");
          console.log("voltage is above 3.2 volts", value.b1c0);
        } else if (value.b1c11 <= 3.2 || value.b1c11 >= 4.2) {
          setC11color("#FF3131");
        }
      };
      colorChange();
    });
  });
  ///////////// 12
  useLayoutEffect(() => {
    plotData.map((value) => {
      const colorChange = () => {
        if (value.b1c12 >= 3.2 && value.b1c12 <= 4.2) {
          setC12color("39FF14");
          console.log("voltage is above 3.2 volts", value.b1c0);
        } else if (value.b1c12 <= 3.2 || value.b1c12 >= 4.2) {
          setC12color("#FF3131");
        }
      };
      colorChange();
    });
  });

  /////////////////13

  useLayoutEffect(() => {
    plotData.map((value) => {
      const colorChange = () => {
        if (value.b1c13 >= 3.2 && value.b1c13 <= 4.2) {
          setC13color("39FF14");
          console.log("voltage is above 3.2 volts", value.b1c0);
        } else if (value.b1c13 <= 3.2 || value.b1c13 >= 4.2) {
          setC13color("#FF3131");
        }
      };
      colorChange();
    });
  });
  /////////////////14

  useLayoutEffect(() => {
    plotData.map((value) => {
      const colorChange = () => {
        if (value.b1c14 >= 3.2 && value.b1c14 <= 4.2) {
          setC14color("39FF14");
          console.log("voltage is above 3.2 volts", value.b1c0);
        } else if (value.b1c14 <= 3.2 || value.b1c14 >= 4.2) {
          setC14color("#FF3131");
        }
      };
      colorChange();
    });
  });
  /////////////////////15

  useLayoutEffect(() => {
    plotData.map((value) => {
      const colorChange = () => {
        if (value.b1c15 >= 3.2 && value.b1c15 <= 4.2) {
          setC15color("39FF14");
          console.log("voltage is above 3.2 volts", value.b1c0);
        } else if (value.b1c15 <= 3.2 || value.b1c15 >= 4.2) {
          setC15color("#FF3131");
        }
      };
      colorChange();
    });
  });
  ///////////////////16
  useLayoutEffect(() => {
    plotData.map((value) => {
      const colorChange = () => {
        if (value.b1c16 >= 3.2 && value.b1c16 <= 4.2) {
          setC16color("39FF14");
          console.log("voltage is above 3.2 volts", value.b1c0);
        } else if (value.b1c16 <= 3.2 || value.b1c16 >= 4.2) {
          setC16color("#FF3131");
        }
      };
      colorChange();
    });
  });
  /////////////////17

  useLayoutEffect(() => {
    plotData.map((value) => {
      const colorChange = () => {
        if (value.b1c17 >= 3.2 && value.b1c17 <= 4.2) {
          setC17color("39FF14");
          console.log("voltage is above 3.2 volts", value.b1c0);
        } else if (value.b1c17 <= 3.2 || value.b1c17 >= 4.2) {
          setC17color("#FF3131");
        }
      };
      colorChange();
    });
  });

  ///////////////////////18

  useLayoutEffect(() => {
    plotData.map((value) => {
      const colorChange = () => {
        if (value.b1c18 >= 3.2 && value.b1c18 <= 4.2) {
          setC18color("39FF14");
        } else if (value.b1c18 <= 3.2 || value.b1c18 >= 4.2) {
          setC18color("#FF3131");
        }
      };
      colorChange();
    });
  });
  /////19

  useLayoutEffect(() => {
    plotData.map((value) => {
      const colorChange = () => {
        if (value.b1c19 >= 3.2 && value.b1c19 <= 4.2) {
          setC19color("39FF14");
          console.log("voltage is above 3.2 volts", value.b1c0);
        } else if (value.b1c19 <= 3.2 || value.b1c19 >= 4.2) {
          setC19color("#FF3131");
        }
      };
      colorChange();
    });
  });
  ////////////////////////20

  useLayoutEffect(() => {
    plotData.map((value) => {
      const colorChange = () => {
        if (value.b1c20 >= 3.2 && value.b1c20 <= 4.2) {
          setC20color("39FF14");
          console.log("voltage is above 3.2 volts", value.b1c0);
        } else if (value.b1c20 <= 3.2 || value.b1c20 >= 4.2) {
          setC20color("#FF3131");
        }
      };
      colorChange();
    });
  });
  //////////////////////// 21
  useLayoutEffect(() => {
    plotData.map((value) => {
      const colorChange = () => {
        if (value.b1c21 >= 3.2 && value.b1c21 <= 4.2) {
          setC21color("39FF14");
          console.log("voltage is above 3.2 volts", value.b1c0);
        } else if (value.b1c21 <= 3.2 || value.b1c21 >= 4.2) {
          setC21color("#FF3131");
        }
      };
      colorChange();
    });
  });
  /////////////////////////22
  useLayoutEffect(() => {
    plotData.map((value) => {
      const colorChange = () => {
        if (value.b1c22 >= 3.2 && value.b1c22 <= 4.2) {
          setC22color("39FF14");
          console.log("voltage is above 3.2 volts", value.b1c0);
        } else if (value.b1c22 <= 3.2 || value.b1c22 >= 4.2) {
          setC22color("#FF3131");
        }
      };
      colorChange();
    });
  });
  /////////////////////////23

  useLayoutEffect(() => {
    plotData.map((value) => {
      const colorChange = () => {
        if (value.b1c23 >= 3.2 && value.b1c23 <= 4.2) {
          setC23color("39FF14");
        } else if (value.b1c23 <= 3.2 || value.b1c23 >= 4.2) {
          setC23color("#FF3131");
        }
      };
      colorChange();
    });
  });
  ///////////////////////////24

  useLayoutEffect(() => {
    plotData.map((value) => {
      const colorChange = () => {
        if (value.b1c24 >= 3.2 && value.b1c24 <= 4.2) {
          setC24color("39FF14");
          console.log("voltage is above 3.2 volts", value.b1c0);
        } else if (value.b1c24 <= 3.2 || value.b1c24 >= 4.2) {
          setC24color("#FF3131");
        }
      };
      colorChange();
    });
  });
  //////////////////////////25
  useLayoutEffect(() => {
    plotData.map((value) => {
      const colorChange = () => {
        if (value.b1c25 >= 3.2 && value.b1c25 <= 4.2) {
          setC25color("39FF14");
          console.log("voltage is above 3.2 volts", value.b1c0);
        } else if (value.b1c25 <= 3.2 || value.b1c25 >= 4.2) {
          setC25color("#FF3131");
        }
      };
      colorChange();
    });
  });
  //////////////////////////26
  useLayoutEffect(() => {
    plotData.map((value) => {
      const colorChange = () => {
        if (value.b1c26 >= 3.2 && value.b1c26 <= 4.2) {
          setC26color("39FF14");
          console.log("voltage is above 3.2 volts", value.b1c0);
        } else if (value.b1c26 <= 3.2 || value.b1c26 >= 4.2) {
          setC26color("#FF3131");
        }
      };
      colorChange();
    });
  });
  //////////////////////////27
  useLayoutEffect(() => {
    plotData.map((value) => {
      const colorChange = () => {
        if (value.b1c27 >= 3.2 && value.b1c27 <= 4.2) {
          setC27color("39FF14");
          console.log("voltage is above 3.2 volts", value.b1c0);
        } else if (value.b1c27 <= 3.2 || value.b1c27 >= 4.2) {
          setC27color("#FF3131");
        }
      };
      colorChange();
    });
  });
  //////////////////// BATTERY TWO COLOUR CODE STARTS HERE////////////
  //cell 0
  useLayoutEffect(() => {
    plotData.map((value) => {
      const colorChange = () => {
        if (value.b2c0  >= 3.2 && value.b2c0 <= 4.2) {
          setC0color("39FF14");
          console.log("voltage is above 3.2 volts", value.b2c0);
        } else if (value.b2c0 <= 3.2 || value.b2c0  >= 4.2) {
          setC0color("#FF3131");
        }
      };
      colorChange();
    });
  });
  /////////////// cell 1
  useLayoutEffect(() => {
    plotData.map((value) => {
      const colorChange = () => {
        if (value.b2c1 >= 3.2 && value.b2c1 <= 4.2) {
          setC1color("39FF14");
          console.log("voltage is above 3.2 volts", value.b2c0);
        } else if (value.b2c1 <= 3.2 || value.b2c1 >= 4.2) {
          setC1color("#FF3131");
        }
      };
      colorChange();
    });
  });

  ///////// 2
  useLayoutEffect(() => {
    plotData.map((value) => {
      const colorChange = () => {
        if (value.b2c2 >= 3.2 && value.b2c2 <= 4.2) {
          setC2color("39FF14");
          console.log("voltage is above 3.2 volts", value.b2c0);
        } else if (value.b2c2 <= 3.2 || value.b2c2 >= 4.2) {
          setC2color("#FF3131");
        }
      };
      colorChange();
    });
  });

  ///// 3
  useLayoutEffect(() => {
    plotData.map((value) => {
      const colorChange = () => {
        if (value.b2c3 >= 3.2 && value.b2c3 <= 4.2) {
          setC3color("39FF14");
          console.log("voltage is above 3.2 volts", value.b2c0);
        } else if (value.b2c3 <= 3.2 || value.b2c3 >= 4.2) {
          setC3color("#FF3131");
        }
      };
      colorChange();
    });
  });

  /////////////4 -- start here to re-factor
  useLayoutEffect(() => {
    plotData.map((value) => {
      const colorChange = () => {
        if (value.b2c4 >= 3.2 && value.b2c4 <= 4.2) {
          setC4color("39FF14");
          console.log("voltage is above 3.2 volts", value.b2c0);
        } else if (value.b2c4 <= 3.2 || value.b2c4 >= 4.2) {
          setC4color("#FF3131");
        }
      };
      colorChange();
    });
  });
  ////////////////// 5
  useLayoutEffect(() => {
    plotData.map((value) => {
      const colorChange = () => {
        if (value.b2c5 >= 3.2 && value.b2c5 <= 4.2) {
          setC5color("39FF14");
          console.log("voltage is above 3.2 volts", value.b2c0);
        } else if (value.b2c5 <= 3.2 || value.b2c5 >= 4.2) {
          setC5color("#FF3131");
        }
      };
      colorChange();
    });
  });

  ////////////////////////6

  useLayoutEffect(() => {
    plotData.map((value) => {
      const colorChange = () => {
        if (value.b2c6 >= 3.2 && value.b2c6 <= 4.2) {
          setC6color("39FF14");
          console.log("voltage is above 3.2 volts", value.b2c0);
        } else if (value.b2c6 <= 3.2 || value.b2c6 >= 4.2) {
          setC6color("#FF3131");
        }
      };
      colorChange();
    });
  });
  //////////////////////////////7
  useLayoutEffect(() => {
    plotData.map((value) => {
      const colorChange = () => {
        if (value.b2c7 >= 3.2 && value.b2c7 <= 4.2) {
          setC7color("39FF14");
          console.log("voltage is above 3.2 volts", value.b2c0);
        } else if (value.b2c7 <= 3.2 || value.b2c7 >= 4.2) {
          setC7color("#FF3131");
        }
      };
      colorChange();
    });
  });
  //////////////////////////////////8

  useLayoutEffect(() => {
    plotData.map((value) => {
      const colorChange = () => {
        if (value.b2c8 >= 3.2 && value.b2c8 <= 4.2) {
          setC8color("39FF14");
          console.log("voltage is above 3.2 volts", value.b2c0);
        } else if (value.b2c8 <= 3.2 || value.b2c8 >= 4.2) {
          setC8color("#FF3131");
        }
      };
      colorChange();
    });
  });
  //////////////////////////////9

  useLayoutEffect(() => {
    plotData.map((value) => {
      const colorChange = () => {
        if (value.b2c9 >= 3.2 && value.b2c9 <= 4.2) {
          setC9color("39FF14");
          console.log("voltage is above 3.2 volts", value.b2c0);
        } else if (value.b2c9 <= 3.2 || value.b2c9 >= 4.2) {
          setC9color("#FF3131");
        }
      };
      colorChange();
    });
  });
  ///////////////////////////////10

  useLayoutEffect(() => {
    plotData.map((value) => {
      const colorChange = () => {
        if (value.b2c10 >= 3.2 && value.b2c10 <= 4.2) {
          setC10color("39FF14");
          console.log("voltage is above 3.2 volts", value.b2c0);
        } else if (value.b2c10 <= 3.2 || value.b2c10 >= 4.2) {
          setC10color("#FF3131");
        }
      };
      colorChange();
    });
  });

  ////////////////////////////////////11
  useLayoutEffect(() => {
    plotData.map((value) => {
      const colorChange = () => {
        if (value.b2c11 >= 3.2 && value.b2c11 <= 4.2) {
          setC11color("39FF14");
          console.log("voltage is above 3.2 volts", value.b2c0);
        } else if (value.b2c11 <= 3.2 || value.b2c11 >= 4.2) {
          setC11color("#FF3131");
        }
      };
      colorChange();
    });
  });
  ///////////// 12
  useLayoutEffect(() => {
    plotData.map((value) => {
      const colorChange = () => {
        if (value.b2c12 >= 3.2 && value.b2c12 <= 4.2) {
          setC12color("39FF14");
          console.log("voltage is above 3.2 volts", value.b2c0);
        } else if (value.b2c12 <= 3.2 || value.b2c12 >= 4.2) {
          setC12color("#FF3131");
        }
      };
      colorChange();
    });
  });

  /////////////////13

  useLayoutEffect(() => {
    plotData.map((value) => {
      const colorChange = () => {
        if (value.b2c13 >= 3.2 && value.b2c13 <= 4.2) {
          setC13color("39FF14");
          console.log("voltage is above 3.2 volts", value.b2c0);
        } else if (value.b2c13 <= 3.2 || value.b2c13 >= 4.2) {
          setC13color("#FF3131");
        }
      };
      colorChange();
    });
  });
  /////////////////14

  useLayoutEffect(() => {
    plotData.map((value) => {
      const colorChange = () => {
        if (value.b2c14 >= 3.2 && value.b2c14 <= 4.2) {
          setC14color("39FF14");
          console.log("voltage is above 3.2 volts", value.b2c0);
        } else if (value.b2c14 <= 3.2 || value.b2c14 >= 4.2) {
          setC14color("#FF3131");
        }
      };
      colorChange();
    });
  });
  /////////////////////15

  useLayoutEffect(() => {
    plotData.map((value) => {
      const colorChange = () => {
        if (value.b2c15 >= 3.2 && value.b2c15 <= 4.2) {
          setC15color("39FF14");
          console.log("voltage is above 3.2 volts", value.b2c0);
        } else if (value.b2c15 <= 3.2 || value.b2c15 >= 4.2) {
          setC15color("#FF3131");
        }
      };
      colorChange();
    });
  });
  ///////////////////16
  useLayoutEffect(() => {
    plotData.map((value) => {
      const colorChange = () => {
        if (value.b2c16 >= 3.2 && value.b2c16 <= 4.2) {
          setC16color("39FF14");
          console.log("voltage is above 3.2 volts", value.b2c0);
        } else if (value.b2c16 <= 3.2 || value.b2c16 >= 4.2) {
          setC16color("#FF3131");
        }
      };
      colorChange();
    });
  });
  /////////////////17

  useLayoutEffect(() => {
    plotData.map((value) => {
      const colorChange = () => {
        if (value.b2c17 >= 3.2 && value.b2c17 <= 4.2) {
          setC17color("39FF14");
          console.log("voltage is above 3.2 volts", value.b2c0);
        } else if (value.b2c17 <= 3.2 || value.b2c17 >= 4.2) {
          setC17color("#FF3131");
        }
      };
      colorChange();
    });
  });

  ///////////////////////18

  useLayoutEffect(() => {
    plotData.map((value) => {
      const colorChange = () => {
        if (value.b2c18 >= 3.2 && value.b2c18 <= 4.2) {
          setC18color("39FF14");
        } else if (value.b2c18 <= 3.2 || value.b2c18 >= 4.2) {
          setC18color("#FF3131");
        }
      };
      colorChange();
    });
  });
  /////19

  useLayoutEffect(() => {
    plotData.map((value) => {
      const colorChange = () => {
        if (value.b2c19 >= 3.2 && value.b2c19 <= 4.2) {
          setC19color("39FF14");
          console.log("voltage is above 3.2 volts", value.b2c0);
        } else if (value.b2c19 <= 3.2 || value.b2c19 >= 4.2) {
          setC19color("#FF3131");
        }
      };
      colorChange();
    });
  });
  ////////////////////////20

  useLayoutEffect(() => {
    plotData.map((value) => {
      const colorChange = () => {
        if (value.b2c20 >= 3.2 && value.b2c20 <= 4.2) {
          setC20color("39FF14");
          console.log("voltage is above 3.2 volts", value.b2c0);
        } else if (value.b2c20 <= 3.2 || value.b2c20 >= 4.2) {
          setC20color("#FF3131");
        }
      };
      colorChange();
    });
  });
  //////////////////////// 21
  useLayoutEffect(() => {
    plotData.map((value) => {
      const colorChange = () => {
        if (value.b2c21 >= 3.2 && value.b2c21 <= 4.2) {
          setC21color("39FF14");
          console.log("voltage is above 3.2 volts", value.b2c0);
        } else if (value.b2c21 <= 3.2 || value.b2c21 >= 4.2) {
          setC21color("#FF3131");
        }
      };
      colorChange();
    });
  });
  /////////////////////////22
  useLayoutEffect(() => {
    plotData.map((value) => {
      const colorChange = () => {
        if (value.b2c22 >= 3.2 && value.b2c22 <= 4.2) {
          setC22color("39FF14");
          console.log("voltage is above 3.2 volts", value.b2c0);
        } else if (value.b2c22 <= 3.2 || value.b2c22 >= 4.2) {
          setC22color("#FF3131");
        }
      };
      colorChange();
    });
  });
  /////////////////////////23

  useLayoutEffect(() => {
    plotData.map((value) => {
      const colorChange = () => {
        if (value.b2c23 >= 3.2 && value.b2c23 <= 4.2) {
          setC23color("39FF14");
        } else if (value.b2c23 <= 3.2 || value.b2c23 >= 4.2) {
          setC23color("#FF3131");
        }
      };
      colorChange();
    });
  });
  ///////////////////////////24

  useLayoutEffect(() => {
    plotData.map((value) => {
      const colorChange = () => {
        if (value.b2c24 >= 3.2 && value.b2c24 <= 4.2) {
          setC24color("39FF14");
          console.log("voltage is above 3.2 volts", value.b2c0);
        } else if (value.b2c24 <= 3.2 || value.b2c24 >= 4.2) {
          setC24color("#FF3131");
        }
      };
      colorChange();
    });
  });
  //////////////////////////25
  useLayoutEffect(() => {
    plotData.map((value) => {
      const colorChange = () => {
        if (value.b2c25 >= 3.2 && value.b2c25 <= 4.2) {
          setC25color("39FF14");
          console.log("voltage is above 3.2 volts", value.b2c0);
        } else if (value.b2c25 <= 3.2 || value.b2c25 >= 4.2) {
          setC25color("#FF3131");
        }
      };
      colorChange();
    });
  });
  //////////////////////////26
  useLayoutEffect(() => {
    plotData.map((value) => {
      const colorChange = () => {
        if (value.b2c26 >= 3.2 && value.b2c26 <= 4.2) {
          setC26color("39FF14");
          console.log("voltage is above 3.2 volts", value.b2c0);
        } else if (value.b2c26 <= 3.2 || value.b2c26 >= 4.2) {
          setC26color("#FF3131");
        }
      };
      colorChange();
    });
  });
  //////////////////////////27
  useLayoutEffect(() => {
    plotData.map((value) => {
      const colorChange = () => {
        if (value.b2c27 >= 3.2 && value.b2c27 <= 4.2) {
          setC27color("39FF14");
          console.log("voltage is above 3.2 volts", value.b2c0);
        } else if (value.b2c27 <= 3.2 || value.b2c27 >= 4.2) {
          setC27color("#FF3131");
        }
      };
      colorChange();
    });
  });
  return (
    <div className="battery-container">
      <div className="battery-one-plot">
        {plotData.map((value) => (
          <Plot
            data={[
              {
                x: [''],
                y: [1,, 3.2, 4.2, 6],
                type: "scatter",
                mode: "none",
                showlegend: false,
                name: "Cell One",
                visible: true,
              },


              ////////////// spoof data example sin wave //////////
              // {
              //   x: [0],
              //   type: "bar",
              
              //   y: [value.b1c0],
              //   marker: { color: c0Color },
              //   name:  "Cell 0" + "-"+ value.b1c0 ,
              //   text:3+2*Math.sin(timeMillisecond()/1000)
              // },
              //////////////////////////////////////////////////

              ////////////////////////////// plots start here //////////////////////////////////////
              {
                x: [0],
                type: "bar",
              
                y: [value.b1c0],
                marker: { color: c0Color },
                name:  "Cell 0" + ":"+ Math.floor(value.b1c0*100)/100 ,
                text: Math.floor(value.b1c0*100)/100,
              },
              {
                type: "bar",
                x: [1],
                y: [value.b1c1],
                marker: { color: c1Color },
                name: "Cell 1" + ":"+ Math.floor(value.b1c1*100)/100 ,
                text: Math.floor(value.b1c1*100)/100,
              },
              {
                type: "bar",
                x: [2],
                y: [value.b1c2],
                marker: { color: c2Color },
                standoff: { text: "Cell 1" },
                name:  "Cell 2" + ":"+ Math.floor(value.b1c2*100)/100,
                text: Math.floor(value.b1c2*100)/100,
              },
              {
                type: "bar",
                x: [3],
                y: [value.b1c3],
                marker: { color: c3Color },
                name: "Cell 3" + ":"+ Math.floor(value.b1c3*100)/100 ,
                text: Math.floor(value.b1c3*100)/100,
              },
              {
                type: "bar",
                x: [4],
                y: [value.b1c4],
                marker: { color: c4Color },
                name:  "Cell 0" + ":"+ Math.floor(value.b1c4*100)/100 ,
                text: Math.floor(value.b1c4*100)/100,
              },
              {
                type: "bar",
                x: [5],
                y: [value.b1c5],
                marker: { color: c5Color },
                name:  "Cell 5" + ":"+ Math.floor(value.b1c5*100)/100
                   ,
                text: Math.floor(value.b1c5*100)/100,
              },
              {
                type: "bar",
                x: [6],
                y: [value.b1c6],
                marker: { color: c6Color },
                name:  "Cell 6" + ":"+ Math.floor(value.b1c6*100)/100 ,
                text:Math.floor(value.b1c6*100)/100,
              },
              {
                type: "bar",
                x: [7],
                y: [value.b1c7],
                marker: { color: c7Color },
                name:  "Cell 7" + ":"+ Math.floor( value.b1c7 *100)/100,
                text: Math.floor(value.b1c7*100)/100,
              },
              {
                type: "bar",
                x: [8],
                y: [value.b1c8],
                marker: { color: c8Color },
                name:  "Cell 8" + ":"+ Math.floor( value.b1c8 *100)/100,
                text:Math.floor(value.b1c8*100)/100,
              },
              {
                type: "bar",
                x: [9],
                y: [value.b1c9],
                marker: { color: c9Color },
                name:  "Cell 9" + ":"+ Math.floor(value.b1c9*100)/100 ,
                text:Math.floor(value.b1c9*100)/100,
              },
              {
                type: "bar",
                x: [10],
                y: [value.b1c10],
                marker: { color: c10Color },
                name:  "Cell 10" + ":"+ Math.floor(value.b1c10*100)/100 ,
                text: Math.floor(value.b1c10*100)/100,
              },
              {
                type: "bar",
                x: [11],
                y: [value.b1c11],
                marker: { color: c11Color },
                name:  "Cell 11" + ":"+ Math.floor(value.b1c11*100)/100 ,
                text: Math.floor(value.b1c11*100)/100,
              },
              {
                type: "bar",
                x: [12],
                y: [value.b1c12],
                marker: { color: c12Color },
                name:  "Cell 12" + ":"+ Math.floor(value.b1c12*100)/100 ,
                text:Math.floor(value.b1c12*100)/100,
              },
              {
                type: "bar",
                x: [13],
                y: [value.b1c13],
                marker: { color: c13Color },
                name:  "Cell 13" + ":"+ Math.floor(value.b1c13 *100)/100,
                text: Math.floor(value.b1c13*100)/100,
              },
              {
                type: "bar",
                x: [14],
                y: [value.b1c14],
                marker: { color: c14Color },
                name:  "Cell 14" + ":"+ Math.floor(value.b1c14 *100)/100,
                text: Math.floor(value.b1c14*100)/100,
              },
              {
                type: "bar",
                x: [15],
                y: [value.b1c15],
                marker: { color: c15Color },
                name:  "Cell 15" + ":"+ Math.floor(value.b1c15*100)/100 ,
                text: Math.floor(value.b1c15*100)/100,
              },
              {
                type: "bar",
                x: [16],
                y: [value.b1c16],
                marker: { color: c16Color },
                name:  "Cell 16" + ":"+ Math.floor(value.b1c16*100)/100 ,
                text: Math.floor(value.b1c16*100)/100,
              },
              {
                type: "bar",
                x: [17],
                y: [value.b1c17],
                marker: { color: c17Color },
                name:  "Cell 17" + ":"+ Math.floor(value.b1c17*100)/100 ,
                text: Math.floor(value.b1c17*100)/100,
              },
              {
                type: "bar",
                x: [18],
                y: [value.b1c18],
                marker: { color: c18Color },
                name:  "Cell 18" + ":"+ Math.floor(value.b1c18*100)/100 ,
                text: Math.floor(value.b1c18*100)/100,
              },
              {
                type: "bar",
                x: [19],
                y: [value.b1c19],
                marker: { color: c19Color },
                name:  "Cell 19" + ":"+ Math.floor(value.b1c19*100)/100 ,
                text: Math.floor(value.b1c19*100)/100,
              },
              {
                type: "bar",
                x: [20],
                y: [value.b1c20],
                marker: { color: c20Color },
                name:  "Cell 20" + ":"+ Math.floor(value.b1c20*100)/100 ,
                text: Math.floor(value.b1c20*100)/100,
              },
              {
                type: "bar",
                x: [21],
                y: [value.b1c21],
                marker: { color: c21Color },
                name:  "Cell 21" + ":"+ Math.floor(value.b1c21*100)/100 ,
                text: Math.floor(value.b1c21*100)/100,
              },
              {
                type: "bar",
                x: [22],
                y: [value.b1c22],
                marker: { color: c22Color },
                name:  "Cell 22" + ":"+ Math.floor(value.b1c22*100)/100 ,
                text: Math.floor(value.b1c22*100)/100,
              },
              {
                type: "bar",
                x: [23],
                y: [value.b1c23],
                marker: { color: c23Color },
                name:  "Cell 23" + ":"+ Math.floor(value.b1c23*100)/100 ,
                text: Math.floor(value.b1c23*100)/100,
              },
              {
                type: "bar",
                x: [24],
                y: [value.b1c24],
                marker: { color: c24Color },
                name:  "Cell 24" + ":"+ Math.floor(value.b1c24*100)/100 ,
                text: Math.floor(value.b1c24*100)/100,
              },
              {
                type: "bar",
                x: [25],
                y: [value.b1c25],
                marker: { color: c25Color },
                name:  "Cell 25" + ":"+ Math.floor(value.b1c25*100)/100 ,
                text:Math.floor( value.b1c25*100)/100,
              },
              {
                type: "bar",
                x: [26],
                y: [value.b1c26],
                marker: { color: c26Color },
                name:  "Cell 26" + ":"+ Math.floor(value.b1c26*100)/100 ,
                text: Math.floor(value.b1c26*100)/100,
              },
              {
                type: "bar",
                x: [27],
                y: [value.b1c27],
                marker: { color: c27Color },
                name:  "Cell 27" + ":"+ Math.floor(value.b1c27*100)/100 ,
                text: Math.floor(value.b1c27*100)/100,
              },
            
            ]}
            layout={{
              width: 1600,
              height: 640,
              title: "Battery One",
              showlegend: true,

              xaxis: {
                title: {
                  text: "Cell",
                  font: {
                    family: "Courier New, monospace",
                    size: 18,

                    color: "black",
                  },
                },
              },
            }}
          />
        ))}
      </div>
      <div className="battery-two-plot">
        {plotData.map((value) => (
           <Plot
           data={[
             {
               x: [''],
               y: [1,, 3.2, 4.2, 6],
               type: "scatter",
               mode: "none",
               showlegend: false,
               name: "Cell One",
               visible: true,
             },


             ////////////// spoof data example sin wave //////////
            //  {
              
            //    type: "bar",
            //    x: [0],
            //    y: [value.b1c0],
            //    marker: { color: c0Color },
            //    name:  "Cell 0" + "-"+ Math.floor(value.b2c0*100)/100, 
            //    text: Math.floor(value.b2c0*100)/100,
            //  },
             //////////////////////////////////////////////////

             ////////////////////////////// plots start here //////////////////////////////////////
             {
             
               type: "bar",
               x: [0],
               y: [value.b2c0],
               marker: { color: c0Color },
               name:  "Cell 0" + ":"+ Math.floor(value.b2c0*100)/100 ,
               text: Math.floor(value.b2c0*100)/100,
             },
             {
               type: "bar",
               x: [1],
               y: [value.b2c1],
               marker: { color: c1Color },
               name: "Cell 1" + "-"+ Math.floor(value.b2c1*100)/100 ,
               text: Math.floor(value.b2c1*100)/100,
             },
             {
               type: "bar",
               x: [2],
               y: [value.b2c2],
               marker: { color: c2Color },
               standoff: { text: "Cell 1" },
               name:  "Cell 2" + "-"+ Math.floor(value.b2c2*100)/100,
               text: Math.floor(value.b2c2*100)/100,
             },
             {
               type: "bar",
               x: [3],
               y: [value.b2c3],
               marker: { color: c3Color },
               name: "Cell 3" + "-"+ Math.floor(value.b2c3*100)/100 ,
               text: Math.floor(value.b2c3*100)/100,
             },
             {
               type: "bar",
               x: [4],
               y: [value.b2c4],
               marker: { color: c4Color },
               name:  "Cell 0" + "-"+ Math.floor(value.b2c4*100)/100 ,
               text: Math.floor(value.b2c4*100)/100,
             },
             {
               type: "bar",
               x: [5],
               y: [value.b2c5],
               marker: { color: c5Color },
               name:  "Cell 5" + "-"+ Math.floor(value.b2c5*100)/100 ,
               text: Math.floor(value.b2c5*100)/100,
             },
             {
               type: "bar",
               x: [6],
               y: [value.b2c6],
               marker: { color: c6Color },
               name:  "Cell 6" + "-"+ Math.floor(value.b2c6*100)/100 ,
               text:Math.floor(value.b2c6*100)/100,
             },
             {
               type: "bar",
               x: [7],
               y: [value.b2c7],
               marker: { color: c7Color },
               name:  "Cell 7" + "-"+ Math.floor(value.b2c7*100)/100 ,
               text: Math.floor(value.b2c7*100)/100,
             },
             {
               type: "bar",
               x: [8],
               y: [value.b2c8],
               marker: { color: c8Color },
               name:  "Cell 8" + "-"+ Math.floor(value.b2c8*100)/100 ,
               text:Math.floor(value.b2c8*100)/100,
             },
             {
               type: "bar",
               x: [9],
               y: [value.b2c9],
               marker: { color: c9Color },
               name:  "Cell 9" + "-"+ Math.floor(value.b2c9*100)/100 ,
               text:Math.floor(value.b2c9*100)/100,
             },
             {
               type: "bar",
               x: [10],
               y: [value.b2c10],
               marker: { color: c10Color },
               name:  "Cell 10" + "-"+ Math.floor(value.b2c10*100)/100 ,
               text: Math.floor(value.b2c10*100)/100,
             },
             {
               type: "bar",
               x: [11],
               y: [value.b2c11],
               marker: { color: c11Color },
               name:  "Cell 11" + "-"+ Math.floor(value.b2c11*100)/100 ,
               text: Math.floor(value.b2c11*100)/100,
             },
             {
               type: "bar",
               x: [12],
               y: [value.b2c12],
               marker: { color: c12Color },
               name:  "Cell 12" + "-"+ Math.floor(value.b2c12*100)/100 ,
               text:Math.floor(value.b2c12*100)/100,
             },
             {
               type: "bar",
               x: [13],
               y: [value.b2c13],
               marker: { color: c13Color },
               name:  "Cell 13" + "-"+ Math.floor(value.b2c13*100)/100 ,
               text: Math.floor(value.b2c13*100)/100,
             },
             {
               type: "bar",
               x: [14],
               y: [value.b2c14],
               marker: { color: c14Color },
               name:  "Cell 14" + "-"+ Math.floor(value.b2c14 *100)/100,
               text: Math.floor(value.b2c14*100)/100,
             },
             {
               type: "bar",
               x: [15],
               y: [value.b2c15],
               marker: { color: c15Color },
               name:  "Cell 15" + "-"+ Math.floor(value.b2c15*100)/100 ,
               text: Math.floor(value.b2c15*100)/100,
             },
             {
               type: "bar",
               x: [16],
               y: [value.b2c16],
               marker: { color: c16Color },
               name:  "Cell 16" + "-"+ Math.floor(value.b2c16*100)/100 ,
               text: Math.floor(value.b2c16*100)/100,
             },
             {
               type: "bar",
               x: [17],
               y: [value.b2c17],
               marker: { color: c17Color },
               name:  "Cell 17" + "-"+ Math.floor(value.b2c17*100)/100 ,
               text: Math.floor(value.b2c17*100)/100,
             },
             {
               type: "bar",
               x: [18],
               y: [value.b2c18],
               marker: { color: c18Color },
               name:  "Cell 18" + "-"+ Math.floor(value.b2c18 *100)/100,
               text:Math.floor(value.b2c18*100)/100,
             },
             {
               type: "bar",
               x: [19],
               y: [value.b2c19],
               marker: { color: c19Color },
               name:  "Cell 19" + "-"+ Math.floor(value.b2c19*100)/100 ,
               text: Math.floor(value.b2c19*100)/100,
             },
             {
               type: "bar",
               x: [20],
               y: [value.b2c20],
               marker: { color: c20Color },
               name:  "Cell 20" + "-"+ Math.floor(value.b2c20*100)/100 ,
               text: Math.floor(value.b2c20*100)/100,
             },
             {
               type: "bar",
               x: [21],
               y: [value.b2c21],
               marker: { color: c21Color },
               name:  "Cell 21" + "-"+ Math.floor(value.b2c21*100)/100 ,
               text: Math.floor(value.b2c21*100)/100,
             },
             {
               type: "bar",
               x: [22],
               y: [value.b2c22],
               marker: { color: c22Color },
               name:  "Cell 22" + "-"+ Math.floor(value.b2c22*100)/100 ,
               text: Math.floor(value.b2c22*100)/100,
             },
             {
               type: "bar",
               x: [23],
               y: [value.b2c23],
               marker: { color: c23Color },
               name:  "Cell 23" + "-"+ Math.floor(value.b2c23*100)/100 ,
               text: Math.floor(value.b2c23*100)/100,
             },
             {
               type: "bar",
               x: [24],
               y: [value.b2c24],
               marker: { color: c24Color },
               name:  "Cell 24" + "-"+ Math.floor(value.b2c24*100)/100 ,
               text: Math.floor(value.b2c24*100)/100,
             },
             {
               type: "bar",
               x: [25],
               y: [value.b2c25],
               marker: { color: c25Color },
               name:  "Cell 25" + "-"+ Math.floor(value.b2c25*100)/100 ,
               text: Math.floor(value.b2c25*100)/100,
             },
             {
               type: "bar",
               x: [26],
               y: [value.b2c26],
               marker: { color: c26Color },
               name:  "Cell 26" + "-"+ Math.floor(value.b2c26*100)/100 ,
               text: Math.floor(value.b2c26*100)/100,
             },
             {
               type: "bar",
               x: [27],
               y: [value.b2c27],
               marker: { color: c27Color },
               name:  "Cell 27" + "-"+ Math.floor(value.b2c27*100)/100 ,
               text: Math.floor(value.b2c27*100)/100,
             },
           
           ]}
           layout={{
             width: 1600,
             height: 640,
             title: "Battery Two",
             showlegend: true,

             xaxis: {
               title: {
                 text: "Cell",
                 font: {
                   family: "Courier New, monospace",
                   size: 18,

                   color: "black",
                 },
               },
             },
           }}
         />
       ))}
     
      </div>
    </div>
  );
};

export default BatteryGraph;
