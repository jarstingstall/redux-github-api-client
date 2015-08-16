import { REQUEST_VIDEOS, RECEIVE_VIDEOS } from '../constants';

export function videos(state = [], action) {
  switch (action.type) {
    case RECEIVE_VIDEOS:
      return action.videos;
      break;
    default:
      return state;
  }
}

export function isFetching(state = false, action) {
  switch (action.type) {
    case REQUEST_VIDEOS:
      return true;
    case RECEIVE_VIDEOS:
      return false;
    default:
      return state;
  }
}

export function searchTerm(state = '', action) {
  switch (action.type) {
    case REQUEST_VIDEOS:
      return action.search;
      break;
    default:
      return state;
  }
}
