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
    <v-select
      v-model="selectedCity"
      label="address"
      :options="cities"
      placeholder="Enter city name"
      @search="searchCity"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import BaseIconButton from '@/components/base/base-icon-button.vue';
import vSelect from 'vue-select';
import { api } from '@/api';
import { utils } from '@/utils/base';
import { Nullable } from '@/interfaces/base/Nullable';
import { CityInfo } from '@/interfaces/weather-widget/CityInfo';

export default Vue.extend({
  name: 'WeatherWidgetConfigMenu',
  components: {
    BaseIconButton,
    vSelect,
  },
  data() {
    return {
      selectedCity: null as Nullable<CityInfo>,
      cities: [] as CityInfo[],
    };
  },
  mounted() {
    window.addEventListener('keydown', this.onPressEsc);
  },
  beforeDestroy() {
    window.removeEventListener('keydown', this.onPressEsc);
  },
  methods: {
    fetchCitiesByName: utils.debounce(api.geocoding.fetchCitiesByName),
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
    closeConfigMenu(): void {
      this.$emit('close-config-menu');
    },
    onPressEsc(evt: KeyboardEvent): void {
      if (evt.code !== 'Escape') return;

      this.closeConfigMenu();
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

  &__close-btn {
    margin-bottom: 20px;
    margin-left: auto;
  }
}
</style>
