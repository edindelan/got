import React, { Component } from "react";
import HouseDetailsContainer from "./components/house-details-sidebar";
import MiniZoomMap from "./components/mini-zoom-map";
import BigMap from "./components/big-map";
import Header from "../../components/header";
import { getPercent, getValueFromPercent, silentUrlChange } from "../../utils";
import houses from "../../data/housesLocalData";
import {MapContainer} from './styles';

class Map extends Component {
  state = {
    mapViewportIndicatorWidth: 0,
    mapViewportIndicatorHeight: 0,
    mapViewportIndicatorPositionTop: 0,
    mapViewportIndicatorPositionLeft: 0,
    selectedHouse: null,
  }

  componentDidMount() {
    const { match } = this.props;

    this.mapImageContainer.addEventListener("scroll", (event) => {
      const {
        clientWidth,
        clientHeight,
        scrollWidth,
        scrollHeight,
        scrollTop,
        scrollLeft,
      } = event.target;

      this.setState({
        mapViewportIndicatorWidth: getPercent(clientWidth, scrollWidth),
        mapViewportIndicatorHeight: getPercent(clientHeight, scrollHeight),
        mapViewportIndicatorPositionTop: getPercent(scrollTop, scrollHeight),
        mapViewportIndicatorPositionLeft: getPercent(scrollLeft, scrollWidth),
      });
    });

    if(match.params.id) {
      this.setState({
        selectedHouse: this.findHouseById(match.params.id)
      }, () => {
        this.focusMapOnHouse(this.state.selectedHouse);
      })
    }
  }

  focusMapOnHouse = house => {
    this.mapImageContainer.scrollTop = house.mapPosition.y - this.mapImageContainer.clientHeight/2;
    this.mapImageContainer.scrollLeft = house.mapPosition.x - this.mapImageContainer.clientWidth/2;
    silentUrlChange(`/map/${house.id}`);
  }

  findHouseById = id => houses.find(house => house.id === id);

  handleZoomPanelClick = event => {
    //find coordinates of mouse click
    const bounds = event.target.getBoundingClientRect();
    console.log('bounds', bounds, event.clientX, event.clientY)
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;

    //translate those coordinates in percentage that can used on big map
    const positionX = getPercent(x, bounds.width);
    const positionY = getPercent(y, bounds.height);

    console.dir(this.mapImageContainer);

    //position the big map viewport to match mini map viewport indicator
    this.mapImageContainer.scrollLeft = getValueFromPercent(positionX, this.mapImageContainer.scrollWidth) - this.mapImageContainer.clientWidth/2;
    this.mapImageContainer.scrollTop = getValueFromPercent(positionY, this.mapImageContainer.scrollHeight) - this.mapImageContainer.clientHeight/2;
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
      mapViewportIndicatorWidth,
      mapViewportIndicatorHeight,
      mapViewportIndicatorPositionTop,
      mapViewportIndicatorPositionLeft,
      selectedHouse
    } = this.state;


    return (
      <>
        <Header color={selectedHouse ? selectedHouse.backgroundColor : "#000"}/>
        <MapContainer>
          <BigMap
            ref={c => this.mapImageContainer = c}
            houses={houses}
            handleHouseClick={this.handleHouseClick}
          />
          <MiniZoomMap
            onClick={e => this.handleZoomPanelClick(e)}
            mapImageContainer={this.mapImageContainer}
            mapViewportIndicator={
              {
                width: mapViewportIndicatorWidth,
                height: mapViewportIndicatorHeight,
                positionTop: mapViewportIndicatorPositionTop,
                positionLeft: mapViewportIndicatorPositionLeft,
              }}
            selectedHouse={selectedHouse}
            houses={houses}
          />
          {selectedHouse && <HouseDetailsContainer
            house={selectedHouse}
            handleSidebarClose={this.closeSidePanel}
          >
          </HouseDetailsContainer>}
        </MapContainer>
      </>
    )
  }

}

export default Map;

