<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters('core', ['groups']),
  },
};
</script>

<template>
  <div class="page page-index">
    {{ groups }}
  </div>
</template>

<style lang="scss">
.page-index {
}
</style>
