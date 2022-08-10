<template>
  <div class="temperature row row--centered">
    <base-icon
      class="temperature__icon"
      folder="weather"
      :name="temperature.icon"
      width="48px"
      height="48px"
    />
    <span class="temperature__value text text--lg text--bold">{{
      temperature.value
    }}</span>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import BaseIcon from '@/components/base/base-icon.vue';
import { IWeatherTemperature } from '@/interfaces/IWeatherTemperature';

export default Vue.extend({
  name: 'WeatherWidgetTemperature',
  components: {
    BaseIcon,
  },
  props: {
    temperature: {
      type: Object as PropType<IWeatherTemperature>,
      default: () => ({}),
    },
  },
});
</script>

<style lang="scss">
.temperature {
  &__icon {
    padding-right: 10px;
  }
}
</style>
