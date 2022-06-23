<script lang="ts">

import { 
  defineComponent,  
  toRefs 
} from 'vue'

export default defineComponent({

  props: {
    
    title: {
      type: String,
      default: 'Buttons Preview'
    },
   
    outlined: {
      type: Boolean,
      default: false
    }
  },

  setup(props){

    const { outlined } = toRefs(props)

    const colors = [
      'primary',
      'secondary',
      'tertiary',
      'positive',
      'negative',
    ]

    const themes = [
      'dark', 
      'medium',
      'light',
    ]

    const utilities = [
      'backdrop',
      'active'
    ]

    const groups = [
      colors,
      themes,
      utilities,
    ]


    return {
      groups,
      outlined
    }
  }

})

</script>

<template>
  <div class="q-px-md">
    <h5 class="text-primary">{{ title }}</h5>
    
    <div 
      :key="i"
      v-for="(group, i) in groups"
      class="row q-pb-md"
    >
      <div 
        class="col-6"
      >
        <q-btn 
          v-for="type in group" 
          :key="type"
          :class="['q-ma-sm', 'text-size-16', outlined ? `text-${type}`: `bg-${type}`]"
          :outline="outlined"
          style="color: white;"
        >{{ type.toUpperCase() }}</q-btn>
      </div>
    </div>
    <hr class="q-mt-md q-mb-md">
  </div>
</template>

<style lang="scss">

</style>