export default (state = [], action) => {
  switch(action.type) {
    case 'GET_ITEMS':
      return action.items;

    case 'INCREASE_LIKES':
      const items = this.state.items.filter(item => item.id !== action.item.id);
      return Object.assign(items, action.item);

    default:
      return state;
  }
}
