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
  data() {
    return {
      changeClass: '',
    };
  },
  watch: {
    price(newVal, oldVal) {
      this.changeClass = newVal > oldVal ? 'red' : 'green';
      setTimeout(() => {
        this.changeClass = '';
      }, 300);
    },
  },
};
</script>

<template>
  <div :class="changeClass ? `goods-item_${changeClass}` : ''" class="goods-item">
    <div class="goods-item__label">{{ `${name}(${count})` }}</div>
    <div class="goods-item__price">{{ price.toFixed(2) }}&nbsp;&#8381;</div>
  </div>
</template>

<style lang="scss">
.goods-item {
  cursor: pointer;
  display: flex;
  align-items: center;
  &_red {
    background-color: rgba(red, 0.1);
  }
  &_green {
    background-color: rgba(green, 0.1);
  }
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
