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
  &__header {
    background-color: antiquewhite;
    font-size: em(20px);
    padding: em(12px, 20px);
    cursor: pointer;
    user-select: none;
    line-height: 1.4;
  }
}
</style>
