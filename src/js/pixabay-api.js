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
  try {
    const { data } = await axios.get(fullUrl);
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
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
