<template>
  <div class="config-menu">
    <base-icon-button
      class="config-menu__close-button"
      icon-folder="base"
      icon-name="close"
      size="sm"
      color="brand"
      @click="closeConfigMenu"
    />
    <weather-widget-search-form
      class="config-menu__search-form"
      @select-city="onSelectCity"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import BaseIconButton from '@/components/base/base-icon-button.vue';
import WeatherWidgetSearchForm from '@/components/weather-widget-search-form.vue';
import { Coordinates } from '@/interfaces/weather-widget/Coordinates';

export default Vue.extend({
  name: 'WeatherWidgetConfigMenu',
  components: {
    BaseIconButton,
    WeatherWidgetSearchForm,
  },
  mounted() {
    window.addEventListener('keydown', this.onPressEsc);
  },
  beforeDestroy() {
    window.removeEventListener('keydown', this.onPressEsc);
  },
  methods: {
    closeConfigMenu(): void {
      this.$emit('close-config-menu');
    },
    onPressEsc(evt: KeyboardEvent): void {
      if (evt.code !== 'Escape') return;

      this.closeConfigMenu();
    },
    onSelectCity(coords: Coordinates) {
      this.$emit('select-city', coords);
    },
  },
});
</script>

<style lang="scss">
.config-menu {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;

  &__close-button {
    margin-bottom: 20px;
    margin-left: auto;
  }
}
</style>
