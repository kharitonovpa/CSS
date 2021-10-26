<script>
import { mapState, mapGetters, mapMutations } from 'vuex';
import Spoiler from '../common/Spoiler';
import GoodsItem from './GoodsItem';
export default {
  name: 'Goods',
  components: { GoodsItem, Spoiler },
  computed: {
    ...mapGetters('core', ['groups', 'getGoodsByGroupId']),
    ...mapState('cart', ['items']),
  },

  methods: {
    ...mapMutations('cart', ['addItem', 'setItemCountInCart']),
    onGoodClick(good) {
      const exist = this.items.find((item) => item.id === good.id);
      if (exist) {
        if (exist.countInCart < good.count) this.setItemCountInCart({ id: good.id, value: exist.countInCart + 1 });
      } else {
        this.addItem(good);
      }
    },
  },
};
</script>

<template>
  <div class="goods">
    <div class="goods__inner">
      <Spoiler
        v-for="group in groups"
        v-if="getGoodsByGroupId(group.id) && getGoodsByGroupId(group.id).length"
        :key="group.id"
        :title="group.name"
        class="goods__spoiler"
      >
        <div class="goods__list">
          <GoodsItem
            v-for="good in getGoodsByGroupId(group.id)"
            :key="good.id"
            :name="good.name"
            :price="good.price"
            :count="+good.count"
            class="goods__item"
            @click.native="onGoodClick(good)"
          />
        </div>
      </Spoiler>
    </div>
  </div>
</template>

<style lang="scss">
.goods {
}
</style>
