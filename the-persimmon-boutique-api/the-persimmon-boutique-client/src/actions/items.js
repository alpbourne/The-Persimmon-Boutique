const increaseLikeCount = like => {
  return {
    type: 'INCREASE_LIKES',
    like
  }
}

export const increaseLikes = like => {
  return dispatch => {
    return fetch(`http://localhost:3001/api/items/${item.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(review => dispatch(increaseLikeCount(like)))
      .catch(error => console.log(error));
  }
}
