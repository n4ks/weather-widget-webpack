<template>
  <div class="weather-widget">
    <p>FONTS TEST</p>
    <weather-widget-icon></weather-widget-icon>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import WeatherWidgetIcon from '@/components/weather-widget-icon.vue';

export default Vue.extend({
  components: {
    WeatherWidgetIcon,
  },
});
</script>
