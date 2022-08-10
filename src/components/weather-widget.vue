<template>
  <div class="weather-widget text">
    <div class="weather-widget__region-row row row--spaced">
      <span class="weather-widget__region text text--md text--bold"
        >{{ weather.city }}, {{ weather.country }}</span
      >
      <base-icon-button
        class="weather-widget__icon-btn"
        icon-folder="base"
        icon-name="config"
        size="sm"
        color="brand"
      />
    </div>
    <div class="weather-widget__temperature-row row row--centered">
      <base-icon
        class="weather-widget__weather-icon"
        folder="weather"
        name="sun"
        width="48px"
        height="48px"
      />
      <span class="weather-widget__temperature text text--lg text--bold">{{
        weather.temperature
      }}</span>
    </div>
    <p class="weather-widget__description text text--sm">
      {{ weather.description }}
    </p>
    <!--    TODO -> component-->
    <div class="weather-widget__detailed-data-row row row--spaced row--wrap">
      <div
        v-for="(item, index) in weather.detailedData"
        :key="index + item.value"
        class="detailed-data-item text text--sm"
      >
        <base-icon
          v-if="item.icon"
          class="detailed-data-item__icon"
          folder="weather"
          :name="item.icon"
          width="32px"
          height="32px"
        />
        <span
          v-if="item.title"
          class="detailed-data-item__title text--bold"
          >{{ item.title }}:
        </span>
        <span class="detailed-data-item__value">{{ item.value }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import BaseIcon from '@/components/base/base-icon.vue';
import BaseIconButton from '@/components/base/base-icon-button.vue';

export default Vue.extend({
  components: {
    BaseIcon,
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
        detailedData: [
          {
            title: '',
            value: '3.0m/s SSE',
            icon: 'wind-velocity',
          },
          {
            title: '',
            value: '1021hPa',
            icon: 'pressure',
          },
          {
            title: 'Humidity',
            value: '97%',
            icon: '',
          },
          {
            title: 'Dew point',
            value: '0°C',
            icon: '',
          },
          {
            title: 'Visibility',
            value: '10.0km',
            icon: '',
          },
        ],
      },
    };
  },
});
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';

.weather-widget {
  box-sizing: border-box;
  width: 260px;
  height: 310px;
  padding: 10px 15px;
  margin: auto; // TODO: remove after
  font-family: $primary-font;
  color: $color-default;
  background-color: $color-default-background;
  border-radius: 10px;

  &__region-row {
    margin-bottom: 20px;
  }

  &__weather-icon {
    padding-right: 10px;
  }

  &__temperature-row {
    margin-bottom: 30px;
  }

  &__description {
    margin-bottom: 30px;
    text-align: center;
    word-wrap: break-word;
  }

  &__detailed-data-row {
    row-gap: 10px;
  }
}

.detailed-data-item {
  display: flex;
  align-items: center;

  &__icon {
    padding-right: 5px;
  }

  &__title {
    padding-right: 3px;
  }
}
</style>
