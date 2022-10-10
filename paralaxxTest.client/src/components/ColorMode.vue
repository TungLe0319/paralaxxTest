<script setup >
import { useColorMode, useCycleList } from '@vueuse/core'
const mode = useColorMode({
  emitAuto: true,
  modes: {
    contrast: 'dark contrast',
    cafe: 'cafe',
  },
})
const { next } = useCycleList(['dark', 'light', 'cafe', 'contrast', 'auto'], { initialValue: mode })
</script>

<template>
  <button class="btn" @click="next()">
    <i v-if="mode === 'dark'" mdi mdi-weather-night inline-block align-middle class="align-middle" />
    <i v-if="mode === 'light'" mdi mdi-cloud inline-block align-middle class="align-middle" />
    <i v-if="mode === 'cafe'" mdi mdi-coffee inline-block align-middle class="align-middle" />
    <i v-if="mode === 'contrast'" mdi mdi-contrast-circle inline-block align-middle class="align-middle" />
    <i v-if="mode === 'auto'" mdi mdi-robot inline-block align-middle class="align-middle" />

    <span class="ml-2 capitalize">{{ mode }}</span>
  </button>

  <span class="p-4 opacity-50">← Click to change the color mode</span>
</template>

<style>
html.cafe {
  filter: sepia(0.9) hue-rotate(315deg) brightness(0.9);
}
html.contrast {
  filter: contrast(2);
}


</style>