import React from 'react';
import {Link} from "react-router-dom";
import logo from "../../assets/images/got-logo.png";
import AudioPlayer from "../audio-player";
import styled from "styled-components";

const Header = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
  justify-content: space-between;
  pointer-events: none;
`;

const Logo = styled.div`
  width: 20vw;
  background-color: ${({color}) => color ? color : "#000"};
  transition: background-color .3s linear;
  padding: 1vw 2vw;
  pointer-events: initial;
  img {
    width: 100%;
    opacity: 0.7;
  }
`;


const HeaderComponent = ({color = "#000"}) => {
  return (
    <Header>
      <Link to="/">
        <Logo color={color}>
          <img src={logo}/>
        </Logo>
      </Link>
      <AudioPlayer/>
    </Header>
  )
};

export default HeaderComponent;