
<script lang="ts">
  import { defineComponent } from 'vue'
  import { appTheme, themes } from '@/modules/state'

  export default defineComponent({
    
    setup(){

      console.log('THEMES IS: ', themes)
      console.log('APP THEME: ', appTheme)

      return {
        themes, 
        appTheme
      }
    }

  })

</script>

<template>
  <div class="q-pa-md">
    <q-select
      filled
      v-model="appTheme"
      :options="themes"
      label="Set Theme"
    >

    </q-select>
  </div>
</template>

<style lang="scss">

</style>

