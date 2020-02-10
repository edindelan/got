import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ListContainer,
  Pagination,
  List,
  ListWrapper,
} from './styles';
import {
  getHouses,
  getHouse,
} from '../../service';
import { silentUrlChange } from '../../utils';
import Header from '../../components/header';
import HouseDetailsSidebar from '../map/components/house-details-sidebar';
import swords from '../../assets/swords.svg';

const getHouseId = (house) => house.url.replace('https://anapioficeandfire.com/api/houses/', '');

class HousesList extends Component {
  constructor() {
    super();
    this.state = {
      houses: [],
      currentPage: undefined,
      selectedHouse: null,
      loading: false,
    };
  }

  componentDidMount() {
    const { currentPage } = this.state;
    const { match: { params } } = this.props;
    this.changePage(params.pageId || currentPage);
  }

  changePage = async (page = 1) => {
    const { selectedHouse } = this.state;
    const { match: { params } } = this.props;
    if (page >= 1) {
      const houses = await getHouses(page);
      this.setState({
        houses,
        currentPage: page,
      }, () => {
        silentUrlChange(`/list/${page}`);
      });

      if (params.houseId && !selectedHouse) {
        const house = await getHouse(params.houseId);
        this.setState({
          selectedHouse: house,
        }, () => {
          silentUrlChange(`/list/${page}/house/${params.houseId}`);
        });
      }
    }
  }

  selectHouse = async (house) => {
    const { currentPage } = this.state;
    this.setState({ loading: true });
    const selectedHouse = await getHouse(getHouseId(house));
    this.setState({
      selectedHouse,
      loading: false,
    }, () => {
      silentUrlChange(`/list/${currentPage}/house/${getHouseId(selectedHouse)}`);
    });
  }

  handleSidebarClose = () => {
    const { currentPage } = this.state;
    this.setState({
      selectedHouse: null,
    }, () => {
      silentUrlChange(`/list/${currentPage}`);
    });
  }

  render() {
    const {
      houses,
      selectedHouse,
      currentPage,
      loading,
    } = this.state;

    return (
      <ListContainer>
        <Header />
        <ListWrapper>
          <List>
            <table>
              <thead>
                <tr>
                  <th />
                  <th>House name</th>
                  <th>Region</th>
                  <th>Sworn members</th>
                </tr>
              </thead>
              <tbody>
                {houses.map((house) => (
                  <tr key={house.url} onClick={() => this.selectHouse(house)}>
                    <td>{getHouseId(house)}</td>
                    <td>
                      <img width={15} src={swords} alt="" />
                      {house.name}
                    </td>
                    <td>{house.region}</td>
                    <td>{house.swornMembers.length}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </List>
          <Pagination>
            <div onClick={() => this.changePage(parseInt(currentPage, 10) - 1)}>Previous</div>
            <div>{currentPage}</div>
            <div onClick={() => this.changePage(parseInt(currentPage, 10) + 1)}>Next</div>
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
    );
  }
}

export default HousesList;

HousesList.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};
HousesList.defaultProps = {};
