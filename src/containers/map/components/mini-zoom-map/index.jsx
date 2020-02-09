import React from 'react';
import PropTypes from 'prop-types';
import {
  MiniZoomMap,
  HouseDots,
  MapViewportIndicator,
} from './styles';
import mapImageMini from '../../../../assets/images/got-map-mini.jpg';
import ShieldIcon from '../../../../components/svg-components/shield-icon';

const getHouseCoordinates = (mapImageContainer, position) => {
  if (mapImageContainer) {
    const bigMapPositionTopPercentage = (position.y / mapImageContainer.scrollHeight) * 100;
    const bigMapPositionLeftPercentage = (position.x / mapImageContainer.scrollWidth) * 100;

    return {
      x: bigMapPositionLeftPercentage,
      y: bigMapPositionTopPercentage,
    };
  }
  return {};
};

const MiniZoomMapComponent = ({
  onClick,
  selectedHouse,
  mapImageContainer,
  mapViewportIndicator,
  houses,
}) => (
  <MiniZoomMap
    onClick={onClick}
    borderColor={selectedHouse && selectedHouse.backgroundColor}
  >
    <img src={mapImageMini} alt="" />
    {mapImageContainer && houses.map((house) => (
      <HouseDots
        key={house.id}
        position={getHouseCoordinates(mapImageContainer, house.mapPosition)}
      >
        <ShieldIcon color={selectedHouse ? selectedHouse.backgroundColor : '#000'} />
      </HouseDots>
    ))}
    <MapViewportIndicator
      dimensions={
          {
            width: mapViewportIndicator.width,
            height: mapViewportIndicator.height,
            top: mapViewportIndicator.positionTop,
            left: mapViewportIndicator.positionLeft,
          }
}
      color={selectedHouse && selectedHouse.backgroundColor}
    />
  </MiniZoomMap>
);

export default MiniZoomMapComponent;

MiniZoomMapComponent.propTypes = {
  mapImageContainer: PropTypes.objectOf(PropTypes.any),
  onClick: PropTypes.func.isRequired,
  selectedHouse: PropTypes.objectOf(PropTypes.any),
  mapViewportIndicator: PropTypes.objectOf(PropTypes.any).isRequired,
  houses: PropTypes.arrayOf(PropTypes.any).isRequired,
};

MiniZoomMapComponent.defaultProps = {
  selectedHouse: {},
  mapImageContainer: null,
};
