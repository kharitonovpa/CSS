<script>
import defineTagName from '@/mixins/defineTagName';
export default {
  name: 'VText',
  mixins: [defineTagName],
  props: {
    size: {
      type: String,
      // big, medium, regular
      default: 'regular',
    },
  },
};
</script>

<template>
  <component v-bind="attrs" :class="`v-text_${size}`" class="v-text">
    <slot />
  </component>
</template>

<style lang="scss">
.v-text {
  &_big {
  }
  &_medium {
  }
  &_regular {
  }
}
</style>
