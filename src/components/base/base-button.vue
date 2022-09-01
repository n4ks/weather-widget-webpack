<template>
  <button
    type="button"
    class="base-button"
    :class="classes"
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
    color: {
      type: String,
      default: 'brand',
      validator(value: string) {
        return ['brand'].includes(value);
      },
    },
    size: {
      type: String,
      default: 'wide',
      validator(value: string) {
        return ['wide'].includes(value);
      },
    },
  },
  computed: {
    classes() {
      return [
        `base-button--color-${this.color}`,
        `base-button--size-${this.size}`,
      ];
    },
  },
});
</script>

<style lang="scss">
.base-button {
  @include reset-button;
  padding: 10px 15px;
  color: $color-default-2;
  border-radius: 5px;
}

.base-button--size {
  &-wide {
    width: 100%;
  }
}

.base-button--color {
  &-brand {
    background-color: $color-brand;

    &:hover,
    &:focus {
      background-color: $color-brand-lighten;
    }

    &:active {
      background-color: $color-brand-darken;
    }
  }
}
</style>
