import React, { useState, useEffect } from "react";
import "../Tab-folder-styles/com.css";

const ComTab = (props) => {
  return (
    <div>
      <div class="dropdown">
        <button className="com-button">Com-Port</button>
        <div class="dropdown-content">
          <h3 className="com-selection" id="com1">
            {this.props.name}
          </h3>
          <h3 className="com-selection" id="com2">
            {}
          </h3>
          <h3 className="com-selection" id="com3">
            {}
          </h3>
          <h3 className="com-selection" id="com4">
            {}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ComTab;
