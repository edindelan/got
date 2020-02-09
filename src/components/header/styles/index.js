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
