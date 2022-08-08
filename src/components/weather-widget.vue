<template>
  <div class="weather-widget"></div>
</template>

<script lang="ts">
import Vue from 'vue';
// import WeatherWidgetIcon from '@/components/weather-widget-icon.vue';

export default Vue.extend({
  // components: {
  //   WeatherWidgetIcon,
  // },
  data() {
    return {
      weather: {
        city: 'London',
        country: 'UK',
        status: '1',
        temperature: '7°C',
        description: 'Feels like -3°C. Broken Clouds. Light breeze.',
        humidity: '97%',
        dewPoint: '0°C',
        visibility: '10.0km',
      },
    };
  },
});
</script>

<style lang="scss">
@import '@/assets/scss/main';

.weather-widget {
  font-family: $primary-font;
  font-size: 16px;
  font-weight: 400;
  color: $color-1;
}
</style>
