const BASE_URL = "https://anapioficeandfire.com";

export default {
  getHouses: (page, pageSize) => `${BASE_URL}/api/houses?page=${page}&pageSize=${pageSize}`,
  getHouse: id => `${BASE_URL}/api/houses/${id}`
};
