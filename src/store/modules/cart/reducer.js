import produce from 'immer';

export default function cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD_SUCCES':
      return produce(state, (oldstate) => {
        const productIndex = oldstate.findIndex(
          (p) => p.id === action.product.id
        );
        if (productIndex >= 0) {
          oldstate[productIndex].amount += 1;
        } else {
          oldstate.push({ ...action.product, amount: 1 });
        }
      });
    case '@cart/REMOVE':
      return produce(state, (oldstate) => {
        const productIndex = oldstate.findIndex((p) => p.id === action.id);
        if (productIndex >= 0) {
          oldstate.splice(productIndex, 1);
        }
      });
    case '@cart/UPDATE':
      return produce(state, (oldstate) => {
        if (action.amount <= 0) {
          return state;
        }
        const productIndex = oldstate.findIndex((p) => p.id === action.id);
        if (productIndex >= 0) {
          oldstate[productIndex].amount = Number(action.amount);
        }
      });
    default:
      return state;
  }
}
