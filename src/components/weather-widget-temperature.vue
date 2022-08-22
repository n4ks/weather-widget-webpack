<template>
  <div class="temperature">
    <base-icon
      class="temperature__icon"
      folder="weather"
      :name="temperature.icon"
      width="48px"
      height="48px"
    />
    <span class="temperature__value">{{ temperature.value }}</span>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import BaseIcon from '@/components/base/base-icon.vue';
import { Temperature } from '@/interfaces/weather-widget/Temperature';

export default Vue.extend({
  name: 'WeatherWidgetTemperature',
  components: {
    BaseIcon,
  },
  props: {
    temperature: {
      type: Object as PropType<Temperature>,
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
