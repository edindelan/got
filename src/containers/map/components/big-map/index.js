import React from 'react';
import {
  MapImageContainer,
  OriginalSizeMapImage,
  House,
  HouseName,
  BannerIconLeft,
  BannerIconRight
} from './styles';
import ShieldIcon from "../../../../assets/svg-components/shield-icon";
import mapImage from "../../../../assets/images/got-map.jpg";


const BigMap = React.forwardRef(({
                                   houses,
                                   handleHouseClick
                                 }, ref) => (
    <MapImageContainer ref={ref}>
      <OriginalSizeMapImage>
        <img src={mapImage} alt="" width="4001" height="2504"/>
        {
          houses.map(house => (
            <House
              key={house.id}
              position={house.mapPosition}
              onClick={() => handleHouseClick(house)}>

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
  ));

export default BigMap;