<template>
  <div class="weather-widget text">
    <div class="weather-widget__place-row row row--spaced">
      <weather-widget-place
        class="weather-widget__place text text--md text--bold"
        :place="weather.place"
      />
      <base-icon-button
        class="weather-widget__config-btn"
        icon-folder="base"
        icon-name="config"
        size="sm"
        color="brand"
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
    <weather-widget-config-menu />
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
import { Nullable } from '@/interfaces/base/Nullable';
import { CurrentWeather } from '@/interfaces/weather-widget/CurrentWeather';

export default Vue.extend({
  components: {
    BaseIconButton,
    WeatherWidgetPlace,
    WeatherWidgetTemperature,
    WeatherWidgetAdditionalInfo,
    WeatherWidgetConfigMenu,
  },
  data() {
    return {
      weather: {
        place: {
          city: '',
          country: '',
        },
        temperature: {
          value: '',
          icon: '',
        },
        description: '',
        additionalInfo: [
          {
            title: '',
            value: '',
            icon: '',
          },
        ],
      },
    };
  },
  async created() {
    await this.getWeather();
  },
  methods: {
    // async getGeocodingByCityRegion(city: string, countryCode: string) {
    //   // FIXME: add return type
    //   if (!(city && countryCode)) return;
    //
    //   return await api.geocoding.getLocationByCityCountry(city, countryCode);
    // },
    async getCurrentWeather(
      lat: number,
      lon: number,
    ): Promise<Nullable<CurrentWeather>> {
      // FIXME: add return type
      return await api.weather.getCurrentWeather(lat, lon);
    },
    async getWeather(): Promise<void> {
      const location = await api.geocoding.getLocationByIP();

      if (!location) return;

      const currentWeather = await this.getCurrentWeather(
        location.lat,
        location.lon,
      );

      if (!currentWeather) return;

      this.weather = currentWeather;
    },
  },
});
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';

.weather-widget {
  box-sizing: border-box;
  width: 260px;
  height: 310px;
  padding: 10px 15px;
  margin: auto; // TODO: remove after
  font-family: $primary-font;
  color: $color-default;
  background-color: $color-default-background;
  border-radius: 10px;

  &__place {
    max-width: 85%;
  }

  &__config-btn {
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
