import React, { useState } from "react";
// import "../Initialization-Styles/killButton.css";

const KillButton = () => {

  return (
    <div>
      <div className="kill-active-button">
        <input type="checkbox" id="kill-active-checkbox" ></input>
        <div className="kill-active-button-center" id="kill-active-button-on">
          <i class="fa-solid fa-power-off"></i>
        </div>
      </div>
   
    </div>
  );
};

export default KillButton;
