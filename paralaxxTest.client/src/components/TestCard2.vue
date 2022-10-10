<template>

  <div class="container ">
 <div class="row">
  <div class="col-md-12 d-flex ms-3">
<div class="card bg-dark text-white text-shadow glowHover effect2"  >
  <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2016%2F01%2F161383-space-universe-TylerCreatesWorlds.jpg&f=1&nofb=1&ipt=85da0c72faaf326f480263bc5d5923513b8bb821583cc1eba146301bbbe98dbf&ipo=images" class="card-img" alt="...">
  <div class="card-img-overlay">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text">Last updated 3 mins ago</p>
  </div>
  
</div>




  </div>
 </div>
    
  </div>
</template>

<script>
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
import BoxEffect from "./BoxEffect.vue";

export default {
  mounted(){
this.$refs.targetCard
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
        };
    },




    components: { BoxEffect }
};
</script>
` })

<style lang="scss" scoped>


.card{

  transform: v-bind(cardTransform);
     transition: transform 0.25s ease-out;
transition:filter 1s ease
     
}



.glowHover{
  transition:  1s ease;

}
.glowHover:hover {

  filter: saturate(130%);
  filter: brightness(1140%);
}
.card:hover {
transition: all 0.25s ease;

  filter: saturate(120%);
  filter: brightness(120%);
}
.text-shadow {
  color: aliceblue;
  text-shadow: 1px 1px black, 0px 0px 5px salmon;
  font-weight: bold;
  letter-spacing: 0.08rem;
  /* Second Color  in text-shadow is the blur */
}
.forcedImg {
  height: 300px;
  width: 300px;
  object-fit: cover;
}



.text-shadow3d{
 text-shadow: 0 1px 0 rgb(0, 0, 0),
               0 2px 0 #000000,
               0 3px 0 rgb(29, 28, 28),
               0 4px 0 rgb(29, 27, 27),
               0 5px 0 #aaa,
               0 6px 1px rgba(0,0,0,.1),
               0 0 5px rgba(0,0,0,.1),
               0 1px 3px rgba(0,0,0,.3),
               0 3px 5px rgba(0,0,0,.2),
               0 5px 10px rgba(0,0,0,.25),
               0 10px 10px rgba(0,0,0,.2),
               0 20px 20px rgba(0,0,0,.15);
}

.text-shadowRainbow {
  letter-spacing: 0.10em;
  font-size: 10rem;
  text-align: center;
  color: #fcedd8;
  font-family: cursive;
  font-weight: 700;
  text-shadow: 5px 5px 0px #eb452b, 10px 10px 0px #efa032, 15px 15px 0px #46b59b,
    20px 20px 0px #01737f, 25px 25px 0px #052939, 30px 30px 0px #c11a2b,
    35px 35px 0px #c11a2b, 40px 40px 0px #c11a2b, 45px 45px 0px #c11a2b;
}
</style>
