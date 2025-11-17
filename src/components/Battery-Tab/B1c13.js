import React, { useState, useEffect } from "react";
import "../Battery-Tab-Styles/b1c8-27.css";

const B1c13 = (props) => {
  const [emptyCylinder, setEmptyCylinder] = useState(true);

 

  /////// FILL ITEM //////////////////////

  useEffect(() => {
    const batteryTest = () => {
   
        if (props.batCellData >= 0) {
          setEmptyCylinder(false);
          console.log(
            `this means emptyCylinder is ${emptyCylinder}`,
            props.batCellData
          );
        } else if (props.batCellData <= 0) {
          setEmptyCylinder(true);
          console.log(
            `This means  emptyCylinder is ${emptyCylinder}`,
            props.batCellData
          );
        }

        // console.log(value.b1c0,zeroRead,oneRead,twoRead,threeRead,fourRead)
   
    };
    batteryTest();
  });


  //////////////////////////////////////////////
  useEffect(() => {
    const batteryTestCellOne = () => {
     
        if (props.batCellData >= 0) {
          setEmptyCylinder(false);
          console.log(
            `this means emptyCylinder is ${emptyCylinder}`,
            props.batCellData
          );
        } else if (props.batCellData <= 0) {
          setEmptyCylinder(true);
          console.log(
            `This means  emptyCylinder is ${emptyCylinder}`,
            props.batCellData
          );
        }

        // console.log(value.b1c0,zeroRead,oneRead,twoRead,threeRead,fourRead)
 
    };
    batteryTestCellOne();
  });

  /////////////////////////////////////////////

 
    // var root = document.documentElement;
    if (props.batCellData <= 4) {
      document.documentElement.style.setProperty(
        props.liquidHeight,
        props.batCellData * 10 + "px"
      );
      document.documentElement.style.setProperty(props.liquidColor, "#39FF14");
      // console.log(value.b1c0,"<--- my standard value")
    } else if (props.batCellData <= 4.3) {
      document.documentElement.style.setProperty(
        props.liquidHeight,
        props.batCellData * 10 + "px"
      );
      document.documentElement.style.setProperty(props.liquidColor, "#FFFF00");
    } else if (props.batCellData <= 4.5) {
      document.documentElement.style.setProperty(
        props.liquidHeight,
        props.batCellData * 10 + "px"
      );
      document.documentElement.style.setProperty(props.liquidColor, "#FFA500");
    } else if (props.batCellData <= 5) {
      document.documentElement.style.setProperty(
        props.liquidHeight,
        props.batCellData * 10 + "px"
      );
      document.documentElement.style.setProperty(props.liquidColor, "red");
    } 
  

  return (
    <div className="wrapper">
    {/********************************* BATTERY ONE CELL ZERO CYLINDER ***************************** */}
      {emptyCylinder ? (
        <div className="cylinder-zero">
          <div className="cylinder-top"></div>
          <div className="cylinder-mid">
         
          </div>
          <div className="cylinder-bottom"></div>
          <div className="liquid-voltage-0"></div>
        </div>
      ) : (
        // if value is a number greater than 0 show this container with dynamic data
        <div className="cylinder-zero">
          <div className="cylinder-top"></div>
          <div className="cylinder-mid">
        
          </div>
          <div className="cylinder-bottom">
       
             <div className="cylinder-value">{ Math.round(props.batCellData *100 )/100 }</div>
          
          </div>
          
          <div className="liquid-top"></div>
          
          <div className="liquid-voltage-13"></div>
          
        </div>
        
      )}


    
    </div>
  );
};
export default B1c13;
