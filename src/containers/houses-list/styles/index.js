import styled from 'styled-components';

export const ListContainer = styled.div`
  display: flex;
  height: 100%;
  background-color: #353535;
  color: #fff;
  font-family: "Roboto", serif;
  font-weight: 300;
  position: relative;
  overflow: auto;
`;

export const ListWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 10vw 0 50px 0;
  position:relative;
  overflow: auto;
`;

export const List = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  table { 
    width: 100%;
    border-spacing: 0;
    tr {
      cursor: pointer;
      
      &:hover {
        td {
          background-color: rgba(0, 0, 0, 0.3);
        }
      }
    }
    
    td, th {
      color: rgba(255, 255, 255, 0.6);
      font-size: 16px;
      padding: 10px 3vw;
      border-bottom: 1px solid rgba(0, 0, 0, 0.3);
      transition: background-color .15s linear;
      text-align: left;
      img {
        display: inline-block;
        margin-right: 20px;
      }
    }
  }
`;

export const HouseDetails = styled.div`
  width: 30vw;
  height: 100%;
  background-color: red;
  z-index: 100;
`;

export const Pagination = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0; 
  background-color: #1d1d1d;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  color: rgba(255, 255, 255, 0.6);
  
  div {
    cursor: pointer;
    margin: 0 20px;
  }
`;

