<template>
  <div
    class="card elevation-3 mx-4 my-2"
    style="width: 18rem"
    ref="target"
    
  >
    <div class="d-flex justify-content-center">
      <img
        src="https://d2ph5fj80uercy.cloudfront.net/04/cat3676.jpg"
        alt=""
        class="img-fluid rounded mt-2 elevation-4"
      />
    </div>
    <div class="card-body">
      <div class="border-bottom border-dark border-3">
        <h5>Title</h5>
      </div>
      <div class="d-flex justify-content-end text-shadow mt-2">
        <h6>PlaceHolder Text</h6>
      </div>
      <div>
        <small
          >Description Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Rerum blanditiis atque quaerat qui architecto!</small
        >
      </div>
    </div>
  </div>
</template>

<script >
import { computed,ref } from '@vue/reactivity';


import { useMouseInElement } from '@vueuse/core   ';

export default {
  setup(props) {
    const target = ref(null);

    const { elementX, elementY, isOutside, elementHeight, elementWidth } =
      useMouseInElement(target);

    const cardTransform = computed(() => {
      const MAX_ROTATION = 6;

      const rX = (
        MAX_ROTATION / 2 -
        (elementY.value / elementHeight.value) * MAX_ROTATION
      ).toFixed(2); //handles x-axis

      const rY = (
        (elementX.value / elementWidth.value) * MAX_ROTATION -
        MAX_ROTATION / 2
      ).toFixed(2); // handles y-axis

      console.log('hi');
      return isOutside.value ? '' : `  perspective(${elementWidth.value}px)  rotateX(${rX}deg) rotateY(${rY}deg)`;
    });
    return {
      cardTransform,
    };
  },
};
</script>

<style lang="scss" scoped>
.card{
  transform: v-bind(cardTransform);
  transition: transform 0.25s ease-out;
}

</style>
