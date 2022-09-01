<template>
  <button
    class="base-button"
    type="button"
  >
    {{ title }}
  </button>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'BaseButton',
  props: {
    type: {
      type: String,
      default: 'button',
    },
    title: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss">
.base-button {
  @include reset-button;
}
</style>
