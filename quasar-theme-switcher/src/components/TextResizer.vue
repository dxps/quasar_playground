
<script lang="ts">
  import { defineComponent, ref, watch } from 'vue'
  import { appTextSize } from '@/modules/state'

  export default defineComponent({
    name: 'text-resizer',
    
    setup(){

      console.log('TEXT SIZE IS: ', appTextSize)

      const size = ref(appTextSize.value.slice() as Breakpoints)
  

      watch(size, (val, old)=> {
        console.log('val changed: ', old, val)
        if (val){
          appTextSize.value = val!
        }
      })

      return {
        size,
        options: [
        {
          value: 'sm',
          label: 'Small'
        }, 
        {
          value: 'md',
          label: 'Medium (Default)'
        }, 
        {
          value: 'lg',
          label: 'Large'
        },
        {
          value: 'xl',
          label: 'Extra Large'
        }
      ], 
      }
    }

  })

</script>

<template>
  <div class="q-pa-md">
    <q-select
      filled
      v-model="size"
      :options="options"
      label="Set Text Size"
      map-options
      emit-value
    >

    </q-select>
  </div>
</template>

<style lang="scss">

</style>

