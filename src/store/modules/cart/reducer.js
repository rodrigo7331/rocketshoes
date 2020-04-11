import produce from 'immer';

export default function cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD_SUCCES':
      return produce(state, (oldstate) => {
        const { product } = action;
        oldstate.push(product);
      });
    case '@cart/REMOVE':
      return produce(state, (oldstate) => {
        const productIndex = oldstate.findIndex((p) => p.id === action.id);
        if (productIndex >= 0) {
          oldstate.splice(productIndex, 1);
        }
      });
    case '@cart/UPDATE_AMOUNT_SUCCESS':
      return produce(state, (oldstate) => {
        const productIndex = oldstate.findIndex((p) => p.id === action.id);
        if (productIndex >= 0) {
          oldstate[productIndex].amount = Number(action.amount);
        }
      });
    default:
      return state;
  }
}
