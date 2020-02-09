import styled from 'styled-components';

export const HouseDetailsContainer = styled.div`
  position: relative;
  color: #fff;
  width: 30vw;
  min-width: 250px;
  height: 100%;
  border-left: 10px solid ${({ color }) => color || '#000'};
  z-index: 100; 
  background: rgb(75,0,5);
  background: linear-gradient(180deg, ${({ color }) => color || '#000'} 0%, rgba(0,0,0,1) 100%);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 10px 20px;
  //overflow: auto;
  color: rgba(255, 255, 255, 0.50);
  
  .devider {
    width: 70%;
  }
`;

export const CloseButton = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 0;
  left: -50px;
  color: rgba(255,255,255,0.6);
  background: ${({ color }) => color || '#000'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  cursor: pointer;
`;

export const HouseName = styled.div`
  font-family: 'Playfair Display', serif;
  font-size: 18px;
  text-align: center;
  margin: 10px 0 15px 0;
`;

export const ImageContainer = styled.div`
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    width: auto;
    height: auto;
    max-width: 80%;
    max-height: 100%;
  }
`;

export const Info = styled.div`
  width: 100%;
`;

export const Item = styled.div`
  margin-bottom: 5px;
  font-size: 14px;
  font-family: "Roboto", sans-serif;
  line-height: 18px;
`;

export const Label = styled.div`
  font-family: 'Playfair Display', serif;
  margin-right: 5px;
  font-weight: bold;
  display: inline-block;
`;

export const Name = styled.div` 
  display: inline;
`;
