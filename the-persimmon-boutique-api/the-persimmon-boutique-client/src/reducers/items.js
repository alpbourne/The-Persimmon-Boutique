export default (state = [], action) => {
  switch(action.type) {
    case 'GET_ITEMS':
      return action.items;

    case 'INCREASE_LIKES':
      const items = state.filter(item => item.id !== action.item.id);
      return [...items, action.item];

    default:
      return state;
  }
}
