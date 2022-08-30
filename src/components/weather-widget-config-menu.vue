<template>
  <div class="config-menu">
    <base-icon-button
      class="config-menu__close-btn"
      icon-folder="base"
      icon-name="close"
      size="sm"
      color="brand"
      @click="onCloseConfigMenu"
    />
    <v-select
      label="address"
      :options="cities"
      @search="searchCity"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import BaseIconButton from '@/components/base/base-icon-button.vue';
import vSelect from 'vue-select';
import { api } from '@/api';
import { CityInfo } from '@/interfaces/weather-widget/CityInfo';
import { debounce } from '@/utils/base/debounce';

export default Vue.extend({
  name: 'WeatherWidgetConfigMenu',
  components: {
    BaseIconButton,
    vSelect,
  },
  data() {
    return {
      cities: [] as CityInfo[],
    };
  },
  methods: {
    fetchCitiesByName: debounce(api.geocoding.fetchCitiesByName),
    async searchCity(
      search: string,
      toggleLoading: (loading: boolean) => void,
    ): Promise<void> {
      const isSearchNotEmpty = !search.trim();

      if (isSearchNotEmpty) return;

      toggleLoading(true);
      this.cities = (await this.fetchCitiesByName(search)) ?? [];
      toggleLoading(false);
    },
    onCloseConfigMenu(): void {
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
