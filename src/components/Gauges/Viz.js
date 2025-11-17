import React from "react";
import { XYPlot,RadialChart, VerticalGridLines, HorizontalGridLines, XAxis,YAxis,AreaSeries} from "react-vis";
import {Sunburst} from 'react-vis';
const Viz = () => {
   
  const myData = [{angle: 1}, {angle: 5}, {angle: 2}]

  return (
    <div>
<RadialChart
  data={myData}
  width={300}
  height={300} />
    </div>
  );
};

export default Viz;
