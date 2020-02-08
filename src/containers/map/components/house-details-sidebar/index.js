import React from 'react';
import {
  HouseDetailsContainer,
  CloseButton,
  HouseName,
  ImageContainer,
  Info,
  Label,
  Item,
  Name
} from './styles';
import devider from "../../../../assets/divider.svg";
import devider2 from "../../../../assets/devider2.svg";

const HouseDetailsSidebar = ({ house, handleSidebarClose }) => {


  return (
    <HouseDetailsContainer color={house.backgroundColor}>
      <CloseButton color={house.backgroundColor} onClick={handleSidebarClose}>X</CloseButton>
      <ImageContainer>
        <img src={house.image} alt=""/>
      </ImageContainer>
      <img className="devider" src={devider} alt=""/>
      <HouseName>
        House Targaryen of King's Landing
      </HouseName>
      <img className="devider" src={devider2} alt=""/>
      <br/>

      <Info>
        <Item>
          <Label>Current Lord:</Label>
          <Name>Daenerys Targaryen</Name>
        </Item>
        <Item>
          <Label>Region:</Label>
          <Name>The Crownlands</Name>
        </Item>
        <Item>
          <Label>Coat of Arms:</Label>
          <Name>Sable, a dragon thrice-headed gules</Name>
        </Item>
        <Item>
          <Label>Words:</Label>
          <Name>Fire and Blood</Name>
        </Item><Item>
          <Label>Titles:</Label>
          <Name>King of the Andals, The Rhoynar and the First Men, Lord of the Seven Kingdom</Name>
        </Item>
        <Item>
          <Label>Founded:</Label>
          <Name>House Targaryen: >114 BCHouse Targaryen of King's Landing:1 AC</Name>
        </Item>
        <Item>
          <Label>Sworn members:</Label>
          <Name>100</Name>
        </Item>
      </Info>
    </HouseDetailsContainer>
  )
}

export default HouseDetailsSidebar;