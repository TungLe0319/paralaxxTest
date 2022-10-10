<template>

  <div  v-motion-slide-visible-once-bottom  ref="targetCard">
  <img src="https://i.ytimg.com/vi/WF68FcI21es/maxresdefault.jpg" alt="">
 
  </div>

</template>

<script>
export default {
  props: {

  },

  setup(props) {

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
};
</script>

<style lang="scss" scoped>

.text-shadow{
  color: aliceblue;
  text-shadow: 1px 1px black, 0px 0px 5px salmon;
  font-weight: bold;
  letter-spacing: 0.08rem
  /* Second Color  in text-shadow is the blur */
}
.forcedImg{
  height: 300px;
  width: 300px;
  object-fit: cover;
}


</style>
