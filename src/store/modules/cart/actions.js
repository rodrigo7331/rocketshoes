export function addToCartRequest(id) {
  return {
    type: '@cart/REQUEST',
    id,
  };
}

export function addToCartSucces(product) {
  return {
    type: '@cart/ADD_SUCCES',
    product,
  };
}

export function removeFromCart(id) {
  return {
    type: '@cart/REMOVE',
    id,
  };
}

export function updateAmount(id, amount) {
  return {
    type: '@cart/UPDATE',
    id,
    amount,
  };
}
