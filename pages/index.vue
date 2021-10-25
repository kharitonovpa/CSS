<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters('core', ['goods']),
  },
};
</script>

<template>
  <div class="page page-index">
    {{ goods }}
  </div>
</template>

<style lang="scss">
.page-index {
}
</style>
