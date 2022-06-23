<script lang="ts">

import { defineAsyncComponent, defineComponent } from 'vue'

export default defineComponent({
  components: {
    ThemeSwitcher: defineAsyncComponent(()=> import('./ThemeSwitcher.vue')),
    TextResizer: defineAsyncComponent(()=> import('./TextResizer.vue')),
  },

  setup(){

    return {
      test: 'hello'
    }
  }

})

</script>

<template>
  <div>
    <theme-switcher></theme-switcher>
    <text-resizer class="q-mt-lg"></text-resizer>
  </div>
</template>


<style lang="scss">

</style>