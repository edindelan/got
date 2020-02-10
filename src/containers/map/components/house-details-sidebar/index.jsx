import React from 'react';
import PropTypes from 'prop-types';
import {
  HouseDetailsContainer,
  CloseButton,
  HouseName,
  ImageContainer,
  Info,
  Label,
  Item,
  Name,
} from './styles';
import Loader from '../../../../components/loader';
import deviderTop from '../../../../assets/divider.svg';
import deviderBottom from '../../../../assets/devider2.svg';
import swords from '../../../../assets/swords.svg';

const HouseDetailsSidebar = ({
  house,
  handleSidebarClose,
  loading = false,
}) => (
  <HouseDetailsContainer color={house.backgroundColor}>
    <CloseButton color={house.backgroundColor} onClick={handleSidebarClose}>X</CloseButton>
    <ImageContainer>
      <img src={house.image || swords} alt="" />
    </ImageContainer>
    <img src={deviderTop} alt="" />
    <HouseName>
      {house.name}
    </HouseName>
    <img src={deviderBottom} alt="" />
    <br />

    {!loading
      ? (
        <Info>
          <Item>
            <Label>Current Lord:</Label>
            <Name>{house.currentLordData && house.currentLordData.name}</Name>
          </Item>
          <Item>
            <Label>Region:</Label>
            <Name>{house.region}</Name>
          </Item>
          <Item>
            <Label>Coat of Arms:</Label>
            <Name>{house.coatOfArms}</Name>
          </Item>
          <Item>
            <Label>Words:</Label>
            <Name>{house.words}</Name>
          </Item>
          <Item>
            <Label>Titles:</Label>
            <Name>{house.titles && house.titles.join(', ')}</Name>
          </Item>
          <Item>
            <Label>Founded:</Label>
            <Name>{house.founded}</Name>
          </Item>
          <Item>
            <Label>Sworn members:</Label>
            <Name>
              {house.swornMembersCount
            || (house.swornMembers && house.swornMembers.length)}
            </Name>
          </Item>
        </Info>
      )
      : <Loader />}


  </HouseDetailsContainer>
);

export default HouseDetailsSidebar;

HouseDetailsSidebar.propTypes = {
  handleSidebarClose: PropTypes.func.isRequired,
  house: PropTypes.objectOf(PropTypes.any).isRequired,
  loading: PropTypes.bool,
};

HouseDetailsSidebar.defaultProps = {
  loading: false,
};
