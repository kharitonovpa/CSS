export default {
  total: (state) => state.items.reduce((acc, cur) => acc + cur.countInCart * cur.price, 0),
};
