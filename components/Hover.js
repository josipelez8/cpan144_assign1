import React, { useState } from 'react';

const Hover = ({green}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: green ? 'green' : isHovered ? 'red' : 'blue',
      }}
    >
        <br></br>
        <br></br>
    </div>
  );
};

export default Hover;