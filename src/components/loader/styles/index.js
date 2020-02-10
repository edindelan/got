import styled from 'styled-components';

export const Loader = styled.div`
  width: 100%;
  min-height: 100px;
  min-width: 100px;
  padding: 50px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  img {
    animation: loading 3s linear infinite;
    display: inline-block;
    @keyframes loading {
      0% { 
        transform: rotate(0); 
      }
      100% { 
        transform: rotate(360deg);
      }
    }
  }
`;

export default Loader;
