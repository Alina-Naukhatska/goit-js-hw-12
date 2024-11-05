const API_KEY = '46876672-e8b342777c96e71d5bef3ef8d';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query) {
  const response = await fetch(
    `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true`
  );
  if (!response.ok) throw new Error('Failed to fetch images');
  const data = await response.json();
  return data.hits;
}
