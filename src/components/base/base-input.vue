<template>
  <label class="base-input">
    <span class="visually-hidden">{{ label }}</span>
    <input
      type="search"
      :placeholder="placeholder"
      :value="value"
      @input="onInput($event)"
  /></label>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'BaseInput',
  props: {
    placeholder: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      default: '',
    },
  },
  methods: {
    // TODO: debounce
    onInput(event: Event): void {
      const target = event.target as HTMLInputElement;
      this.$emit('input', target.value);
    },
  },
});
</script>

<style lang="scss">
.base-input {
  background-color: transparent;
  border: none;
}
</style>
