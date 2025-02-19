<script setup lang="ts">
import { Client } from 'boardgame.io/client'
import { BGP } from '~/BGP'

function createBGPClient() {
  const client = Client({ game: BGP })
  client.start()
  return client
}

// Usage
const app = createBGPClient()
</script>

<template>
  <div />
</template>

<style scoped>

</style>
