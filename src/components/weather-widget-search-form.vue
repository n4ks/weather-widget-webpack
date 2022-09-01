<template>
  <form class="search-form">
    <v-select
      v-model="selectedCity"
      class="search-form__search"
      label="address"
      :options="cities"
      placeholder="Enter city name"
      @search="searchCity"
    />
    <base-button
      class="search-form__button"
      type="submit"
      title="search"
    />
  </form>
</template>

<script lang="ts">
import Vue from 'vue';
import vSelect from 'vue-select';
import BaseButton from '@/components/base/base-button.vue';
import { utils } from '@/utils/base';
import { api } from '@/api';
import { Nullable } from '@/interfaces/base/Nullable';
import { CityInfo } from '@/interfaces/weather-widget/CityInfo';

export default Vue.extend({
  name: 'WeatherWidgetSearchForm',
  components: {
    BaseButton,
    vSelect,
  },
  data() {
    return {
      selectedCity: null as Nullable<CityInfo>,
      cities: [] as CityInfo[],
    };
  },
  methods: {
    fetchCitiesByName: utils.debounce(api.geocoding.fetchCitiesByName),
    async searchCity(
      search: string,
      toggleLoading: (loading: boolean) => void,
    ): Promise<void> {
      const isSearchNotEmpty = !search.trim();

      if (isSearchNotEmpty) return;

      toggleLoading(true);
      this.cities = (await this.fetchCitiesByName(search)) ?? [];
      toggleLoading(false);
    },
  },
});
</script>

<style lang="scss">
.search-form {
  &__search {
    margin-bottom: 15px;
  }
}
</style>
