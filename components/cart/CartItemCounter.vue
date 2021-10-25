<script>
export default {
  name: 'CartItemCounter',
  props: {
    count: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      value: 1,
    };
  },
  methods: {
    onInput() {
      this.value = Math.min(Math.max(this.value, 1), this.count);
      this.$emit('change', this.value);
    },
  },
};
</script>

<template>
  <div class="cart-item-counter">
    <div class="cart-item-counter__row">
      <input ref="input" v-model="value" pattern="^[ 0-9]+$" class="cart-item-counter__input" @input="onInput" />
      <div class="cart-item-counter__label">шт.</div>
    </div>
    <div v-if="count < 3" class="cart-item-counter__note">Количество ограничено</div>
  </div>
</template>

<style lang="scss">
.cart-item-counter {
  &__row {
    display: flex;
    width: 100%;
  }
  &__input {
    width: 60%;
  }
  &__label {
    margin-left: em(10px);
  }
  &__note {
    color: orange;
    font-size: em(14px);
  }
}
</style>
