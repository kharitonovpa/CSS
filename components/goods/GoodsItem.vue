<script>
export default {
  name: 'GoodsItem',
  props: {
    name: {
      type: String,
      default: '',
    },
    price: {
      type: Number,
      default: 0,
    },
    count: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<template>
  <div class="goods-item">
    <div class="goods-item__label">{{ `${name}(${count})` }}</div>
    <div class="goods-item__price">{{ price.toFixed(2) }}&nbsp;&#8381;</div>
  </div>
</template>

<style lang="scss">
.goods-item {
  cursor: pointer;
  display: flex;
  align-items: center;
  &:hover {
    text-decoration: underline;
    background-color: rgba(blue, 0.03);
  }
  &__label {
    width: 80%;
    padding: em(10px);
  }
  &__price {
    padding: em(10px);
    flex-grow: 1;
    text-align: center;
  }
}
</style>
