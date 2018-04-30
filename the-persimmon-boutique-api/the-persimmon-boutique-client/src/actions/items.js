const setItems = items => {
  return {
    type: 'GET_ITEMS',
    items
  }
}

export const getItems = () => {
  return dispatch => {
    return fetch('http://localhost:3001/api/items')
      .then(response => response.json())
      .then(items => dispatch(setItems(items)))
      .catch(error => console.log(error));
  }
}

const increaseLikeCount = item => {
  return {
    type: 'INCREASE_LIKES',
    item
  }
}

export const increaseLikes = item => {
  return dispatch => {
    return fetch(`http://localhost:3001/api/items/${item.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(like => dispatch(increaseLikeCount(item)))
      .catch(error => console.log(error));
  }
}
