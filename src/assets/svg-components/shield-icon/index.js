import React from 'react';

const ShieldIcon = ({color = "#000"}) => {
  return (
    <svg width="100%" version="1.1" viewBox="0 0 96 128" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd">
        <g fill={color} fillRule="nonzero">
          <path d="m63.14 12.12c-9.14-3.52-15.14-12.12-15.14-12.12s-6 8.6-15.14 12.12c-11.06 4.28-31.41 4.38-31.41 4.38s-3.81 61.72 6.21 75.85c12.4 17.47 40.34 26.02 40.34 35.65 0-9.63 27.94-18.18 40.34-35.65 10-14.12 6.21-75.85 6.21-75.85s-20.35-0.1-31.41-4.38z"/>
        </g>
      </g>
    </svg>
  )
};

export default ShieldIcon;