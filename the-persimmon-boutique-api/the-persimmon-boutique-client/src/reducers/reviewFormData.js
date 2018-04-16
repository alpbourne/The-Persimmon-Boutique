export default (state = {
  author: '',
  body: '',
}, action) => {
  switch(action.type) {
    case 'UPDATED_DATA':
      return action.reviewFormData
    default:
      return state;
  }
}
