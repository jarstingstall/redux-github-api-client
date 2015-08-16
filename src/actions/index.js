import { REQUEST_VIDEOS, RECEIVE_VIDEOS } from '../constants';

function requestVideos(search) {
  return {
    type: REQUEST_VIDEOS,
    search
  }
}
