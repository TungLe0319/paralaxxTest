<template>

  .<div class="container  ">
  <div class="row justify-content-center ">
    <div class="col-md-10 d-flex justify-content-center bg-primary rounded elevation-5 ">
  <swiper
    :slidesPerView="3"
    :spaceBetween="30"
    :slidesPerGroup="3"
    :loop="true"
    :loopFillGroupWithBlank="true"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide class="swiper-slide"> <div class="card   elevation-3 mx-4 my-2 " style="width:18rem;">
                <div class="d-flex justify-content-center">
                  <img src="https://d2ph5fj80uercy.cloudfront.net/04/cat3676.jpg" alt=""
                    class="img-fluid rounded mt-2 elevation-4">
                </div>
                <div class="card-body ">
                  <div class="border-bottom border-dark border-3">
                    <h5>Title</h5>
                  </div>
                  <div class="d-flex justify-content-end text-shadow mt-2">
                    <h6>PlaceHolder Text</h6>
                  </div>
                  <div>
                    <small>Description Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum blanditiis atque
                      quaerat qui architecto!</small>
                  </div>
                </div>
              </div></swiper-slide><swiper-slide> <div class="card   elevation-3 mx-4 my-2 " style="width:18rem;">
                          <div class="d-flex justify-content-center">
                            <img src="https://d2ph5fj80uercy.cloudfront.net/04/cat3676.jpg" alt=""
                              class="img-fluid rounded mt-2 elevation-4">
                          </div>
                          <div class="card-body ">
                            <div class="border-bottom border-dark border-3">
                              <h5>Title</h5>
                            </div>
                            <div class="d-flex justify-content-end text-shadow mt-2">
                              <h6>PlaceHolder Text</h6>
                            </div>
                            <div>
                              <small>Description Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum blanditiis atque
                                quaerat qui architecto!</small>
                            </div>
                          </div>
                        </div></swiper-slide
    ><swiper-slide> <div class="card   elevation-3 mx-4 my-2 " style="width:18rem;">
                <div class="d-flex justify-content-center">
                  <img src="https://d2ph5fj80uercy.cloudfront.net/04/cat3676.jpg" alt=""
                    class="img-fluid rounded mt-2 elevation-4">
                </div>
                <div class="card-body ">
                  <div class="border-bottom border-dark border-3">
                    <h5>Title</h5>
                  </div>
                  <div class="d-flex justify-content-end text-shadow mt-2">
                    <h6>PlaceHolder Text</h6>
                  </div>
                  <div>
                    <small>Description Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum blanditiis atque
                      quaerat qui architecto!</small>
                  </div>
                </div>
              </div></swiper-slide><swiper-slide> <div class="card   elevation-3 mx-4 my-2 " style="width:18rem;">
                          <div class="d-flex justify-content-center">
                            <img src="https://d2ph5fj80uercy.cloudfront.net/04/cat3676.jpg" alt=""
                              class="img-fluid rounded mt-2 elevation-4">
                          </div>
                          <div class="card-body ">
                            <div class="border-bottom border-dark border-3">
                              <h5>Title</h5>
                            </div>
                            <div class="d-flex justify-content-end text-shadow mt-2">
                              <h6>PlaceHolder Text</h6>
                            </div>
                            <div>
                              <small>Description Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum blanditiis atque
                                quaerat qui architecto!</small>
                            </div>
                          </div>
                        </div></swiper-slide
    ><swiper-slide> <div class="card   elevation-3 mx-4 my-2 " style="width:18rem;">
                <div class="d-flex justify-content-center">
                  <img src="https://d2ph5fj80uercy.cloudfront.net/04/cat3676.jpg" alt=""
                    class="img-fluid rounded mt-2 elevation-4">
                </div>
                <div class="card-body ">
                  <div class="border-bottom border-dark border-3">
                    <h5>Title</h5>
                  </div>
                  <div class="d-flex justify-content-end text-shadow mt-2">
                    <h6>PlaceHolder Text</h6>
                  </div>
                  <div>
                    <small>Description Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum blanditiis atque
                      quaerat qui architecto!</small>
                  </div>
                </div>
              </div></swiper-slide><swiper-slide> <div class="card   elevation-3 mx-4 my-2 " style="width:18rem;">
                <div class="d-flex justify-content-center">
                  <img src="https://d2ph5fj80uercy.cloudfront.net/04/cat3676.jpg" alt=""
                    class="img-fluid rounded mt-2 elevation-4">
                </div>
                <div class="card-body ">
                  <div class="border-bottom border-dark border-3">
                    <h5>Title</h5>
                  </div>
                  <div class="d-flex justify-content-end text-shadow mt-2">
                    <h6>PlaceHolder Text</h6>
                  </div>
                  <div>
                    <small>Description Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum blanditiis atque
                      quaerat qui architecto!</small>
                  </div>
                </div>
              </div></swiper-slide
    ><swiper-slide> <div class="card   elevation-3 mx-4 my-2 " style="width:18rem;">
                <div class="d-flex justify-content-center">
                  <img src="https://d2ph5fj80uercy.cloudfront.net/04/cat3676.jpg" alt=""
                    class="img-fluid rounded mt-2 elevation-4">
                </div>
                <div class="card-body ">
                  <div class="border-bottom border-dark border-3">
                    <h5>Title</h5>
                  </div>
                  <div class="d-flex justify-content-end text-shadow mt-2">
                    <h6>PlaceHolder Text</h6>
                  </div>
                  <div>
                    <small>Description Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum blanditiis atque
                      quaerat qui architecto!</small>
                  </div>
                </div>
              </div></swiper-slide><swiper-slide> <div class="card   elevation-3 mx-4 my-2 " style="width:18rem;">
                <div class="d-flex justify-content-center">
                  <img src="https://d2ph5fj80uercy.cloudfront.net/04/cat3676.jpg" alt=""
                    class="img-fluid rounded mt-2 elevation-4">
                </div>
                <div class="card-body ">
                  <div class="border-bottom border-dark border-3">
                    <h5>Title</h5>
                  </div>
                  <div class="d-flex justify-content-end text-shadow mt-2">
                    <h6>PlaceHolder Text</h6>
                  </div>
                  <div>
                    <small>Description Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum blanditiis atque
                      quaerat qui architecto!</small>
                  </div>
                </div>
              </div></swiper-slide
    ><swiper-slide> <div class="card   elevation-3 mx-4 my-2 " style="width:18rem;">
                <div class="d-flex justify-content-center">
                  <img src="https://d2ph5fj80uercy.cloudfront.net/04/cat3676.jpg" alt=""
                    class="img-fluid rounded mt-2 elevation-4">
                </div>
                <div class="card-body ">
                  <div class="border-bottom border-dark border-3">
                    <h5>Title</h5>
                  </div>
                  <div class="d-flex justify-content-end text-shadow mt-2">
                    <h6>PlaceHolder Text</h6>
                  </div>
                  <div>
                    <small>Description Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum blanditiis atque
                      quaerat qui architecto!</small>
                  </div>
                </div>
              </div></swiper-slide>
  </swiper>
    </div>
  </div>
  </div>

</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Pagination, Navigation } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
};
</script>

<style lang="scss" scoped>



</style>