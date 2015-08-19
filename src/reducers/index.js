import { REQUEST_VIDEOS, RECEIVE_VIDEOS, PLAY_VIDEO, CLOSE_MODAL } from '../constants';

export function videos(state = [], action) {
  switch (action.type) {
    case RECEIVE_VIDEOS:
      return action.videos;
      break;
    default:
      return state;
  }
}

export function currentlyPlaying(state = {}, action) {
  switch (action.type) {
    case PLAY_VIDEO:
      return action.video;
    case CLOSE_MODAL:
      return {};
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
    default:
      return state;
  }
}

export function modalIsOpen(state = false, action) {
  switch (action.type) {
    case PLAY_VIDEO:
      return true;
    case CLOSE_MODAL:
      return false;
    default:
      return state;
  }
}
