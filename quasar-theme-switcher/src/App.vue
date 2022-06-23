<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="glossy bg-secondary">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
        />

        <q-toolbar-title>
          Quasar Theme Switcher
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-grey-2"
    >
      <sidebar />
      
    </q-drawer>

    <q-page-container>
      <Home />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref, onMounted } from 'vue'
import Home from '@/views/Home.vue'
import Sidebar from '@/components/Sidebar'
import { appTheme, appTextSize } from '@/modules/state'
import { setTheme, setTextSize } from '@/modules/utils'

export default {
  name: 'LayoutDefault',

  components: {
    Home,
    Sidebar,
  },

  setup () {

    onMounted(()=> {
      setTheme(appTheme)
      setTextSize(appTextSize)
    })

    return {
      leftDrawerOpen: ref(false)
    }
  }
}
</script>
