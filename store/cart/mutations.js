export default {
  addItem: (state, item) => {
    state.items.push(Object.assign({}, item, { countInCart: 1 }));
  },
  setItemCountInCart: (state, { id, value }) => {
    const good = state.items.find((good) => good.id === id);
    good.countInCart = value;
  },
  removeItem: (state, item) => state.item.push(item),
};
