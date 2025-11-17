import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import BottomGauges from "../Gauges/BottomGauges";
import TabOneIcon from "../Icon-folder/TabOneIcon";
import TabTwoIcon from "../Icon-folder/TabTwoIcon";
import TabThreeIcon from "../Icon-folder/TabThreeIcon";
import TabFourIcon from "../Icon-folder/TabFourIcon";
import "../Tab-folder-styles/tab-section-styles.css";
import logo from "../images/logo.jpg";
import PlotlyGraph from "../PlotlyGraphs/PlotlyGraph";
import Reactviz from "../PlotlyGraphs/Reactviz";
import LinearGauge from "../Battery-Tab/LinearGauge";
import BatteryGraph from "../Battery-Tab/BatteryGraph";
import ProgressCircle from "../Battery-Tab/ProgressCircle";
import ComTab from "./ComTab";
import SettingsCarousel from "../SettingsPage/SettingsCarousel";

const TabNav = () => {
  return (
    <div className="container">
      <div className="title">POWER LENS APP</div>
      <Tabs>
        <TabList>
          <Tab>
            <TabOneIcon />
          </Tab>
          <Tab>
            <TabTwoIcon />
          </Tab>
          <Tab>
            <TabThreeIcon />
          </Tab>
          <Tab>
            <TabFourIcon />
          </Tab>
          <img id="logo-style" src={logo} width="90" height="70" alt="" />
          {/* <ComTab /> */}
        </TabList>

        <TabPanel>
          <BottomGauges />
        </TabPanel>
        <TabPanel>
          <ProgressCircle />
          <BatteryGraph />
        </TabPanel>
        <TabPanel>
          <PlotlyGraph />
        </TabPanel>
        <TabPanel>
          <SettingsCarousel />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabNav;
