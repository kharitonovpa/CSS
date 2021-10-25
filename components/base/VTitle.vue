<script>
import defineTagName from '@/mixins/defineTagName';
export default {
  name: 'VTitle',
  mixins: [defineTagName],
  props: {
    // big, medium, regular, small
    size: {
      type: String,
      default: 'regular',
    },
  },
};
</script>

<template>
  <component v-bind="attrs" :class="`v-title_${size}`" class="v-title">
    <slot />
  </component>
</template>

<style lang="scss">
.v-title {
  margin: 0;
  &_big {
  }
  &_medium {
  }
  &_regular {
  }
  &_small {
  }
}
</style>
