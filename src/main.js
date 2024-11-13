import { fetchImages } from './js/pixabay-api';
import { renderGallery, clearGallery, showLoadingIndicator, hideLoadingIndicator } from './js/render-functions';
import iziToast from 'izitoast';
import 'simplelightbox/dist/simple-lightbox.min.css';
import SimpleLightbox from 'simplelightbox';
import axios from 'axios';

let lightbox = new SimpleLightbox('.gallery a');

const form = document.getElementById('search-form');
const loadMoreButton = document.getElementById('load-more');
let currentPage = 1;
let currentQuery = '';
let totalHits = 0;

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  currentQuery = event.target.elements.query.value.trim();
  if (!currentQuery) {
    iziToast.error({ message: 'Please enter a search term.' });
    return;
  }

  resetSearch();
  fetchAndRenderImages();
});

loadMoreButton.addEventListener('click', () => {
  currentPage += 1;
  fetchAndRenderImages(true);
});

function resetSearch() {
  currentPage = 1;
  clearGallery();
  loadMoreButton.classList.add('hidden');
}

async function fetchAndRenderImages(isLoadMore = false) {
  showLoadingIndicator();

  try {
    const { images, hits } = await fetchImages(currentQuery, currentPage);

    if (images.length === 0) {
      iziToast.warning({ message: 'Sorry, there are no images matching your search query. Please try again!' });
      hideLoadingIndicator();
      loadMoreButton.classList.add('hidden');
      return;
    }

    renderGallery(images);
    lightbox.refresh();

    totalHits = hits;

    if (isLoadMore) {
      smoothScroll();
    }

    if (currentPage * 15 >= totalHits) {
      iziToast.info({ message: "We're sorry, but you've reached the end of search results." });
      loadMoreButton.classList.add('hidden');
    } else {
      loadMoreButton.classList.remove('hidden');
    }
  } catch (error) {
    console.error('Error fetching images:', error);
    iziToast.error({ message: 'An error occurred while fetching images. Please try again later.' });
  } finally {
    hideLoadingIndicator();
  }
}

function smoothScroll() {
  const { height: cardHeight } = document.querySelector('.gallery-item').getBoundingClientRect();
  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}
