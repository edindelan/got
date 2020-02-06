import React, { Component } from "react";
import styled from "styled-components";
import mapImage from "../../assets/images/got-map.jpg";
import mapImageMini from "../../assets/images/got-map-mini.jpg";
import { houses } from "../homepage"

const MapContainer = styled.div` 
  height: 100%;
  width: 100%;
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
  img {
    width: 100%;
    display: inline-block;
    line-height: 0;
    float: left;
  }
`;

const Square = styled.div`
  width: ${({dimensions}) => dimensions.width}%;
  height: ${({dimensions}) => dimensions.height}%;
  top: ${({dimensions}) => dimensions.top}%;
  left: ${({dimensions}) => dimensions.left}%;
  opacity: 0.5;
  background-color: red;
  position: absolute;
  border: 1px solid red;
  pointer-events: none;
  user-select: none;
`;


const House = styled.div`
  width: 200px;
  height: 200px;
  top: ${({position}) => position.y}px;
  left: ${({position}) => position.x}px;
  transform: translate(-50%, -50%);
  background-color: #fff;
  position: absolute;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
  flex-direction: column;
  cursor:pointer;
  img {
    width: 100%;
  }
`;

const HouseDots = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  transform: translate(-50%, -50%);
  border-radius: 100%;
  background-color: red;
  top: ${({position}) => position.y}%;
  left: ${({position}) => position.x}%;
  pointer-events: none;
`;

const HouseDetailsContainer = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 250px;
  height: 40%;
  background-color: #fff;
  overflow: hidden;
  
  img {
    width: 100%;
  }
`;

// offsetTop: 0
// offsetLeft: 0
// offsetWidth: 896
// offsetHeight: 292

// scrollTop: 34
// scrollLeft: 33
// scrollWidth: 4001
// scrollHeight: 2507
// clientTop: 0
// clientLeft: 0
// clientWidth: 896
// clientHeight: 292

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
      })
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

  render() {
    const {
      zoomPanelOverlyWidth,
      zoomPanelOverlyHeight,
      zoomPanelOverlyPositionTop,
      zoomPanelOverlyPositionLeft,
      selectedHouse
    } = this.state;

    return (
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
                  {house.name}
                  <img src={house.image} alt=""/>
                </House>
              ))
            }
          </OriginalSizeMapImage>
        </MapImageContainer>
        <MapZoomPanel ref={c => this.mapZoomPanel = c} onClick={e => this.handleZoomPanelClick(e)}>
          <img src={mapImageMini} alt=""/>
          {
            this.imageContainer && this.mapZoomPanel && houses.map(house => (
              <HouseDots
                position={this.translateBigMapCoordinatesToMiniMapCoordinates(house.mapPosition)}
              />
            ))
          }
          <Square dimensions={
            {
              width: zoomPanelOverlyWidth,
              height: zoomPanelOverlyHeight,
              top: zoomPanelOverlyPositionTop,
              left: zoomPanelOverlyPositionLeft
            }}>
          </Square>
        </MapZoomPanel>
        {selectedHouse && (
          <HouseDetailsContainer>
            <div>{selectedHouse.name}</div>
            <img src={selectedHouse.image} alt=""/>
          </HouseDetailsContainer>
        )}

      </MapContainer>
    )
  }

}

export default Map;