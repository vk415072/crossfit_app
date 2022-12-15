<!-- eslint-disable prettier/prettier -->
<template>
  <div>
    <!-- Slider -->
    <div class="slider">
      <b-carousel
        id="carousel-fade"
        style="text-shadow: 0px 0px 2px #000"
        fade
        indicators
        controls
        img-width="1024"
        img-height="480"
      >
        <b-carousel-slide :img-src="require('../assets/slider-1.jpg')">
          <h3 class="txt-slider">A COOL PLACE TO TRAIN</h3>
        </b-carousel-slide>
        <b-carousel-slide :img-src="require('../assets/slider-2.jpg')">
          <h3 class="txt-slider">Become a beast</h3>
        </b-carousel-slide>
        <b-carousel-slide :img-src="require('../assets/slider-3.jpg')">
          <h3 class="txt-slider">
            Get in shape with us
          </h3></b-carousel-slide
        >
      </b-carousel>
    </div>
    <!-- Intro -->
    <b-container class="my-5">
      <b-row>
        <b-col class="mb-5" cols="12">
          <h2 class="titles text-uppercase text-center fst-italic">
            Why <span>crossfit?</span>
          </h2>
          <p class="text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, laudantium! Quos, illum adipisci! Fugiat consequatur cumque architecto eaque esse pariatur repellat a explicabo, voluptate adipisci tenetur quos, facere perspiciatis odio vero sapiente? Repudiandae earum cumque ratione, atque illum excepturi similique. Delectus doloribus veniam molestias obcaecati aut voluptatibus soluta placeat, quidem quod nemo quas beatae rerum facilis quibusdam iste vero esse corporis? Minus, atque illo! Tempora dolorum ab veritatis optio a minus mollitia sit corporis inventore animi ipsam dolor temporibus ullam quis labore officiis, quos ut! Ipsum deserunt consectetur repellendus, quam perferendis repellat id eligendi necessitatibus, aliquam optio sequi, saepe ipsam!
          </p>
        </b-col>
      </b-row>
      <b-row>
        <b-col sm="4" md="4">
          <div class="feature-item">
            <div class="feature-i">
              <img class="icon-por" src="../assets/peso.png" />
            </div>
            <div class="feature-text">
              <h3>Crossfit</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores totam placeat laborum est iure perferendis ut quae, cumque deleniti repellat.
              </p>
            </div>
          </div>
        </b-col>
        <b-col sm="4" md="4">
          <div class="feature-item">
            <div class="feature-i">
              <img class="icon-por" src="../assets/levantar.png" />
            </div>
            <div class="feature-text">
              <h3>Lift</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem necessitatibus inventore velit, debitis magnam cumque ex veritatis molestiae accusamus tempore?
              </p>
            </div>
          </div>
        </b-col>
        <b-col sm="4" md="4">
          <div class="feature-item">
            <div class="feature-i">
              <img class="icon-por" src="../assets/pesa.png" />
            </div>
            <div class="feature-text">
              <h3>Madness</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quam nemo recusandae beatae accusantium ex inventore perspiciatis, consectetur nulla vero.
              </p>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <!-- Planes-->
    <section class="bg-prices py-5">
      <b-container>
        <b-row>
          <b-col>
            <h2 class="titles text-uppercase text-center fst-italic">
              Invest in your <span>Health!</span>
            </h2>
            <p class="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, obcaecati possimus, inventore minima voluptatibus nulla repellendus fugit sed quasi eos ea explicabo aperiam provident ab maxime cum doloribus, quia fuga! Dolores tempore dolorem vel eligendi eum consequuntur? Dolorem, sint fugit.
            </p>
          </b-col>
        </b-row>
        <Planes CantidadMostar="3" />
        <b-row class="pt-5">
          <b-col>
            <router-link class="btn-vert text-center" to="/socio"
              >See all plans</router-link
            >
          </b-col>
        </b-row>
      </b-container>
    </section>
    <!-- Calculate body mass index -->
    <section class="py-5">
      <b-container>
        <BmiCalculator />
      </b-container>
    </section>
  </div>
</template>




<script>
// import Planes from "@/components/Planes.vue";
// import BmiCalculator from "@/components/BmiCalculator.vue";
export default {
  name: "Home",
  components: {
    // Planes,
    // BmiCalculator,
  },
};
</script>





<style scoped>
.slider {
  width: 100%;
}
.carousel-caption {
  right: initial;
  left: 240px;
  top: 320px;
  text-align: left;
}
h3.txt-slider {
  position: absolute;
  left: 0;
  top: -300px;
  font-size: 60px;
  text-align: left;
  text-transform: uppercase;
  font-style: italic;
}
.titles-salud {
  color: #001e3c;
  font-style: italic;
}
.titles {
  color: #f30b47;
}
span {
  color: #001e3c;
}
.icon-por {
  width: 45px;
}
.tit-le {
  margin-left: 15px;
}
.cual {
  color: #f30b47;
}
.lower-content h3 {
  color: #f30b47;
  font-style: italic;
}
.btn-vert:hover{
  color: #fff;
}
</style>
