import React, { Component } from 'react';
import styled from "styled-components";


const Slide = styled.div`
   height: 100%;
   display: flex;
   align-items: flex-end;
   overflow: hidden;
`;

const Content = styled.div` 
   h2 {
    font-family: 'Playfair Display', serif;
    font-size: 16vw;
    color: #eee;
   }
`;

class HouseSlide extends Component {

  render() {
    const { data: { name }, className } = this.props;
    return (
      <Slide className={className}>
          <Content>
            <h2>{name}</h2>
          </Content>
      </Slide>
    )
  }
}

export default HouseSlide;