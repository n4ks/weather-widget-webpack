<template>
  <div>
    <p class="weather-widget__icon">test</p>
    <img src="@/assets/img/test.jpg" />
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'WeatherWidgetIcon',
});
</script>

<style lang="scss">
.weather-widget__icon {
  border: 1px solid $color-2;
}
</style>
