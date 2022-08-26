<template>
  <div class="config-menu">
    <v-select @search="searchCity" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import vSelect from 'vue-select';
import { api } from '@/api';

export default Vue.extend({
  name: 'WeatherWidgetConfigMenu',
  components: {
    vSelect,
  },
  methods: {
    async searchCity(
      search: string,
      toggleLoading: (loading: boolean) => void,
    ): Promise<void> {
      const isSearchNotEmpty = !search.trim();

      if (isSearchNotEmpty) return;
      // TODO: debounce
      toggleLoading(true);
      await api.geocoding.searchCitiesByName(search);
      toggleLoading(false);
    },
  },
});
</script>
