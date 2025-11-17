import React, { useEffect, useState } from 'react';
import { timeMillisecond } from 'd3';

const Test = () => {
  const [currentTime, setCurrentTime] = useState(timeMillisecond());

  useEffect(() => {
   setInterval(() => {
      setCurrentTime(timeMillisecond());
    }, 10); 


  }, []);

  return (
    <div>
      {50 + 50 * Math.sin(currentTime / 1000)}
    </div>
  );
};

export default Test;