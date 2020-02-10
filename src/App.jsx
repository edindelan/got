import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.scss';
import Homepage from './containers/homepage';
import Map from './containers/map';
import HousesList from './containers/houses-list';

const MainContainer = styled.div`
  height: 100vh;
  position: relative;
`;

const App = () => (
  <MainContainer>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/slide/:id" component={Homepage} />
      <Route exact path="/map" component={Map} />
      <Route exact path="/map/:id" component={Map} />
      <Route exact path="/list" component={HousesList} />
    </Switch>
  </MainContainer>
);

export default App;
