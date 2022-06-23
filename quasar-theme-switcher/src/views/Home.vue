<template>
  <div class="home">
    <buttons-preview></buttons-preview>
    <buttons-preview 
      class="q-my-md"
      :outlined="true" 
      title="Outlined Buttons Preview"
    ></buttons-preview>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { defineAsyncComponent } from 'vue'

@Options({
  components: {
    ButtonsPreview: defineAsyncComponent(() => import('@/components/ButtonsPreview.vue')),
  },
})
export default class Home extends Vue {
  

}
</script>
