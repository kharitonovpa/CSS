<script>
import { mapState, mapGetters } from 'vuex';
import CartItem from './CartItem';
export default {
  name: 'Cart',
  components: { CartItem },
  computed: {
    ...mapState('cart', ['items']),
    ...mapGetters('cart', ['total']),
  },
};
</script>

<template>
  <div class="cart">
    <div class="cart__inner">
      <div class="cart__title">Корзина</div>
      <div v-if="items && items.length" class="cart__content">
        <div class="cart__row cart__row_label">
          <div class="cart__col cart__col_1">Наименование товара и описание</div>
          <div class="cart__col cart__col_2">Количество</div>
          <div class="cart__col cart__col_3">Цена</div>
        </div>
        <div class="cart__list">
          <CartItem
            v-for="item in items"
            :id="item.id"
            :key="item.id"
            :name="item.name"
            :price="item.price"
            :count-in-cart="item.countInCart"
            :count="item.count"
            class="cart__item"
          />
        </div>
        <div class="cart__total">{{ total }}</div>
      </div>
      <div v-else class="cart__empty">Добавьте товар в корзину</div>
    </div>
  </div>
</template>

<style lang="scss">
.cart {
  border: 1px solid antiquewhite;
  padding: em(16px);
  &__title {
    font-weight: 700;
    font-size: em(20px);
    text-align: center;
    padding: em(10px, 20px);
  }
  &__row {
    display: flex;
    align-items: center;
    // text-align: center;
  }
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
  &__empty {
    align-items: center;
  }
}
</style>
