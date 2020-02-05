import React, { Component } from 'react';
import styled from "styled-components";


const Slide = styled.div`
   height: 100%;
   display: flex;
   align-items: center;
   justify-content: flex-end;
`;
const SignImage = styled.div`
   width: 70%;
   transform: translate(40%);
   img {
    width: 100%;
   }
`;

class HouseSlide extends Component {

  render() {
    const { data: {image}, className } = this.props;
    return (
      <Slide className={className}>
          <SignImage>
            <img className="house-image" src={image} alt=""/>
          </SignImage>
      </Slide>
    )
  }
}

export default HouseSlide;