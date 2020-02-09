import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../../assets/images/got-logo.png';
import AudioPlayer from '../audio-player';
import {
  Header,
  Logo,
} from './styles';

const HeaderComponent = ({ color = '#000' }) => (
  <Header>
    <Link to="/">
      <Logo color={color}>
        <img src={logo} alt="" />
      </Logo>
    </Link>
    <AudioPlayer />
  </Header>
);

export default HeaderComponent;

HeaderComponent.propTypes = {
  color: PropTypes.string,
};

HeaderComponent.defaultProps = {
  color: '#000',
};
