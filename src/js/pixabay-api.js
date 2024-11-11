import axios from 'axios';

const API_KEY = '46876672-e8b342777c96e71d5bef3ef8d';
const BASE_URL = 'https://pixabay.com/api/';
const PER_PAGE = 15;

export async function fetchImages(query, page = 1) {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page,
      per_page: PER_PAGE,
    },
  });

  if (response.status !== 200) throw new Error('Failed to fetch images');
  return response.data;
}
