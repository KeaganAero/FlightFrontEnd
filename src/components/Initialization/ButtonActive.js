import React, { useState } from "react";
import "../Initialization-Styles/button.css";

const ButtonActive = () => {
  const [disabled, setDisabled] = useState(true);

  const toggleScreen = () => {
    if (disabled === true) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
    toggleScreen()
  };
  return (
    <div>
      <div className="button">
        <input type="checkbox" id="checkbox" onClick={toggleScreen}></input>
        <div className="button-center" id="button-on">
          <i class="fa-solid fa-power-off"></i>
        </div>
      </div>
   
    </div>
  );
};

export default ButtonActive;
