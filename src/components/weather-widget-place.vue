<template>
  <span class="place">{{ cityCountry }}</span>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { Place } from '@/interfaces/weather-widget/Place';

export default Vue.extend({
  name: 'WeatherWidgetPlace',
  props: {
    place: {
      type: Object as PropType<Place>,
      default: () => ({ city: 'unknown', countryCode: 'unknown' } as Place),
    },
  },
  computed: {
    cityCountry(): string {
      return `${this.place?.city}, ${this.place?.countryCode}`;
    },
  },
});
</script>
