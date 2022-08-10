<template>
  <div class="weather-widget">
    <div class="weather-widget__row">
      <span>{{ weather.city }}, {{ weather.country }}</span>
      <base-icon-button
        class="weather-widget__icon-btn"
        icon-folder="base"
        icon-name="config"
        size="sm"
        color="brand"
      />
    </div>
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
  box-sizing: border-box;
  width: 200px;
  height: 300px;
  padding: 10px 15px;
  font-family: $primary-font;
  font-size: 16px;
  font-weight: 400;
  color: $color-default;
  background-color: $color-default-background;
  border-radius: 10px;

  &__row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
