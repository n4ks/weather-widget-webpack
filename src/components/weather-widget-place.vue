<template>
  <span class="place">{{ place.city }}, {{ place.country }}</span>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { Place } from '@/interfaces/Place';

export default Vue.extend({
  name: 'WeatherWidgetPlace',
  props: {
    place: {
      type: Object as PropType<Place>,
      default: () => ({}),
    },
  },
});
</script>
