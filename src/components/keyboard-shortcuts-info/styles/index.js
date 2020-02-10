import styled from 'styled-components';

export const KeyboardShortcuts = styled.div` 
  width: 200px;
  height: 100px;
  background-color: #000;
  position: fixed;
  bottom: -100px;
  right: 30vw;
  z-index: 99999;
  opacity: 0.8;
  &:hover {
    bottom: 0;
  } 
`;

export const Keyboard = styled.div` 
  background-color: #000;
  position: absolute;
  top: -30px;
  padding: 5px;
  img {
  }
`;

export const Info = styled.div` 
  color: rgba(255,255,255,0.61);
  font-family: "Roboto", serif;
  font-size: 12px;
  padding: 10px;
`;

export default KeyboardShortcuts;
