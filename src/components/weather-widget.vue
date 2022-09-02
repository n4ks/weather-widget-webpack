<template>
  <div
    v-if="weather"
    class="weather-widget text card"
  >
    <div class="weather-widget__place-row row row--spaced">
      <weather-widget-place
        class="weather-widget__place text text--md text--bold"
        :place="weather.place"
      />
      <base-icon-button
        class="weather-widget__config-button"
        icon-folder="base"
        icon-name="config"
        size="sm"
        color="brand"
        @click="toggleConfigMenu"
      />
    </div>
    <weather-widget-temperature
      v-if="weather.temperature.icon"
      class="weather-widget__temperature-row row row--centered text text--lg text--bold"
      :temperature="weather.temperature"
    />
    <p class="weather-widget__description text text--sm">
      {{ weather.description }}
    </p>
    <div class="weather-widget__additional-info-row row row--spaced row--wrap">
      <weather-widget-additional-info
        v-for="(item, index) in weather.additionalInfo"
        :key="index + item.value"
        class="weather-widget__additional-info-item"
        :item="item"
      />
    </div>
    <weather-widget-config-menu
      v-if="isConfigMenuOpen"
      class="weather-widget__config-menu card"
      @select-city="onSelectCity"
      @close-config-menu="toggleConfigMenu"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import BaseIconButton from '@/components/base/base-icon-button.vue';
import WeatherWidgetPlace from '@/components/weather-widget-place.vue';
import WeatherWidgetTemperature from '@/components/weather-widget-temperature.vue';
import WeatherWidgetAdditionalInfo from '@/components/weather-widget-additional-info.vue';
import WeatherWidgetConfigMenu from '@/components/weather-widget-config-menu.vue';
import { api } from '@/api';
import { utils } from '@/utils/base';
import { Nullable } from '@/interfaces/base/Nullable';
import { Coordinates } from '@/interfaces/weather-widget/Coordinates';
import { CurrentWeather } from '@/interfaces/weather-widget/CurrentWeather';

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    COORDS_KEY?: string;
  }
}

export default Vue.extend({
  components: {
    BaseIconButton,
    WeatherWidgetPlace,
    WeatherWidgetTemperature,
    WeatherWidgetAdditionalInfo,
    WeatherWidgetConfigMenu,
  },
  COORDS_KEY: 'city-coords',
  data() {
    return {
      isConfigMenuOpen: false,
      selectedCityCoords: null as Nullable<Coordinates>,
      weather: null as Nullable<CurrentWeather>,
    };
  },
  async created() {
    await this.initCurrentWeather();
  },
  methods: {
    async initCurrentWeather(): Promise<void> {
      const coords =
        utils.ls.getFromStorage(this.$options.COORDS_KEY as string) ??
        (await api.geocoding.fetchCoordinatesByIP());

      if (!coords) return;

      this.weather = await api.weather.fetchCurrentWeatherByCoords(coords);
    },
    async onSelectCity(coords: Coordinates) {
      if (utils.isObjectEmpty(coords)) return;

      this.weather = await api.weather.fetchCurrentWeatherByCoords(coords);
      utils.ls.addToStorage(this.$options.COORDS_KEY as string, coords);
      this.toggleConfigMenu();
    },
    toggleConfigMenu(): void {
      this.isConfigMenuOpen = !this.isConfigMenuOpen;
    },
  },
});
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';

.weather-widget {
  position: relative;
  width: 260px;
  height: 310px;
  font-family: $primary-font;
  color: $color-default;

  &__place {
    max-width: 85%;
  }

  &__config-button {
    flex-shrink: 0;
  }

  &__place-row {
    margin-bottom: 20px;
  }

  &__temperature-row {
    margin-bottom: 30px;
  }

  &__description {
    margin-bottom: 30px;
    text-align: center;
    word-wrap: break-word;
  }

  &__additional-info-row {
    row-gap: 15px;
  }
}
</style>
