<template>
  <div class="weather-widget">
    <span>{{ weather.city }}, {{ weather.country }}</span>
    <base-icon-button
      class="weather-widget__icon-btn"
      icon-folder="base"
      icon-name="config"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import BaseIconButton from '@/components/base/base-icon-button.vue';

export default Vue.extend({
  components: {
    BaseIconButton,
  },
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
@import '@/assets/scss/main.scss';

.weather-widget {
  width: 200px;
  height: 300px;
  padding: 10px;
  font-family: $primary-font;
  font-size: 16px;
  font-weight: 400;
  color: $color-1;
  background-color: $color-2;
  border: 1px solid $color-1;
  border-radius: 8px;

  &__icon-btn {
    width: 60px;
    height: 60px;
    color: $color-1;
    background-color: transparent;
    border: none;
  }
}
</style>
