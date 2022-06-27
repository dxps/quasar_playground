<template>
  <q-layout view="lHr lpR fFf">
    <q-header bordered class="bg-dark text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title class="text-weight-bold">
          <span class="q-pl-xs gt-sm">{{ $route.name }}</span>
          <q-icon
            name="fa-solid fa-dove lt-md"
            size="sm"
            color="light-blue-5"
            class="q-pa-sm header-mobile-logo"
          />
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      show-if-above
      v-model="leftDrawerOpen"
      side="left"
      :width="280"
      bordered
    >
      <q-icon name="fa-solid fa-dove" size="md" color="light-blue-5 q-pa-md" />

      <q-list>
        <q-item to="/" clickable v-ripple exact>
          <q-item-section avatar class="q-pl-sm">
            <q-icon name="fa-solid fa-house-user" />
          </q-item-section>

          <q-item-section class="text-h6 text-weight-bold">Home</q-item-section>
        </q-item>

        <q-item to="/about" clickable v-ripple exact>
          <q-item-section avatar class="q-pl-sm">
            <q-icon name="fa-solid fa-clipboard-question" />
          </q-item-section>

          <q-item-section class="text-h6 text-weight-bold"
            >About</q-item-section
          >
        </q-item>
      </q-list>
    </q-drawer>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
      <q-input
        rounded
        outlined
        v-model="searchText"
        @submit="doSearch"
        dense
        placeholder="Search ..."
        class="q-ma-md"
      >
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
        <template v-slot:append v-if="searchText.length > 0">
          <q-icon name="close" @click="clearSearch" class="cursor-pointer" />
        </template>
      </q-input>

      <q-list padding separator>
        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label overline class="text-grey">Education</q-item-label>
            <q-item-label class="text-weight-bold"
              >Something amazing happened!</q-item-label
            >
            <q-item-label caption lines="3"
              >Secondary line text. Lorem ipsum dolor sit amet, consectetur
              adipiscit elit.</q-item-label
            >
          </q-item-section>
          <q-item-section side top>
            <q-item-label caption>5 min ago</q-item-label>
            <!-- <q-icon name="star" color="yellow" /> -->
          </q-item-section>
        </q-item>

        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label overline class="text-grey">Education</q-item-label>
            <q-item-label class="text-weight-bold"
              >Something amazing happened!</q-item-label
            >
            <q-item-label caption lines="3"
              >Secondary line text. Lorem ipsum dolor sit amet, consectetur
              adipiscit elit.</q-item-label
            >
          </q-item-section>
          <q-item-section side top>
            <q-item-label caption>5 min ago</q-item-label>
            <!-- <q-icon name="star" color="yellow" /> -->
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const leftDrawerOpen = ref(false)
const rightDrawerOpen = ref(false)
const searchText = ref('')

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

const clearSearch = () => {
  searchText.value = ''
}

const doSearch = () => {
  console.log(`[doSearch] Searching for ${searchText.value}...`)
}
</script>

<style>
.header-mobile-logo {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
</style>
