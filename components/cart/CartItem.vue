<script>
import { mapMutations } from 'vuex';
import CartItemCounter from './CartItemCounter';
export default {
  name: 'CartItem',
  components: { CartItemCounter },
  props: {
    name: {
      type: String,
      default: '',
    },
    id: {
      type: Number,
      default: 0,
    },
    count: {
      type: Number,
      default: 0,
    },
    countInCart: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    ...mapMutations('cart', ['setItemCountInCart']),
    setCountItem(count) {
      this.setItemCountInCart({ id: this.id, value: count });
    },
  },
};
</script>

<template>
  <div class="cart-item">
    <div class="cart-item__col cart-item__col_1">{{ name }}</div>
    <div class="cart-item__col cart-item__col_2">
      <CartItemCounter :count="count" :count-in-cart="countInCart" class="cart-item__counter" @change="setCountItem" />
    </div>
    <div class="cart-item__col cart-item__col_3">
      <strong>{{ price.toFixed(2) }}&nbsp;руб.</strong>
      <span>/ шт</span>
    </div>
  </div>
</template>

<style lang="scss">
.cart-item {
  display: flex;
  &__col {
    &_1 {
      width: 50%;
    }
    &_2 {
      width: 20%;
    }
    &_3 {
      width: 30%;
    }
  }
}
</style>
