import React from 'react';
import {Link} from "react-router-dom";
import logo from "../../assets/images/got-logo.png";
import AudioPlayer from "../audio-player";
import {
  Header,
  Logo
} from "./styles";

const HeaderComponent = ({color = "#000"}) => {
  return (
    <Header>
      <Link to="/">
        <Logo color={color}>
          <img src={logo} alt=""/>
        </Logo>
      </Link>
      <AudioPlayer/>
    </Header>
  )
};

export default HeaderComponent;