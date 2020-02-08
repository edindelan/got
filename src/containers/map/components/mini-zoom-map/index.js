import React from 'react';
import {
  MiniZoomMap,
  HouseDots,
  MapViewportIndicator
} from './styles';
import mapImageMini from "../../../../assets/images/got-map-mini.jpg";
import ShieldIcon from "../../../../assets/svg-components/shield-icon";

const getHouseCoordinates = (mapImageContainer, position) => {
  if(mapImageContainer) {
    const bigMapPositionTopPercentage = (position.y / mapImageContainer.scrollHeight) * 100;
    const bigMapPositionLeftPercentage = (position.x / mapImageContainer.scrollWidth) * 100;

    return {
      x: bigMapPositionLeftPercentage,
      y: bigMapPositionTopPercentage
    }
  }
  return {};
}

const MiniZoomMapComponent = ({
                       onClick,
                       selectedHouse,
                       mapImageContainer,
                       miniZoomMapPanel,
                       mapViewportIndicator,
                       houses
                     }) => {
  return (
    <MiniZoomMap
      onClick={onClick}
      borderColor={selectedHouse && selectedHouse.backgroundColor}
    >
      <img src={mapImageMini} alt=""/>
      {mapImageContainer && houses.map(house => (
        <HouseDots
          key={house.id}
          position={getHouseCoordinates(mapImageContainer, house.mapPosition)}>
          <ShieldIcon color={selectedHouse ? selectedHouse.backgroundColor : "#000"}/>
        </HouseDots>
      ))}
      <MapViewportIndicator
        dimensions={
          {
            width: mapViewportIndicator.width,
            height: mapViewportIndicator.height,
            top: mapViewportIndicator.positionTop,
            left: mapViewportIndicator.positionLeft
          }}
        color={selectedHouse && selectedHouse.backgroundColor}
      />
    </MiniZoomMap>
  )
}

export default MiniZoomMapComponent;