<template>
  <!-- <Transition name="fade">
<div class="container d-flex  justify-content-center" >
     
          <TestCard2 />

</div>

</Transition> -->
  <div class="container mt-5 your-element" >
    <div class="row mt-5">
      <div class="your-element" data-tilt  >
<TestCard2    />



      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { AppState } from '../AppState';
import Slider from '../components/Slider.vue';
import HoverEffect from '../components/HoverEffect.vue';
import Test1 from '../components/Test1.vue';
import TestCard from '../components/TestCard.vue';

import TestCard2 from '../components/TestCard2.vue';
import ColorMode from '../components/ColorMode.vue';
import BoxEffect from '../components/BoxEffect.vue';
import Nested from "../components/Nested.vue";

import VanillaTilt from 'vanilla-tilt';

import {
  cardTransform,
  targetCard,
  elementHeight,
  elementWidth,
  elementX,
  elementY,
  isOutside,
} from '../components/state.js';
import Swiper2 from "../components/Swiper2.vue";
export default {

  setup() {

    onMounted(()=>{

    })

    
    return {

     cardTransform,
  targetCard,
  elementHeight,
  elementWidth,
  elementX,
  elementY,
  isOutside,
      account: computed(() => AppState.account),
      
    };
  },
  components: {
    VanillaTilt,
    Slider,
    HoverEffect,
    Test1,
    TestCard,
    TestCard2,
    ColorMode,
    BoxEffect,
    Nested,
    Swiper2
},



mounted(){
this.$refs.targetCard
console.log(this.$refs.targetCard);
}
};
</script>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 4.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
