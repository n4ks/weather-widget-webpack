<template>
  <button
    type="button"
    class="base-icon-button"
    :class="classes"
    :disabled="disabled"
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
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return [
        `base-icon-button--size-${this.size}`,
        `base-icon-button--color-${this.color}`,
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
.base-icon-button {
  @include reset-button;
  display: flex;
  align-items: center;
  justify-content: center;

  &:disabled {
    @include disabled-button;
    color: $color-disabled;
  }
}

.base-icon-button--size {
  &-sm {
    width: 24px;
    height: 24px;
  }
}

.base-icon-button--color {
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
