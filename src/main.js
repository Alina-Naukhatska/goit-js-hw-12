import { fetchImages } from './js/pixabay-api';
import { renderGallery, clearGallery, showLoadingIndicator, hideLoadingIndicator } from './js/render-functions';
import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';

let lightbox = new SimpleLightbox('.gallery a');
const form = document.getElementById('search-form');
const loadMoreButton = document.getElementById('load-more');

let query = '';
let page = 1;
let totalHits = 0;

form.addEventListener('submit', (event) => {
  event.preventDefault();
  query = event.target.elements.query.value.trim();
  if (!query) {
    iziToast.error({ message: 'Please enter a search term.' });
    return;
  }

  resetSearch();
  fetchAndRenderImages();
});

loadMoreButton.addEventListener('click', fetchAndRenderImages);

async function fetchAndRenderImages() {
  try {
    showLoadingIndicator();
    const data = await fetchImages(query, page);
    totalHits = data.totalHits;
    const images = data.hits;

    if (images.length === 0 && page === 1) {
      iziToast.warning({ message: 'Sorry, no images found. Please try again!' });
    } else {
      renderGallery(images);
      lightbox.refresh();
      loadMoreButton.classList.toggle('hidden', totalHits <= page * 15);
      smoothScroll();
      page++;
    }

    if (page * 15 >= totalHits) {
      loadMoreButton.classList.add('hidden');
      iziToast.info({ message: "We're sorry, but you've reached the end of search results." });
    }
  } catch (error) {
    iziToast.error({ message: 'An error occurred while fetching images. Please try again later.' });
  } finally {
    hideLoadingIndicator();
  }
}

function resetSearch() {
  clearGallery();
  page = 1;
  loadMoreButton.classList.add('hidden');
}

function smoothScroll() {
  const galleryItemHeight = document.querySelector('.gallery-item').getBoundingClientRect().height;
  window.scrollBy({
    top: galleryItemHeight * 2,
    behavior: 'smooth',
  });
}
