import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../assets/images/got-logo.png';

const NotFoundPage = styled.div`
  height: 100%;
  width: 100%;
  background-color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: rgba(255,255,255,0.6);
  font-size: 16px;
  font-family: "Roboto", serif;
  font-weight: 300;
  
  p {
    margin-top: 50px;
    
    a {
      color: inherit;
    }
  }
`;

export default () => (
  <NotFoundPage>
    <img width={150} src={logo} alt="" />
    <p>
      Page not found. Go to
      <Link to="/">Homepage</Link>
      .
    </p>
  </NotFoundPage>
);
