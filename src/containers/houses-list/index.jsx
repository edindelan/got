import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ListContainer,
  HouseDetails,
  Pagination,
  List,
  ListWrapper
} from './styles';
import {
  getHouses,
  getHouse
} from '../../service';
import Header from '../../components/header';
import HouseDetailsSidebar from '../map/components/house-details-sidebar';
import swords from '../../assets/swords.svg';

const getHouseId = (house) => {
  return house.url.replace('https://anapioficeandfire.com/api/houses/', '');
}

class HousesList extends Component {
  constructor() {
    super();
    this.state = {
      houses: [],
      currentPage: 1,
      selectedHouse: null,
      loading: false
    }
  }

  componentDidMount() {
    const { currentPage } = this.state;
    this.changePage(currentPage)
  }

  changePage = async page => {
    if(page >= 1) {
      const houses = await getHouses(page);
      this.setState({
        houses,
        currentPage: page
      })
    }
  }

  selectHouse = async house => {
    this.setState({loading: true});
    const selectedHouse = await getHouse(getHouseId(house));
    this.setState({
      selectedHouse,
      loading: false
    })
  }

  handleSidebarClose = () => {
    this.setState({
      selectedHouse: null
    })
  }

  render() {
    const {
      houses,
      selectedHouse,
      currentPage,
      loading
    } = this.state;
    return (
      <ListContainer>
        <Header/>
        <ListWrapper>
          <List>
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>House name</th>
                  <th>Region</th>
                  <th>Sworn members</th>
                </tr>
              </thead>
              <tbody>
              {houses.map(house => (
                <tr key={house.url} onClick={() => this.selectHouse(house)}>
                  <td>{getHouseId(house)}</td>
                  <td><img width={15} src={swords} alt=""/>{house.name}</td>
                  <td>{house.region}</td>
                  <td>{house.swornMembers.length}</td>
                </tr>
              ))}
              </tbody>
            </table>
          </List>
          <Pagination>
            <div>{loading && "loading"}</div>
            <div onClick={() => this.changePage(currentPage - 1)}>Previous</div>
            <div>{currentPage}</div>
            <div onClick={() => this.changePage(currentPage + 1)}>Next</div>
          </Pagination>
        </ListWrapper>
        {selectedHouse && (
          <HouseDetailsSidebar
            house={selectedHouse}
            handleSidebarClose={this.handleSidebarClose}
            loading={loading}
          />
        )}
      </ListContainer>
    )
  }
}

export default HousesList;

HousesList.propTypes = {};
HousesList.defaultProps = {};
