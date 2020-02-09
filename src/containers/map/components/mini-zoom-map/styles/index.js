import styled from 'styled-components';

export const MiniZoomMap = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 250px;
  z-index: 100;
  user-select: none;
  box-sizing: content-box;
  img {
    width: 100%;
    display: inline-block;
    line-height: 0;
    float: left;
  }
  
  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom:0;
    left: 0;
    right: 0;
    background-color: ${({ borderColor }) => borderColor || '#000'};
    transition: background-color .3s linear;
    opacity: 0.3;
    z-index: 10;
  }
  
  &:after {
    content: "";
    position: absolute;
    top: -10px;
    right: -10px;
    left: 0;
    bottom: 0;
    background-color: ${({ borderColor }) => borderColor || '#000'};
    transition: background-color .3s linear;
    z-index: -1;
  }
`;

export const HouseDots = styled.div`
  position: absolute;
  width: 10px; 
  transform: translate(-50%, -50%);
  top: ${({ position }) => position.y}%;
  left: ${({ position }) => position.x}%;
  pointer-events: none;
`;

export const MapViewportIndicator = styled.div`
  width: ${({ dimensions }) => dimensions.width}%;
  height: ${({ dimensions }) => dimensions.height}%;
  top: ${({ dimensions }) => dimensions.top}%;
  left: ${({ dimensions }) => dimensions.left}%;
  opacity: 0.7;
  background-color: ${({ color }) => color || '#000'};
  position: absolute;
  pointer-events: none;
  user-select: none;
`;
