import React, { Component } from "react";
import styled from "styled-components";
import mapImage from "../../assets/images/got-map.jpg";
import mapImageMini from "../../assets/images/got-map-mini.jpg";
import { houses } from "../homepage";
import ShieldIcon from "../../assets/svg-components/shield-icon";
import BannerIcon from "../../assets/svg-components/banner-icon";
import HouseDetailsContainer from "./components/house-details-sidebar";
import Header from "../../components/header";

const BannerIconLeft = styled(BannerIcon)`  
  position: absolute;
  left: -29px;
  width: 26px;
  height: 28px;
  top: 0;
  bottom: 0;
  margin: auto;
`;

const BannerIconRight = styled(BannerIcon)`
  position: absolute; 
  width: 26px;
  transform: rotateY(180deg);
  right: -29px;
  height: 28px;
  top: 0;
  bottom: 0;
  margin: auto;
`;

const MapContainer = styled.div` 
  height: 100%;
  width: 100%;
  display: flex;
`;

const MapImageContainer = styled.div`
  overflow: auto;
  height: 100%;
  width: 100%;
`;

const OriginalSizeMapImage = styled.div` 
  position: relative;
  img {
    float: left;
    user-select: none;
  }
`;

const MapZoomPanel = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 250px;
  z-index: 100;
  user-select: none;
  border-top: 10px solid ${({borderColor}) => borderColor || "#000"};
  border-right: 10px solid ${({borderColor}) => borderColor || "#000"};
  img {
    width: 100%;
    display: inline-block;
    line-height: 0;
    float: left;
  }
  
  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom:0;
    left: 0;
    right: 0;
    background-color: ${({borderColor}) => borderColor || "#000"};
    opacity: 0.3;
    z-index: 10;
  }
`;

const Square = styled.div`
  width: ${({dimensions}) => dimensions.width}%;
  height: ${({dimensions}) => dimensions.height}%;
  top: ${({dimensions}) => dimensions.top}%;
  left: ${({dimensions}) => dimensions.left}%;
  opacity: 0.7;
  background-color: ${({color}) => color || "#000"};
  position: absolute;
  pointer-events: none;
  user-select: none;
`;


const House = styled.div`
  width: 150px;
  top: ${({position}) => position.y}px;
  left: ${({position}) => position.x}px;
  transform: translate(-50%, -50%);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor:pointer;
  img {
    position: absolute;
    width: auto;
    height: auto;
    max-width: 80%;
    max-height: 60%;
  }
`;

const HouseDots = styled.div`
  position: absolute;
  width: 10px; 
  transform: translate(-50%, -50%);
  top: ${({position}) => position.y}%;
  left: ${({position}) => position.x}%;
  pointer-events: none;
`;



const HouseName = styled.div`
  position: absolute;
  font-family: 'Playfair Display',serif;
  font-size: 24px;
  bottom: 105%;
  color: rgba(255,255,255,0.70); 
  background-color: ${({color}) => color || "#000"};
  padding: 2px 20px 6px 20px;
  line-height: 1;
  & ~ div{
    margin-right: 10px;
  }
`;


class Map extends Component {
  state = {
    zoomPanelOverlyWidth: 0,
    zoomPanelOverlyHeight: 0,
    zoomPanelOverlyPositionTop: 0,
    zoomPanelOverlyPositionLeft: 0,
    selectedHouse: null,
  }

  componentDidMount() {
    this.imageContainer.addEventListener("scroll", (event) => {
      const {
        clientWidth,
        clientHeight,
        scrollWidth,
        scrollHeight,
        scrollTop,
        scrollLeft,
      } = event.target;

      this.setState({
        zoomPanelOverlyWidth: (clientWidth / scrollWidth) * 100,
        zoomPanelOverlyHeight: (clientHeight / scrollHeight) * 100,
        zoomPanelOverlyPositionTop: (scrollTop / scrollHeight) * 100,
        zoomPanelOverlyPositionLeft: (scrollLeft / scrollWidth) * 100,
      });

    })

    const { match } = this.props;
    console.log('PROPS', this.props)

    if(match.params.id) {
      console.log('daddd', this.findHouseById(match.params.id))
      this.setState({
        selectedHouse: this.findHouseById(match.params.id)
      }, () => {
        this.focusMapOnHouse(this.state.selectedHouse);
      })
    }
  }

  focusMapOnHouse = house => {
    console.log(house.mapPosition.y - this.imageContainer.clientHeight/2, house.mapPosition.x - this.imageContainer.clientWidth/2)
    this.imageContainer.scrollTop = house.mapPosition.y - this.imageContainer.clientHeight/2;
    this.imageContainer.scrollLeft = house.mapPosition.x - this.imageContainer.clientWidth/2;
    window.history.pushState({}, null, "/map/" + house.id)
  }

  findHouseById = id => houses.find(house => house.id === id);

  handleZoomPanelClick = event => {
    var bounds = event.target.getBoundingClientRect();
    var x = event.clientX - bounds.left;
    var y = event.clientY - bounds.top;

    const positionX = (x / bounds.width) * 100;
    const positionY = (y / bounds.height) * 100;

    this.imageContainer.scrollLeft = ((this.imageContainer.scrollWidth / 100) * positionX) - this.imageContainer.clientWidth/2;
    this.imageContainer.scrollTop = ((this.imageContainer.scrollHeight / 100) * positionY) - this.imageContainer.clientHeight/2;
  }

  translateBigMapCoordinatesToMiniMapCoordinates = (position) => {
    if(this.imageContainer) {
      const bigMapPositionTopPercentage = (position.y / this.imageContainer.scrollHeight) * 100;
      const bigMapPositionLeftPercentage = (position.x / this.imageContainer.scrollWidth) * 100;

      return {
        x: bigMapPositionLeftPercentage,
        y: bigMapPositionTopPercentage
      }
    }
    return {};
  }

  handleHouseClick = (house) => {
    this.setState({
      selectedHouse: house
    }, () => {
      this.focusMapOnHouse(this.state.selectedHouse);
    })
  }

  closeSidePanel = () => {
    this.setState({
      selectedHouse: null
    });
  }

  render() {
    const {
      zoomPanelOverlyWidth,
      zoomPanelOverlyHeight,
      zoomPanelOverlyPositionTop,
      zoomPanelOverlyPositionLeft,
      selectedHouse
    } = this.state;


    return (
      <>
        <Header color={selectedHouse ? selectedHouse.backgroundColor : "#000"}/>
        <MapContainer>
          <MapImageContainer ref={c => this.imageContainer = c}>
            <OriginalSizeMapImage>
              <img src={mapImage} alt="" width="4001" height="2504"/>
              {
                houses.map(house => (
                  <House
                    key={house.id}
                    position={house.mapPosition}
                    onClick={() => this.handleHouseClick(house)}>

                    <HouseName color={house.backgroundColor}>
                      <BannerIconLeft color={house.backgroundColor}/>
                      {house.name}
                      <BannerIconRight color={house.backgroundColor}/>
                    </HouseName>
                    <ShieldIcon color={house.backgroundColor}/>
                    <img src={house.image} alt=""/>
                  </House>
                ))
              }
            </OriginalSizeMapImage>

          </MapImageContainer>
          <MapZoomPanel
            ref={c => this.mapZoomPanel = c}
            onClick={e => this.handleZoomPanelClick(e)}
            borderColor={selectedHouse && selectedHouse.backgroundColor}
          >
            <img src={mapImageMini} alt=""/>
            {
              this.imageContainer && this.mapZoomPanel && houses.map(house => (
                <HouseDots
                  position={this.translateBigMapCoordinatesToMiniMapCoordinates(house.mapPosition)}
                >
                  <ShieldIcon
                    color={selectedHouse ? selectedHouse.backgroundColor : "#000"}
                  />
                </HouseDots>
              ))
            }
            <Square
              dimensions={
                {
                  width: zoomPanelOverlyWidth,
                  height: zoomPanelOverlyHeight,
                  top: zoomPanelOverlyPositionTop,
                  left: zoomPanelOverlyPositionLeft
                }}
              color={selectedHouse && selectedHouse.backgroundColor}
            >
            </Square>
          </MapZoomPanel>
          {selectedHouse && <HouseDetailsContainer house={selectedHouse} onClick={this.closeSidePanel}>
          </HouseDetailsContainer>}
        </MapContainer>
      </>
    )
  }

}

export default Map;