import React from 'react';
import PropTypes from 'prop-types';

const BannerIcon = ({ color = '#000', className }) => (
  <div className={className}>
    <svg viewBox="0 0 55 59" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="banner" transform="translate(0.000000, -12.000000)" fill={color} fillRule="nonzero">
          <g id="Group" transform="translate(0.000000, 12.111000)">
            <path d="M25.187,51.981 L0,51.981 L10.604,28.845 L0,6.908 L25.187,6.908 L25.187,51.981 Z M30.489,51.981 L30.489,6.908 L30.489,2.84217094e-14 L54.629,2.84217094e-14 L54.629,58.888 L30.489,58.888 L30.489,51.981 Z" id="Combined-Shape" />
          </g>
        </g>
      </g>
    </svg>
  </div>
);

export default BannerIcon;

BannerIcon.propTypes = {
  color: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};
