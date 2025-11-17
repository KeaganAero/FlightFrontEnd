import React, {useState,useEffect} from 'react';
import { PieChart } from "react-minimal-pie-chart";
import axios from "axios";

const Piechart = () => {
    const [systemData, setSystemData] = useState([]);
  useEffect(() => {
    const systemPwr = async () => {
      const res = await axios.get("http://localhost:3002");
      const systemData = res.data;
      setSystemData(systemData);
      // console.log(res, " <-------------------system data for top gauge");
    };
    systemPwr();
  });
    return(
        <div>
{systemData.map((data) => (

<PieChart id='chart-pie'
  data={[
    { title: 'One', value: Math.round(
      35 -
        (data.systemPower/1000 -
          data.genPower /1000+
          data.genPower/1000)
    ), color: 'lightgrey' },
    { title: 'Two', value: Math.round(data.genPower /1000), color: '#39FF14' },
    { title: 'Three', value: Math.round(
      data.systemPower /1000 - data.genPower /1000
    ), color: 'red' },
  ]}
/>
))}
    



        </div>
    )
}

export default Piechart