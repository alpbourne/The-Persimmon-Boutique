export default (state = {
  author: '',
  body: '',
}, action) => {
  switch(action.type) {
    case 'UPDATED_DATA':
      return action.itemFormData
    default:
      return state;
  }
}
