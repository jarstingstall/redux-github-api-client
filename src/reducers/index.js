export function message(state = 'Hello World', action) {
  switch (action.type) {
    case UPDATE_MESSAGE:
      return action.message;
    default:
      return state;
  }
}
