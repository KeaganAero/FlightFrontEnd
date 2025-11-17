import React, { useState, useEffect } from "react";
import axios from "axios";
import B1c0 from "./B1c0";
import B1c1 from "./B1c1";
import B1c2 from "./B1c2";
import B1c3 from "./B1c3";
import B1c4 from "./B1c4";
import B1c5 from "./B1c5";
import B1c6 from "./B1c6";
import B1c7 from "./B1c7";
import B1c8 from "./B1c8";
import B1c9 from "./B1c9";
import B1c10 from "./B1c10";
import B1c11 from "./B1c11";
import B1c12 from "./B1c12";
import B1c13 from "./B1c13";
import B1c14 from "./B1c14";
import B1c15 from "./B1c15";
import B1c16 from "./B1c16";
import B1c17 from "./B1c17";
import B1c18 from "./B1c18";
import B1c19 from "./B1c19";
import B1c20 from "./B1c20";
import B1c21 from "./B1c21";
import B1c22 from "./B1c22";
import B1c23 from "./B1c23";
import B1c24 from "./B1c24";
import B1c25 from "./B1c25";
import B1c26 from "./B1c26";
import B1c27 from "./B1c27";
import "../Battery-Tab-Styles/batteryStyles.css";
const LinearGauge = () => {
  const [cellData, setCellData] = useState([]);
  const [cell0, setCell0] = useState(false);
  const [cell0State, setCell0State] = useState(Number);
  useEffect(() => {
    const batteryCellData = async () => {
      const res = await axios.get("http://localhost:3002");
      const cellData = res.data;
      var isValid = cellData[0].hasOwnProperty("b1c0");
      if (isValid) {
        setCellData(cellData);
      }
    };
    batteryCellData();
  });


  
 


  var dynamicData = "";
  cellData.map((value) => {
    dynamicData = value.b1c0;

  });

  const switchData = () => {
    cellData.map((value) => {
      if(dynamicData=value.b1c0){
        dynamicData(value.b1c1)
        console.log("button clicked")
      }
    })
  
  }

  return (
    <div className="flex-wrapper">
      <button onClick={switchData}>switch cell Data-------{dynamicData}</button>
      {cellData.map((value) => (
        <div className="true-container">
          cell 0
          <div className="b0">
            <B1c0
              batCellData={value.b1c0}
              liquidHeight="--height"
              liquidColor="--color"
            />
          </div>
          cell 1
          <div className="b0">
            <B1c1
              batCellData={value.b1c1}
              liquidHeight="--heightOne"
              liquidColor="--colorOne"
            />
          </div>
          cell 2
          <div className="b0">
            <B1c2
              batCellData={value.b1c2}
              liquidHeight="--heightTwo"
              liquidColor="--colorTwo"
            />
          </div>
          cell 3
          <div className="b0">
            <B1c3
              batCellData={value.b1c3}
              liquidHeight="--heightThree"
              liquidColor="--colorThree"
            />
          </div>
          cell 4
          <div className="b0">
            <B1c4
              batCellData={value.b1c4}
              liquidHeight="--heightFour"
              liquidColor="--colorFour"
            />
          </div>
          cell 5
          <div className="b0">
            <B1c5
              batCellData={value.b1c5}
              liquidHeight="--heightFive"
              liquidColor="--colorFive"
            />
          </div>
          cell 6
          <div className="b0">
            <B1c6
              batCellData={value.b1c6}
              liquidHeight="--heightSix"
              liquidColor="--colorSix"
            />
          </div>
          cell 7
          <div className="b0">
            <B1c7
              batCellData={value.b1c7}
              liquidHeight="--heightSeven"
              liquidColor="--colorSeven"
            />
          </div>
          cell 8
          <div className="b0">
            <B1c8
              batCellData={value.b1c8}
              liquidHeight="--heightEight"
              liquidColor="--colorEight"
            />
          </div>
          cell 9
          <div className="b0">
            <B1c9
              batCellData={value.b1c9}
              liquidHeight="--heightNine"
              liquidColor="--colorNine"
            />
          </div>
          cell 10
          <div className="b0">
            <B1c10
              batCellData={value.b1c10}
              liquidHeight="--heightTen"
              liquidColor="--colorTen"
            />
          </div>
          cell 11
          <div className="b0">
            <B1c11
              batCellData={value.b1c11}
              liquidHeight="--heightEleven"
              liquidColor="--colorEleven"
            />
          </div>
          cell 12
          <div className="b0">
            <B1c12
              batCellData={value.b1c12}
              liquidHeight="--heightTwelve"
              liquidColor="--colorTwelve"
            />
          </div>
          cell 13
          <div className="b0">
            <B1c13
              batCellData={value.b1c13}
              liquidHeight="--heightThirteen"
              liquidColor="--colorThirteen"
            />
          </div>
          cell 14
          <div className="b0">
            <B1c14
              batCellData={value.b1c14}
              liquidHeight="--heightFourteen"
              liquidColor="--colorFourteen"
            />
          </div>
          cell 15
          <div className="b0">
            <B1c15
              batCellData={value.b1c15}
              liquidHeight="--heightFifteen"
              liquidColor="--colorFifteen"
            />
          </div>
          cell 16
          <div className="b0">
            <B1c16
              batCellData={value.b1c16}
              liquidHeight="--heightSixteen"
              liquidColor="--colorSixteen"
            />
          </div>
          cell 17
          <div className="b0">
            <B1c17
              batCellData={value.b1c17}
              liquidHeight="--heightSeventeen"
              liquidColor="--colorSeventeen"
            />
          </div>
          cell 18
          <div className="b0">
            <B1c18
              batCellData={value.b1c18}
              liquidHeight="--heightEighteen"
              liquidColor="--colorEighteen"
            />
          </div>
          cell 19
          <div className="b0">
            <B1c19
              batCellData={value.b1c19}
              liquidHeight="--heightNineteen"
              liquidColor="--colorNineteen"
            />
          </div>
          cell 20
          <div className="b0">
            <B1c20
              batCellData={value.b1c20}
              liquidHeight="--heightTwenty"
              liquidColor="--colorTwenty"
            />
          </div>
          cell 21
          <div className="b0">
            <B1c21
              batCellData={value.b1c21}
              liquidHeight="--heightTwentyOne"
              liquidColor="--colorTwentyOne"
            />
          </div>
          cell 22
          <div className="b0">
            <B1c22
              batCellData={value.b1c22}
              liquidHeight="--heightTwentyTwo"
              liquidColor="--colorTwentyTwo"
            />
          </div>
          cell 23
          <div className="b0">
            <B1c23
              batCellData={value.b1c23}
              liquidHeight="--heightTwentyThree"
              liquidColor="--colorTwentyThree"
            />
          </div>
          cell 24
          <div className="b0">
            <B1c24
              batCellData={value.b1c24}
              liquidHeight="--heightTwentyFour"
              liquidColor="--colorTwentyFour"
            />
          </div>
          cell 25
          <div className="b0">
            <B1c25
              batCellData={value.b1c25}
              liquidHeight="--heightTwentyFive"
              liquidColor="--colorTwentyFive"
            />
          </div>
          cell 26
          <div className="b0">
            <B1c26
              batCellData={value.b1c26}
              liquidHeight="--heightTwentySix"
              liquidColor="--colorTwentySix"
            />
          </div>
          cell 27
          <div className="b0">
            <B1c27
              batCellData={value.b1c27}
              liquidHeight="--heightTwentySeven"
              liquidColor="--colorTwentySeven"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default LinearGauge;
