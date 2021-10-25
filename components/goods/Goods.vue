<script>
import { mapGetters, mapMutations } from 'vuex';
import Spoiler from '../common/Spoiler';
import GoodsItem from './GoodsItem';
export default {
  name: 'Goods',
  components: { GoodsItem, Spoiler },
  computed: {
    ...mapGetters('core', ['groups', 'getGoodsByGroupId']),
  },

  methods: {
    ...mapMutations('cart', ['addItem']),
  },
};
</script>

<template>
  <div class="goods">
    <div class="goods__inner">
      <Spoiler v-for="group in groups" :key="group.id" :title="group.name" class="goods__spoiler">
        <div class="goods__list">
          <GoodsItem
            v-for="good in getGoodsByGroupId(group.id)"
            :key="good.id"
            :name="good.name"
            :price="good.price"
            :count="+good.count"
            class="goods__item"
            @click.native="addItem(good)"
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
