import API from '../api';
import { displayServerError } from '../utils';

export const getHouses = async (page = 1, pageSize = 50) => {
  const res = await fetch(API.getHouses(page, pageSize));
  if (!res.ok) {
    displayServerError(API.getHouses(page, pageSize), res.status);
  } else {
    return res.json();
  }
};

export const getHouse = async (id) => {
  const houseRes = await fetch(API.getHouse(id));
  if (!houseRes.ok) {
    displayServerError(API.getHouse(id), houseRes.status);
  } else {
    const house = await houseRes.json();

    if (house.currentLord) {
      const currentLordData = await getCurrentLord(house.currentLord);
      return {
        ...house,
        currentLordData
      };
    }

    return {
      ...house,
      currentLordData: null
    };
  }

};

const getCurrentLord = async (url) => {
  const res = await fetch(url);
  return res.json();
};
