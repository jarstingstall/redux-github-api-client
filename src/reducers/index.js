import { UPDATE_MESSAGE } from '../constants';

export function videos(state = [], action) {
  switch (action.type) {
    case UPDATE_MESSAGE:
      return {
        text: action.text,
        color: action.color
      }
    default:
      return state;
  }
}
