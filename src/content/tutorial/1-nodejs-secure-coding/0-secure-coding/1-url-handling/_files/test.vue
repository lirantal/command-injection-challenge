<script setup lang="ts">
import { ref } from 'vue'
import MDCRenderer from '@nuxtjs/mdc/runtime/components/MDCRenderer.vue'
import type { MDCParserResult } from '@nuxtjs/mdc'
import { parseMarkdown } from '@nuxtjs/mdc/runtime'

const md = ref(`
# Markdown gets converted into HTML...

[vuejs](https://vuejs.org)

`);

const ast = ref<MDCParserResult | null>(null)

const convertMarkdown = async () => {
    ast.value = await parseMarkdown(md.value)
}
</script>

<template>
  <div class="grid grid-cols-2 gap-6 mx-auto mt-6 p-6">
    <div class="flex flex-col items-center justify-center border-2">
      <textarea v-model="md" rows="10" class="m-6 w-3/4 mb-2 p-2 border border-gray-300 rounded-md text-base"></textarea>
      <button @click="convertMarkdown" class="m-6 px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 active:bg-green-700">
        Convert
      </button>
    </div>

    <div class="border-2">
      <Suspense>
        <div class="flex justify-center text-center">
        <MDCRenderer v-if="ast?.body" :body="ast.body" :data="ast.data" />
        </div>
      </Suspense>
    </div>
  </div>
</template>
