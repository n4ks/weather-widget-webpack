<template>
  <weather-widget></weather-widget>
</template>

<script lang="ts">
import Vue from 'vue';
import WeatherWidget from '@/components/weather-widget.vue';

export default Vue.extend({
  name: 'App',
  components: { WeatherWidget },
});
</script>
