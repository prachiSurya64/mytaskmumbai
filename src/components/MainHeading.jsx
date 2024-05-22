


import React from 'react';
import { Typography } from 'antd';
import '../style/MainHeading.css';

function MainHeading() {
  return (
    <div className="container">
      <Typography className="main-heading">
        What User says
      </Typography>
      <Typography className="sub-heading">
        Testimonials that speak louder than words! Customer stories that light up our day.
      </Typography>
    </div>
  );
}

export default MainHeading;

