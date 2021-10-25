<script>
import Goods from '../components/goods/Goods';
import Cart from '../components/cart/Cart';
export default {
  components: { Cart, Goods },
};
</script>

<template>
  <div class="page page-index">
    <Goods class="page-index__goods" />
    <Cart class="page-index__cart" />
  </div>
</template>

<style lang="scss">
.page-index {
  display: flex;
  align-items: flex-start;
  &__goods {
    width: 60%;
  }
  &__cart {
    width: 40%;
  }
}
</style>
