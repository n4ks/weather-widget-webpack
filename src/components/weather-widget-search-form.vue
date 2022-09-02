<template>
  <form
    class="search-form"
    @submit.prevent="onSubmit"
  >
    <v-select
      v-model="selectedCity"
      label="address"
      class="search-form__search"
      :options="cities"
      placeholder="Enter city name (min. 3 symbols)"
      @search="searchCity"
    >
      <template #selected-option="{ address }">
        {{ formatSelectedCityLabel(address) }}
      </template>
    </v-select>
    <base-button
      :disabled="isSelectDisabled"
      class="search-form__button text text--md"
      type="submit"
      title="Select city"
    />
  </form>
</template>

<script lang="ts">
import Vue from 'vue';
import BaseButton from '@/components/base/base-button.vue';
import vSelect from 'vue-select';
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
  computed: {
    isSelectDisabled(): boolean {
      return !this.selectedCity;
    },
  },
  methods: {
    fetchCitiesByName: utils.debounce(api.geocoding.fetchCitiesByName),
    async searchCity(
      search: string,
      toggleLoading: (loading: boolean) => void,
    ): Promise<void> {
      const isSearchNotEmpty = !!search.trim();
      const isSearchHasMinLength = search.length >= 3;

      if (isSearchNotEmpty && isSearchHasMinLength) {
        toggleLoading(true);
        this.cities = (await this.fetchCitiesByName(search)) ?? [];
        toggleLoading(false);
      }
    },
    onSubmit(): void {
      this.$emit('select-city', this.selectedCity?.coordinates);
    },
    formatSelectedCityLabel(label: string): string {
      return utils.truncateText(label);
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
