<template>
  <div class="additional-info text text--sm">
    <base-icon
      v-if="item.icon"
      class="additional-info__icon"
      folder="weather"
      :name="item.icon"
      width="32px"
      height="32px"
    />
    <span
      v-if="item.title"
      class="additional-info__title text--bold"
      >{{ item.title }}:
    </span>
    <span class="additional-info__value">{{ item.value }}</span>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import BaseIcon from '@/components/base/base-icon.vue';
import { WeatherAdditionalInfo } from '@/interfaces/weather-widget/WeatherAdditionalInfo';

export default Vue.extend({
  name: 'WeatherWidgetAdditionalInfo',
  components: {
    BaseIcon,
  },
  props: {
    item: {
      type: Object as PropType<WeatherAdditionalInfo>,
      default: () => ({}),
    },
  },
});
</script>

<style lang="scss">
.additional-info {
  display: flex;
  align-items: center;
  word-break: break-word;

  &__icon {
    flex-shrink: 0;
    margin-right: 5px;
  }

  &__title {
    flex-shrink: 0;
    padding-right: 3px;
  }
}
</style>
