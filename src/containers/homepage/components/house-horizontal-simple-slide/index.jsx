import React from 'react';
import PropTypes from 'prop-types';
import {
  Slide,
  Content,
} from './styles/index';

const HouseHorizontalSimpleSlide = ({ data: { name }, className }) => (
  <Slide className={className}>
    <Content>
      <h2>{name}</h2>
    </Content>
  </Slide>
);

export default HouseHorizontalSimpleSlide;

HouseHorizontalSimpleSlide.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  className: PropTypes.string,
};

HouseHorizontalSimpleSlide.defaultProps = {
  className: '',
};
