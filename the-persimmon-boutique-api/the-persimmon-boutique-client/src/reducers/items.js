export default (state = [], action) => {
  switch(action.type) {
    case 'INCREASE_LIKES':
      return action.like;
    default:
      return state;
  }
}
