<script setup lang="ts">
import '@fontsource/montserrat'
</script>

<template>
  <div>
    <NuxtPwaAssets />
    <NuxtLoadingIndicator :throttle="0" :height="3" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
body {
  font-family: 'Montserrat', sans-serif;
}
</style>
