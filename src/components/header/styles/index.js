import styled from 'styled-components';

export const Header = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
  justify-content: space-between;
  pointer-events: none;
`;

export const LeftSide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.div`
  width: 20vw;
  background-color: ${({ color }) => (color || '#000')};
  transition: background-color .3s linear;
  padding: 1vw 2vw;
  pointer-events: initial;
  img {
    width: 100%;
    opacity: 0.7;
  }
`;

export const Navigation = styled.div`
  display: none;
  position: absolute;
  left: 100%;
  top: 0;
  bottom: 0; 
  align-items: center;
  color: inherit;
  font-weight: 400;
  
  a {
    display: inline-block;
    color: inherit;
    text-decoration: none;
    margin-left: 20px;
    
    &:hover {
      text-decoration: underline;
    }
    &:visited {
      color: inherit;
    }
  }
`;

export const Menu = styled.div`
  cursor: pointer;
  padding: 5px;
  margin-left: 20px;
  z-index: 9999;
  pointer-events: initial;
  font-family: "Roboto", serif;
  position: relative;
  color: ${({ color }) => (color || '#000')};
  img {
  cursor: pointer;
    width: 30px;
  }
  
  &:hover {
    ${Navigation} {
      display: flex;
    }
  }
  
`;
