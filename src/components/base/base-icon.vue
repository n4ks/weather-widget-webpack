<template>
  <component :is="filePath" />
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'BaseIcon',
  props: {
    name: {
      type: String,
      required: true,
    },
    folder: {
      type: String,
      required: true,
    },
  },
  computed: {
    filePath() {
      return require(`@/assets/img/icons/${this.folder}/${this.name}.svg?inline`);
    },
  },
});
</script>
