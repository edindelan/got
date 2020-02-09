import styled from 'styled-components';
import BannerIcon from '../../../../../components/svg-components/banner-icon';

export const MapImageContainer = styled.div`
  overflow: auto;
  height: 100%;
  width: 100%;
`;

export const OriginalSizeMapImage = styled.div` 
  position: relative;
  img {
    float: left;
    user-select: none;
  }
`;

export const House = styled.div`
  width: 150px;
  top: ${({ position }) => position.y}px;
  left: ${({ position }) => position.x}px;
  transform: translate(-50%, -50%) scale(1);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor:pointer; 
  transition: transform .15s linear;
  &:hover {
    transform: translate(-50%, -50%) scale(1.05);
  }
  img {
    position: absolute;
    width: auto;
    height: auto;
    max-width: 80%;
    max-height: 60%;
  }
`;

export const HouseName = styled.div`
  position: absolute;
  font-family: 'Playfair Display',serif;
  font-size: 24px;
  bottom: 105%;
  color: rgba(255,255,255,0.70); 
  background-color: ${({ color }) => color || '#000'};
  padding: 2px 20px 6px 20px;
  line-height: 1;
  & ~ div{
    margin-right: 10px;
  }
`;

export const BannerIconLeft = styled(BannerIcon)`  
  position: absolute;
  left: -29px;
  width: 26px;
  height: 28px;
  top: 0;
  bottom: 0;
  margin: auto;
`;

export const BannerIconRight = styled(BannerIcon)`
  position: absolute; 
  width: 26px;
  transform: rotateY(180deg);
  right: -29px;
  height: 28px;
  top: 0;
  bottom: 0;
  margin: auto;
`;
