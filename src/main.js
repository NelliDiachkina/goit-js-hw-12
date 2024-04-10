import { getDataFromAPI } from './js/pixabay-api';
import { renderGalleryImg } from './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import iconError from './img/icon-error.svg';

const userKey = '43191917-c04fdef32fb86ad7b3c63ee66';
const baseUrl = 'https://pixabay.com/api/';
let currentPage = 1;
let limitPageContent = 15;
let currentSearchQuery = null;
let totalContent = null;

const formEl = document.querySelector('.search-form');
const galleryEl = document.querySelector('.gallery');
const loaderWrapperEl = document.querySelector('.loader-wrapper ');
const btnLoadMore = document.querySelector('.load-more-btn');

formEl.addEventListener('submit', onSubmitForm);
btnLoadMore.addEventListener('click', onLoadMoreButtonClick);

function onSubmitForm(e) {
  e.preventDefault();
  galleryEl.innerHTML = '';
  btnLoadMore.classList.add('is-hidden');
  currentPage = 1;

  const inputSearchValue = e.currentTarget.search.value.trim();

  if (!inputSearchValue) {
    displayErrorMessage('Please enter a value in the field!', 'Error');
    e.currentTarget.reset();
    return;
  }

  loaderWrapperEl.classList.remove('is-hidden');
  fetchData(baseUrl, userKey, inputSearchValue, currentPage, limitPageContent);

  e.currentTarget.reset();
}

async function fetchData(
  baseUrl,
  userKey,
  inputSearchValue,
  page,
  limitPageContent
) {
  try {
    const data = await getDataFromAPI(
      baseUrl,
      userKey,
      inputSearchValue,
      page,
      limitPageContent
    );
    const formData = data.hits;

    if (formData.length === 0) {
      displayErrorMessage(
        'Sorry, there are no images matching your search query. Please try again!'
      );
      return;
    }

    currentSearchQuery = inputSearchValue;
    totalContent = data.totalHits;

    renderGalleryImg(galleryEl, formData);

    btnLoadMore.classList.remove('is-hidden');
    smoothScroll();
  } catch (error) {
    displayErrorMessage('Error fetching data. Please try again later', 'Error');
    console.error('Error fetching data:', error);
  } finally {
    loaderWrapperEl.classList.add('is-hidden');
  }
}

function onLoadMoreButtonClick() {
  const totalPages = Math.ceil(totalContent / limitPageContent);

  if (currentPage >= totalPages) {
    btnLoadMore.classList.add('is-hidden');
    displayErrorMessage(
      'We are sorry, but you have reached the end of search results',
      'Error'
    );
    return;
  }

  currentPage += 1;
  loaderWrapperEl.classList.remove('is-hidden');
  fetchData(
    baseUrl,
    userKey,
    currentSearchQuery,
    currentPage,
    limitPageContent
  );
}

function smoothScroll() {
  const galleryItem = document.querySelector('.gallery-item');
  const galleryItemHeight = galleryItem.getBoundingClientRect().height;

  window.scrollBy({
    top: galleryItemHeight * 2,
    behavior: 'smooth',
  });
}

const iziToastConfig = {
  position: 'topRight',
  titleColor: '#FFF',
  titleSize: '16',
  titleLineHeight: '24',
  messageColor: '#FFF',
  messageSize: '16',
  messageLineHeight: '24',
};

function displayErrorMessage(message, title) {
  iziToast.error({
    ...iziToastConfig,
    title: title || '',
    message: `${message}`,
    backgroundColor: '#EF4040',
    iconUrl: iconError,
  });
}