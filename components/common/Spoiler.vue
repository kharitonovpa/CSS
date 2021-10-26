<script>
export default {
  name: 'Spoiler',
  props: {
    title: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      isActive: true,
    };
  },
  methods: {
    onChangeActive() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<template>
  <div v-if="title" :class="{ is_active: isActive }" class="spoiler">
    <div class="spoiler__wrapper">
      <VText size="regular" class="spoiler__header" @click.native="onChangeActive">
        {{ title }}
      </VText>
      <transition name="fade">
        <div v-show="isActive" class="spoiler__content">
          <slot />
        </div>
      </transition>
    </div>
  </div>
</template>

<style lang="scss">
.spoiler {
  &.is_active {
    .spoiler__header:after {
      transform: scaleY(-1);
    }
  }
  &__header {
    background-color: antiquewhite;
    font-size: em(20px);
    padding: em(12px, 20px);
    cursor: pointer;
    user-select: none;
    line-height: 1.4;
    position: relative;
    &:after {
      content: '';
      position: absolute;
      font-size: em(16px, 20px);
      right: em(20px);
      @extend %icon-arrow;
      top: 50%;
      margin-top: em(-5px);
      transition: transform 0.3s;
      transform: scaleY(1);
    }
  }
}
</style>
