<script lang="ts">
import { defineComponent } from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
// import { RwireSample } from '@/entry.esm';

export default defineComponent({
  name: 'ServeDev',
  // components: {
  //  RwireSample,
  // }
});
</script>

<template>
  <div id="app">
    <rwire-sample />
  </div>
</template>
