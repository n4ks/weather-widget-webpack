<template>
  <button
    type="button"
    class="base-icon-btn"
    :class="classes"
    @click="onClick()"
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
    size: {
      type: String,
      default: 'sm',
      validator(value: string) {
        return ['sm'].includes(value);
      },
    },
    color: {
      type: String,
      default: 'brand',
      validator(value: string) {
        return ['brand'].includes(value);
      },
    },
  },
  computed: {
    classes() {
      return [
        `base-icon-btn--size-${this.size}`,
        `base-icon-btn--color-${this.color}`,
      ];
    },
  },
  methods: {
    onClick(): void {
      this.$emit('click');
    },
  },
});
</script>

<style lang="scss">
.base-icon-btn {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  background-color: transparent;
  border: none;
}

.base-icon-btn--size {
  &-sm {
    width: 24px;
    height: 24px;
  }
}

.base-icon-btn--color {
  &-brand {
    color: $color-brand;

    &:hover,
    &:focus {
      color: $color-brand-lighten;
    }

    &:active {
      color: $color-brand-darken;
    }
  }
}
</style>
