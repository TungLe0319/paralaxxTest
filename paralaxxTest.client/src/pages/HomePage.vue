<template>


<div class="wrapper">
  <section>Section1</section>
  <section>Section2</section>
  <section>Section3</section>
  <section>Section4</section>
</div>


</template>

<script>
export default {
  setup() {
    return {}
  }
}
</script>

<style scoped lang="scss">


.wrapper{
  display: flex;
  overflow: auto;
  scroll-snap-type: x mandatory;
}
section{
  height: 95vh;
  min-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
font-family: sans-serif;
font-size: 14vw;
color: rgb(0, 0, 0);

scroll-snap-align:  start;
}

.wrapper section:nth-child(1){
  background-color: yellow;
}
.wrapper section:nth-child(2){
  background-color: rgb(0, 255, 255);
}
.wrapper section:nth-child(3){
  background-color: rgb(0, 255, 55);
}
.wrapper section:nth-child(4){
  background-color: rgb(111, 0, 255);
}
.wrapper section:nth-child(5){
  background-color: rgb(255, 0, 76);
}





.text-shadow2{
  text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.459);
}
.text-shadow3d{
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
