export default {
  goods: (state) => {
    return state.data.Value.Goods.map((item) => {
      return Object.assign(
        {},
        {
          id: item.T,
          groupId: item.G,
          price: item.C * state.rate,
          count: item.P,
          name: state.names[item.G].B[item.T].N,
        },
      );
    });
  },
  groups: (state) => {
    const res = [];
    for (const key in state.names) {
      res.push({ id: +key, name: state.names[key].G });
    }
    return res;
  },
  getGoodsByGroupId: (state, getters) => (id) => {
    return getters.goods.filter((item) => item.groupId === id);
  },
};
