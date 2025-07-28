import axios from "axios";

const PIXABAY_API_KEY = '51515055-b2242b2c2bb3789f16bb88f14'

const apiUrl = `https://pixabay.com/api/?key=${PIXABAY_API_KEY}`

const formatUrl = (params) => {
  let url = apiUrl + "&per_page=25&safesearch=true&editoes_choice=true";
  if (!params) {
    return url;
  }
  let paramKeys = Object.keys(params);
  paramKeys.map(key => {
    let value = key == 'q' ? encodeURIComponent(params[key]) : params[key];
    url = url + `&${key}=${value}`
  });
  console.log('Final url - ', url);
  return url;
}

export const apiCall = async (params) => {
  try {
    const response = await axios(formatUrl(params))
    return response;
  } catch (error) {
    console.log('Error - ', error.message);
    return { success: false, msg: error.message }
  }
}