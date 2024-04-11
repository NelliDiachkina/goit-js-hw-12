import axios from 'axios';

export async function getDataFromAPI(
  baseUrl,
  userKey,
  inputValue,
  page,
  limitPageContent
) {
  const fullUrl = buildFullUrl(
    baseUrl,
    userKey,
    inputValue,
    page,
    limitPageContent
  );

  const { data } = await axios.get(fullUrl);
  return data;
}

function buildFullUrl(baseUrl, userKey, inputValue, page, limitPageContent) {
  const searchParams = new URLSearchParams({
    key: userKey,
    q: inputValue,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    page: page,
    per_page: limitPageContent,
  });
  return `${baseUrl}?${searchParams}`;
}
