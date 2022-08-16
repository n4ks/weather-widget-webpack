<template>
  <div class="weather-widget text">
    <div class="weather-widget__region-row row row--spaced">
      <span class="weather-widget__region text text--md text--bold"
        >{{ weather.city }}, {{ weather.country }}</span
      >
      <base-icon-button
        class="weather-widget__icon-btn"
        icon-folder="base"
        icon-name="config"
        size="sm"
        color="brand"
      />
    </div>
    <weather-widget-temperature
      class="weather-widget__temperature row row--centered"
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
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import BaseIconButton from '@/components/base/base-icon-button.vue';
import WeatherWidgetTemperature from '@/components/weather-widget-temperature.vue';
import WeatherWidgetAdditionalInfo from '@/components/weather-widget-additional-info.vue';

export default Vue.extend({
  components: {
    BaseIconButton,
    WeatherWidgetTemperature,
    WeatherWidgetAdditionalInfo,
  },
  data() {
    return {
      weather: {
        city: 'London',
        country: 'UK',
        status: '1',
        temperature: {
          value: '7°C',
          icon: 'sun',
        },
        description: 'Feels like -3°C. Broken Clouds. Light breeze.',
        additionalInfo: [
          {
            title: '',
            value: '3.0m/s SSE',
            icon: 'wind-velocity',
          },
          {
            title: '',
            value: '1021hPa',
            icon: 'pressure',
          },
          {
            title: 'Humidity',
            value: '97%',
            icon: '',
          },
          {
            title: 'Dew point',
            value: '0°C',
            icon: '',
          },
          {
            title: 'Visibility',
            value: '10.0km',
            icon: '',
          },
        ],
      },
    };
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

  // TODO вероятно не понадобится если вынести в компонент
  &__region-row {
    margin-bottom: 20px;
  }

  &__weather-icon {
    padding-right: 10px;
  }

  &__temperature {
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

  &__additional-info-item {
    max-width: 48%;
  }
}
</style>
