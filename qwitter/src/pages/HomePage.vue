<template>
  <q-page class="relative-position">
    <q-scroll-area
      class="absolute full-width full-height"
      :thumb-style="{
        right: '4px',
        borderRadius: '8px',
        width: '6px',
      }"
    >
      <div class="q-py-lg q-px-md row items-end q-col-gutter-md">
        <div class="col">
          <q-input
            bottom-slots
            v-model="newQweetContent"
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
            @click="addNewQweet"
            unelevated
            rounded
            color="primary"
            label=" Q Tweet "
            no-caps
            no-wrap
            :disable="!newQweetContent"
            class="q-mb-lg"
          />
        </div>
      </div>

      <q-separator size="10px" class="divider" />

      <q-list separator>
        <transition-group
          appear
          enter-active-class="animated fadeIn slower"
          leave-active-class="animated fadeOut slow"
        >
          <q-item class="q-py-md" v-for="qweet in qweets" :key="qweet.date">
            <q-item-section avatar top>
              <q-avatar>
                <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label>
                <strong>Janet</strong>
                <span class="text-grey-6 q-pl-md"
                  >@janet_one <br class="lt-md" />
                  &bull; {{ relativeDate(qweet.date) }}
                </span>
              </q-item-label>
              <q-item-label class="qweet-content">
                {{ qweet.content }}
              </q-item-label>

              <div class="row justify-between q-mt-sm qweet-icons">
                <q-btn
                  color="grey-7"
                  icon="fa-regular fa-comment"
                  flat
                  rounded
                  size="sm"
                />
                <q-btn
                  color="grey-7"
                  icon="fa-solid fa-retweet"
                  flat
                  rounded
                  size="sm"
                />
                <q-btn
                  color="grey-7"
                  icon="fa-regular fa-heart"
                  flat
                  rounded
                  size="sm"
                />
                <q-btn
                  @click="deleteQweet(qweet)"
                  color="grey-7"
                  icon="fa-solid fa-trash"
                  flat
                  rounded
                  size="sm"
                />
              </div>
            </q-item-section>
          </q-item>
        </transition-group>
      </q-list>
    </q-scroll-area>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { formatDistance } from 'date-fns'
import Qweet from '../models/qweet'

// Data

let newQweetContent = ref('')
let qweets = ref([
  {
    content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.

            Quod consectetur, tempora quis adipisci cumque corrupti hic quas maxime itaque pariatur, explicabo distinctio animi laudantium             debitis aliquid dolorum nulla iste minus?`,
    date: 1656431608677,
  },
  {
    content:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod consectetur, tempora quis adipisci cumque corrupti hic quas maxime itaque pariatur.',
    date: 1656430600677,
  },
])

// Methods

let relativeDate = (value: number) => {
  return formatDistance(value, new Date())
}

let addNewQweet = () => {
  const qweet = {
    content: newQweetContent.value,
    date: Date.now(),
  }
  qweets.value.unshift(qweet)
  newQweetContent.value = ''
}

let deleteQweet = (qweet: Qweet) => {
  let idx = qweets.value.findIndex(
    (q) => q.date === qweet.date && q.date === qweet.date
  )
  qweets.value.splice(idx, 1)
}
</script>

<style lang="scss">
.new-tweet textarea {
  font-size: 19px;
  line-height: 1.4 !important;
}

.divider {
  border-top: 1px solid;
  border-bottom: 1px solid;
  border-color: $grey-8;
  background-color: $qwitter-dark-sep;
}

.qweet-content {
  // (i) To handle (preserve) new lines.
  white-space: pre-line;
}

.qweet-icons {
  margin-left: -14px;
}
</style>
