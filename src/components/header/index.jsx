import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../../assets/images/got-logo.png';
import MenuIcon from '../svg-components/menu-icon';
import {
  Header,
  Logo,
  Menu,
  LeftSide,
  Navigation,
} from './styles';

const HeaderComponent = ({ color = '#000' }) => (
  <Header>
    <LeftSide>
      <Link to="/">
        <Logo color={color}>
          <img src={logo} alt="" />
        </Logo>
      </Link>
      <Menu color={color}>
        <MenuIcon color={color} />
        <Navigation>
          <Link to="/list">List</Link>
          <Link to="/map">Map</Link>
        </Navigation>
      </Menu>
    </LeftSide>
  </Header>
);

export default HeaderComponent;

HeaderComponent.propTypes = {
  color: PropTypes.string,
};

HeaderComponent.defaultProps = {
  color: '#000',
};
