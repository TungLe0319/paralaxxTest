<template>
  <swiper
     
    :effect="'cube'"
    :grabCursor="true"
    :cubeEffect="{
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    }"
    :pagination="true"
    :modules="modules"
    class="mySwiper"
  >



    <swiper-slide
      ><img
        src="https://swiperjs.com/demos/images/nature-1.jpg" /></swiper-slide
    >
    
    
     <swiper
        class="mySwiper2 swiper-v"
        :direction="'vertical'"
        :spaceBetween="50"
        :pagination="{
          clickable: true,
        }"

        
        :modules="modules"
      >
        <swiper-slide>Vertical Slide 1</swiper-slide>
        <swiper-slide>Vertical Slide 2</swiper-slide>
        <swiper-slide>Vertical Slide 3</swiper-slide>
        <swiper-slide>Vertical Slide 4</swiper-slide>
        <swiper-slide>Vertical Slide 5</swiper-slide>
      </swiper>


    
    
    
    <swiper-slide
      ><img
        src="https://swiperjs.com/demos/images/nature-2.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        src="https://swiperjs.com/demos/images/nature-3.jpg" /></swiper-slide
    ><swiper-slide
      ><img src="https://swiperjs.com/demos/images/nature-4.jpg"
    /></swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { ref, computed } from 'vue';
import { useMouseInElement } from '@vueuse/core';
import {
  cardTransform,
  targetCard,
  elementHeight,
  elementWidth,
  elementX,
  elementY,
  isOutside,
} from './state.js';



// import required modules
import { EffectCube, Pagination } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
        cardTransform,
      targetCard,
      elementHeight,
      elementWidth,
      elementX,
      elementY,
      isOutside,
      modules: [EffectCube, Pagination],
    };
  },
};
</script>

<style scoped lang="scss">

.mySwiper{
  height: 300px;
  width: 300px;

  img{
    height: 300px;
    width: 300px;
    object-fit: cover;
  }
}
</style>
