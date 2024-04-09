import { getDataFromAPI } from './js/pixabay-api';
import { renderGalleryImg } from './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import iconError from './img/icon-error.svg';

const userKey = '43191917-c04fdef32fb86ad7b3c63ee66';
const baseUrl = 'https://pixabay.com/api/';

const formEl = document.querySelector('.search-form');
const galleryEl = document.querySelector('.gallery');
const loaderWrapperEl = document.querySelector('.loader-wrapper ');

formEl.addEventListener('submit', onSubmitForm);

function onSubmitForm(e) {
  e.preventDefault();
  galleryEl.innerHTML = '';
  loaderWrapperEl.classList.remove('is-hidden');

  const inputSearchValue = e.currentTarget.search.value.trim();

  if (!inputSearchValue) {
    displayErrorMessage('Please enter a value in the field!', 'Error');
    e.currentTarget.reset();
    loaderWrapperEl.classList.add('is-hidden');
    return;
  }

  getDataFromAPI(baseUrl, userKey, inputSearchValue)
    .then(data => {
      const formData = data.hits;
      if (formData.length === 0) {
        displayErrorMessage(
          'Sorry, there are no images matching your search query. Please try again!'
        );

        loaderWrapperEl.classList.add('is-hidden');
        return;
      }

      renderGalleryImg(galleryEl, formData);
      loaderWrapperEl.classList.add('is-hidden');
    })
    .catch(error => {
      displayErrorMessage(
        'Error fetching data. Please try again later',
        'Error'
      );
      console.error('Error fetching data:', error);
    });

  e.currentTarget.reset();
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
