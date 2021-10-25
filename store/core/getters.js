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
        },
      );
    });
  },
};
