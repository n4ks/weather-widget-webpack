<template>
  <div class="config-menu">
    <base-icon-button
      class="config-menu__close-btn"
      icon-folder="base"
      icon-name="close"
      size="sm"
      color="brand"
      @click="closeConfigMenu"
    />
    <v-select @search="searchCity" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import BaseIconButton from '@/components/base/base-icon-button.vue';
import vSelect from 'vue-select';
import { api } from '@/api';

export default Vue.extend({
  name: 'WeatherWidgetConfigMenu',
  components: {
    BaseIconButton,
    vSelect,
  },
  methods: {
    async searchCity(
      search: string,
      toggleLoading: (loading: boolean) => void,
    ): Promise<void> {
      const isSearchNotEmpty = !search.trim();

      if (isSearchNotEmpty) return;
      // TODO: debounce
      toggleLoading(true);
      await api.geocoding.searchCitiesByName(search);
      toggleLoading(false);
    },
    closeConfigMenu(): void {
      this.$emit('close-config-menu');
    },
  },
});
</script>

<style lang="scss">
// TODO: унифицировать стили/подумать что нужно перенести в weather-widget__config-menu
.config-menu {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 10px 15px;
  background-color: $color-default-background;
  border-radius: 10px;

  &__close-btn {
    margin-bottom: 20px;
    margin-left: auto;
  }
}
</style>
