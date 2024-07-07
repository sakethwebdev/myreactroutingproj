
export const incrementQuantity = (itemId) => ({
    type: 'INCREMENT_QUANTITY',
    payload: itemId,
  });
  export const decrementQuantity = (itemId) => ({
    type: 'DECREMENT_QUANTITY',
    payload: itemId,
  }); 