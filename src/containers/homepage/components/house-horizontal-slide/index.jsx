import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Slide,
  Content,
} from './styles/index';

const HouseHorizontalSlide = ({ data: { name, description, id }, className }) => (
  <Slide className={className}>
    <Content>
      <h3>HOUSE</h3>
      <h2>{name}</h2>
      <p>{description}</p>
      <Link to={`/map/${id}`}>Find out more</Link>
    </Content>
  </Slide>
);

export default HouseHorizontalSlide;

HouseHorizontalSlide.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  className: PropTypes.string,
};

HouseHorizontalSlide.defaultProps = {
  className: '',
};
