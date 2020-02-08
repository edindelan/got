import React from 'react';

const BannerIcon = ({color = "#000", className}) => {
  return (
    <div className={className}>
      <svg viewBox="0 0 55 59" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="banner" transform="translate(0.000000, -12.000000)" fill={color} fill-rule="nonzero">
            <g id="Group" transform="translate(0.000000, 12.111000)">
              <path d="M25.187,51.981 L0,51.981 L10.604,28.845 L0,6.908 L25.187,6.908 L25.187,51.981 Z M30.489,51.981 L30.489,6.908 L30.489,2.84217094e-14 L54.629,2.84217094e-14 L54.629,58.888 L30.489,58.888 L30.489,51.981 Z" id="Combined-Shape"></path>
            </g>
          </g>
        </g>
      </svg>
    </div>
  )
};

export default BannerIcon;