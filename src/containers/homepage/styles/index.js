import styled from "styled-components";

export const FirstHalf = styled.div`
   height: 100%;
   width: 40%;
   display: flex; 
   align-items: center;
   justify-content: flex-end;
   position: relative;
`;

export const SecondHalf = styled.div`
   height: 100%;
   width: 60%;
   background-color: ${({color}) => color ? color : "#000"};
   transition: background-color .3s linear;
   display: flex;
   align-items: center; 
`;

export const SliderContainer = styled.div`
   height: 100%;
   display: flex;
   overflow: hidden;
`;

export const SliderControls = styled.div`
  z-index: 9999;
  position: absolute;
  bottom: 25px;
  right: -25px;
  color: ${({color}) => color ? color : "#000"};
  transition: background-color .3s linear;
`;

export const ArrowControlBox = styled.div`
  width: 50px;
  height: 50px;
  background: #666;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:before {
     font-size: 18px;
     line-height: 0px;
  }
  
`;

export const NextSlide = styled(ArrowControlBox)`
  &:before {
     content: '▶';
  }
  
`;
export const PreviousSlide = styled(ArrowControlBox)`
  &:before {
     content: '◀';
  }
`;