import React from 'react';
import PropTypes from 'prop-types';
import {
  Slide,
  SignImage,
} from './styles/index';

const HouseVerticalSlide = ({ data: { image }, className }) => (
  <Slide className={className}>
    <SignImage>
      <img className="house-image" src={image} alt="" />
    </SignImage>
  </Slide>
);

export default HouseVerticalSlide;

HouseVerticalSlide.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  className: PropTypes.string,
};

HouseVerticalSlide.defaultProps = {
  className: '',
};
