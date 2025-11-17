import React, { useState } from "react";
// import "../Initialization-Styles/killButton.css";

const KillButtonActive = () => {
  // const [disabled, setDisabled] = useState(true);

  // const toggleScreen = () => {
  //   if (disabled === true) {
  //     setDisabled(false)
  //   } else {
  //     setDisabled(true)
  //   }
  //   toggleScreen()
  // };






  return (
    <div>
      <div className="kill-button">
        <input type="kill-checkbox" id="kill-checkbox"></input>
        <div className="kill-button-center" id="kill-button-on">
          <i class="fa-solid fa-power-off"></i>
        </div>
      </div>
   
    </div>
  );
};

export default KillButtonActive;
