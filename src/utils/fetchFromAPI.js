// FetchFromAPI.js
import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com/';
const options = {
  params: {
    maxResults: '50',
  },
  headers: {
    'X-RapidAPI-Key': '2ebc2a5fe2msh8be428658daecddp1cbb87jsn5b93313468ce',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}${url}`, options);
  return data;
};
