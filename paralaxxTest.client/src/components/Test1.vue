<script setup lang="ts">
import { ref, computed } from 'vue'
import { useMouseInElement } from '@vueuse/core'
const target = ref(null)
const { elementX, elementY, isOutside, elementHeight, elementWidth } =
  useMouseInElement(target)
const cardTransform = computed(() => {
  const MAX_ROTATION = 10
  const rX = (
    MAX_ROTATION / 2 -
    (elementY.value / elementHeight.value) * MAX_ROTATION
  ).toFixed(2) // handles x-axis
  const rY = (
    (elementX.value / elementWidth.value) * MAX_ROTATION -
    MAX_ROTATION / 2
  ).toFixed(2) // handles y-axis
  return isOutside.value
    ? ''
    : `perspective(${elementWidth.value}px) rotateX(${rX}deg) rotateY(${rY}deg)`
})
</script>

<template>
 <section class="container">
      <div class="row">
        <div class="col-md-3">
  <div
    class=" rounded 0 card"
    ref="target"
    :style="{
      transform: cardTransform,
      transition: 'transform 0.25s ease-out'
    }"
  >
    <h1 class="mb-2 text-2xl font-bold">B.S. Meeting Notes 🥴</h1>
    <section class="flex items-center">
      <img
        src="https://learnvue.co/img/matt-maribojoc.png"
        class="w-8 h-8 mr-4 rounded"
      />
      <h2 class="font-2xl">@mattmaribojoc</h2>
    </section>
    <p class="mt-4">
      Organic growth beef up, and shotgun approach note for the previous submit:
      Can you ballpark the cost per unit for me. Conversational content reach
      out, what's the status on the deliverables for eow?
    </p>
  </div>
        </div>
      </div>
    </section>

</template>

<style scoped>
/* .card {
  transform: v-bind(cardTransform);
  transition: transform 0.25s ease-out;
} */

.card{

   text-shadow: 0 1px 0 #ccc,
                 0 2px 0 #c9c9c9,
                 0 3px 0 #bbb,
                 0 4px 0 #b9b9b9,
                 0 5px 0 #aaa,
                 0 6px 1px rgba(0,0,0,.1),
                 0 0 5px rgba(0,0,0,.1),
                 0 1px 3px rgba(0,0,0,.3),
                 0 3px 5px rgba(0,0,0,.2),
                 0 5px 10px rgba(0,0,0,.25),
                 0 10px 10px rgba(0,0,0,.2),
                 0 20px 20px rgba(0,0,0,.15);
  
}
</style>