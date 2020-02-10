import styled from 'styled-components';

export const KeyboardShortcuts = styled.div` 
  width: 200px;
  height: 100px;
  background-color: #000;
  position: fixed;
  left: -200px;
  top: 45%;
  z-index: 99999;
  opacity: 0.8;
  &:hover {
    left: 0;
  } 
`;

export const Keyboard = styled.div` 
  background-color: #000;
  position: absolute;
  right: -33px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Info = styled.div` 
  color: rgba(255,255,255,0.61);
  font-family: "Roboto", serif;
  font-size: 12px;
  padding: 10px;
`;

export default KeyboardShortcuts;
