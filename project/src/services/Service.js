import axios from 'axios';

const BASE_URL = 'https://api.github.com';

const getUsers = async (searchText) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/users?q=${searchText}`);
    return response.data.items;
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
};

const getUserDetails = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user details:', error);
    return null;
  }
};

export { getUsers, getUserDetails };