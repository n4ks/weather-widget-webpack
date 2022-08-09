<template>
  <button
    type="button"
    class="base-icon-btn"
  >
    <span class="visually-hidden">{{ iconName }} button</span>
    <base-icon
      :folder="iconFolder"
      :name="iconName"
    />
  </button>
</template>

<script lang="ts">
import Vue from 'vue';
import BaseIcon from '@/components/base/base-icon.vue';

export default Vue.extend({
  name: 'BaseIconButton',
  components: {
    BaseIcon,
  },
  props: {
    iconFolder: {
      type: String,
      required: true,
    },
    iconName: {
      type: String,
      default: '',
    },
  },
});
</script>

<style lang="scss">
.base-icon-btn {
  background-color: transparent;
  border: none;
}
</style>
