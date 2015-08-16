import { REQUEST_VIDEOS, RECEIVE_VIDEOS } from '../constants';
import axios from 'axios';

const API_KEY = 'AIzaSyCgF9GGsJiYScC8_qzM9D6HfX7TC_2ioi4';

function requestVideos(search) {
  return {
    type: REQUEST_VIDEOS,
    search
  }
}

function receiveVideos(response, search) {
  return {
    type: RECEIVE_VIDEOS,
    videos: response.data.items
  }
}

export function fetchVideos(search) {
  return dispatch => {
    dispatch(requestVideos(search));
    return axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${search}&order=date&maxResults=20&key=${API_KEY}`)
      .then(response => dispatch(receiveVideos(response)));
  }
}
