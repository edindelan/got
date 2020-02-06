import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from "styled-components";


const Slide = styled.div`
   height: 100%;
   display: flex;
   padding: 20%;
   align-items: center;
`;

const Content = styled.div`
   color: #fff;
   
   h3 {
    font-family: 'Roboto', sans-serif;
    font-size: 1.5vw;
    line-height: 1vw;
    font-weight: 300;
    letter-spacing: 0.5vw;
   }
   
   h2 {
    font-family: 'Playfair Display', serif;
    font-size: 6vw;
    line-height: 7vw;
   }
   
   p {
    font-family: 'Roboto', sans-serif;
    font-size: 1vw;
    line-height: 1.5vw;
    font-weight: 300;
    margin-top: 1vw;
   }
   
   a {
    font-family: 'Roboto', sans-serif;
    color: #000;
    background-color: #fff;
    text-decoration: none; 
    cursor: pointer;
    padding: 0.7vw 1vw;
    display: inline-block;
    text-transform: uppercase;
    font-size: 1vw;
    margin-top: 4vw;
    font-weight: 400;
   }
`;

class HouseSlide extends Component {

  render() {
    const { data: { name, description, id}, className } = this.props;
    return (
      <Slide className={className}>
          <Content>
            <h3>HOUSE</h3>
            <h2>{name}</h2>
            <p>{description}</p>
            <Link to={`/map/${id}`}>Find out more</Link>
          </Content>
      </Slide>
    )
  }
}

export default HouseSlide;