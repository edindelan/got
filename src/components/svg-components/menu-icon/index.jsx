import React from 'react';
import PropTypes from 'prop-types';

const MenuIcon = ({ color = '#000', className }) => (
  <div className={className}>
    <svg width="30px" viewBox="0 0 384 278" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="menu" fill={color} fillRule="nonzero">
          <path d="M368,154.667969 L16,154.667969 C7.167969,154.667969 0,147.5 0,138.667969 C0,129.835938 7.167969,122.667969 16,122.667969 L368,122.667969 C376.832031,122.667969 384,129.835938 384,138.667969 C384,147.5 376.832031,154.667969 368,154.667969 Z" id="Path" />
          <path d="M368,32 L16,32 C7.167969,32 0,24.832031 0,16 C0,7.167969 7.167969,0 16,0 L368,0 C376.832031,0 384,7.167969 384,16 C384,24.832031 376.832031,32 368,32 Z" id="Path" />
          <path d="M368,277.332031 L16,277.332031 C7.167969,277.332031 0,270.164062 0,261.332031 C0,252.5 7.167969,245.332031 16,245.332031 L368,245.332031 C376.832031,245.332031 384,252.5 384,261.332031 C384,270.164062 376.832031,277.332031 368,277.332031 Z" id="Path" />
        </g>
      </g>
    </svg>
  </div>
);

export default MenuIcon;

MenuIcon.propTypes = {
  color: PropTypes.string.isRequired,
  className: PropTypes.string,
};

MenuIcon.defaultProps = {
  className: '',
};
