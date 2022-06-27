<template>
  <q-page>
    <div class="q-py-lg q-px-md row items-end q-col-gutter-md">
      <div class="col">
        <q-input
          bottom-slots
          v-model="newTweetContent"
          placeholder="What's happening?"
          counter
          maxlength="280"
          autogrow
          class="new-tweet"
        >
          <template v-slot:before>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/avatar5.jpg" />
            </q-avatar>
          </template>
        </q-input>
      </div>
      <div class="col col-shrink">
        <q-btn
          unelevated
          rounded
          color="primary"
          label=" Q Tweet "
          no-caps
          no-wrap
          :disable="!newTweetContent"
          class="q-mb-lg"
        />
      </div>
    </div>
    <q-separator size="10px" color="qwitter-dark-sep" />
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'

let newTweetContent = ref('')
</script>

<style lang="scss">
.new-tweet textarea {
  font-size: 19px;
  line-height: 1.4 !important;
}
</style>
