export default {
  goods: (state) => {
    return state.data.Value.Goods.map((item) => {
      return Object.assign(
        {},
        {
          id: item.T,
          groupId: item.G,
          priceDollar: item.C,
          count: item.P,
          name: state.names[item.G].B[item.T].N,
        },
      );
    });
  },
  groups: (state) => {
    const res = [];
    for (const key in state.names) {
      res.push({ id: key, name: state.names[key].G });
    }
    return res;
  },
};
