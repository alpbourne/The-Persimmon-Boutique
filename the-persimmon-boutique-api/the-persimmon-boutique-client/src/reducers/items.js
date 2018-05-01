export default (state = [], action) => {
  switch(action.type) {
    case 'GET_ITEMS':
      return action.items;

    case 'INCREASE_LIKES':
      return state.map(item => item.id === action.item.id  ? action.item : item)
    default:
      return state;
  }
}
