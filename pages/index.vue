<script>
import { mapMutations, mapState } from 'vuex';
import Goods from '../components/goods/Goods';
import Cart from '../components/cart/Cart';
export default {
  components: { Cart, Goods },
  data() {
    return {
      interval: null,
    };
  },
  computed: {
    ...mapState('core', ['data']),
  },
  async mounted() {
    await this.refresh();
    this.interval = setInterval(() => {
      this.refresh();
    }, 15000);
  },
  methods: {
    ...mapMutations('core', ['setData', 'setRate']),
    async refresh() {
      this.setRate(20 + Math.random() * (80 + 1 - 20));
      await fetch('/data.json')
        .then((response) => response.json())
        .then((data) => {
          this.setData(data);
        });
    },
  },
};
</script>

<template>
  <div v-if="data" class="page page-index">
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
