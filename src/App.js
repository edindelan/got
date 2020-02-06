import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.scss";
import AudioPlayer from "./components/audio-player";
import logo from "./assets/images/got-logo.png";
import Homepage from "./containers/homepage";
import Map from "./containers/map";

const MainContainer = styled.div`
  height: 100vh;
  position: relative;
`;

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
  }
`;



class App extends Component {

  render() {
    return (
      <MainContainer>
        <Header>
          <Link to="/">
          <Logo>
            <img src={logo}/>
          </Logo>
          </Link>
          <AudioPlayer/>
        </Header>
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route exact path="/slide/:id" component={Homepage}/>
          <Route exact path="/map" component={Map}/>
          <Route exact path="/map/:id" component={Map}/>
        </Switch>
      </MainContainer>
    );
  }
}

export default App;
