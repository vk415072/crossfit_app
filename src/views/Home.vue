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
          <h3 class="txt-slider">A cool place to train</h3>
        </b-carousel-slide>
        <b-carousel-slide :img-src="require('../assets/slider-2.jpg')">
          <h3 class="txt-slider">Get our plans</h3>
        </b-carousel-slide>
        <b-carousel-slide :img-src="require('../assets/slider-3.jpg')">
          <h3 class="txt-slider">Get fit with us</h3></b-carousel-slide
        >
      </b-carousel>
    </div>

    <!-- Intro -->
    <b-container class="my-5">
      <b-row>
        <b-col class="mb-5" cols="12">
          <h2 class="titles text-uppercase text-center fst-italic">
            Why do <span>crossfit?</span>
          </h2>
          <p class="text-center">
            One of the main benefits of doing crossfit is that it helps Remove
            fat. As a consequence of the intensity of the exercises which
            proposes, Crossfit is a training method with which We can lose
            weight quickly and effectively.Is a type of training in which there
            is almost no rest.
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
                Crossfit is a physical strength and conditioning program total,
                which is based on the increase of ten capacities most recognized
                physics by specialists in the Sports training with weights.
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
                Weights or weightlifting is a sport that It consists of lifting
                the maximum possible weight in a bar whose ends are set several
                albums, which are the ones They determine the final weight that
                rises.
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
                Madness are our functional training classes carried out at the
                next level. 60 minutes of constant work focused on Improve your
                cardiovascular resistance.
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
              Invest in <span>Your Health!</span>
            </h2>
            <p class="text-center">
              Acquire our plans for an excellent price. The registration It's
              free if you buy via web!
            </p>
          </b-col>
        </b-row>
        <Planes CantidadMostar="3" />
        <b-row class="pt-5">
          <b-col>
            <router-link class="btn-vert text-center" to="/membership"
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
import Planes from "@/components/Planes.vue";
import BmiCalculator from "@/components/BmiCalculator.vue";
import { mapState } from "vuex";
export default {
  name: "Home",
  components: {
    Planes,
    BmiCalculator,
  },
  computed: {
    ...mapState(["userRole"]),
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
.btn-vert:hover {
  color: #fff;
}
</style>
