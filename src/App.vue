<template>
  <div class="about">
    <header class="about-bg">
      <b-container>
        <b-row>
          <b-col cols="12">
            <div class="site-heading">
              <h1 class="text-white text-uppercase fst-italic">
                Start <span>Exercises</span>
              </h1>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </header>
    <b-container class="py-5">
      <b-row>
        <div class="col-lg-7">
          <iframe width="660" height="355" src="https://www.youtube.com/embed/r24ntO4IvKc" title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
          <h3 align="center" class="my-3">Exercise Profile</h3>
          <table class="table">
            <thead class="thead-dark">
            </thead>
            <tbody>
              <tr>
                <th scope="row">Target Muscle Group</th>
                <td>Abs</td>

              </tr>
              <tr>
                <th scope="row">Exercise Type</th>
                <td>Strength</td>
              </tr>
              <tr>
                <th scope="row">Equipment Required</th>
                <td>Bodyweight</td>
              </tr>
              <tr>
                <th scope="row">Mechanics</th>
                <td>Isolation</td>
              </tr>
              <tr>
                <th scope="row">Force Type</th>
                <td>Pull (Bilateral)</td>
              </tr>

              <tr>
                <th scope="row">Experience Level</th>
                <td>Beginner</td>
              </tr>
              <tr>
                <th scope="row">Secondary Muscles</th>
                <td>None</td>
              </tr>
            </tbody>
          </table>

          <h3 class="my-2">Lying Floor Leg Raise Overview</h3>
          <p>The lying floor leg raise is a variation of the abdominal crunch and an exercise used to isolate the
            <br> muscles of the abdomen.
          </p>
          <p>The lying floor leg raise is a flexion based exercise which keeps the lower abdominal muscles under
            <br>
            constant tension during the entire range of motion.
          </p>

        </div>
        <div class="col-lg-5 camera-container">
          <div class="about-right-text">


            <div>

              <h3 class="div-left">CHECK MY POSTURE</h3>

              <div class="camera-button div-right">
                <button type="button" class="button is-rounded"
                  :class="{ 'is-primary': !isCameraOpen, 'is-danger': isCameraOpen }" @click="toggleCamera">
                  <span v-if="!isCameraOpen"><i class="bi bi-webcam" style="font-size: 1.5rem; "></i>Open Camera</span>
                  <span v-else><i class="bi bi-webcam" style="font-size: 1.5rem; "></i>Close Camera</span>
                </button>
              </div>
            </div>


            <div class="web-camera-container">

              <div v-show="isCameraOpen && isLoading" class="camera-loading">
                <ul class="loader-circle">
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>

              <div v-if="isCameraOpen" v-show="!isLoading" class="camera-box" :class="{ 'flash': isShotPhoto }">

                <div class="camera-shutter" :class="{ 'flash': isShotPhoto }"></div>

                <video v-show="!isPhotoTaken" ref="camera" :width="533.3" :height="400" autoplay></video>

                <canvas v-show="isPhotoTaken" id="photoTaken" ref="canvas" :width="450" :height="337.5"></canvas>
              </div>
            </div>



          </div>
        </div>
      </b-row>
    </b-container>
  </div>
</template>

<script>

export default {
  name: 'Videos',
  data() {
    return {
      isCameraOpen: false,

      isLoading: false,
      link: '#'
    }
  },

  methods: {
    toggleCamera() {
      if (this.isCameraOpen) {
        this.isCameraOpen = false;

        this.stopCameraStream();
      } else {
        this.isCameraOpen = true;
        this.createCameraElement();
      }
    },

    createCameraElement() {
      this.isLoading = true;

      const constraints = (window.constraints = {
        audio: false,
        video: true
      });


      navigator.mediaDevices
        .getUserMedia(constraints)
        .then(stream => {
          this.isLoading = false;
          this.$refs.camera.srcObject = stream;
        })
        .catch();
    },

    stopCameraStream() {
      let tracks = this.$refs.camera.srcObject.getTracks();

      tracks.forEach(track => {
        track.stop();
      });
    },




  }

  // data() {
  //   return {
  //     isCameraOpen: false,
  //     isLoading: false,
  //     link: '#'
  //   }
  // },

  // methods: {
  //   toggleCamera() {
  //     if (this.isCameraOpen) {
  //       this.isCameraOpen = false;
  //       this.stopCameraStream();
  //     }
  //     else {
  //       this.isCameraOpen = true;
  //       this.createCameraElement();
  //     }
  //   },
  //   createCameraElement() {
  //     this.isLoading = true;
  //     const constraints = (window.constraints = {
  //       audio: false,
  //       video: true
  //     });
  //     navigator.mediaDevices.getUserMedia(constraints).then(stream => {
  //       this.isLoading = false;
  //       this.$refs.camera.srcObject = stream
  //     }).catch(error => {
  //       this.isLoading = false;
  //       alert("Browser did not support" + error)
  //     });
  //   },
  //   stopCameraStream() {
  //     let tracks = this.$refs.camera.srcObject.getTracks();

  //     tracks.forEach(track => {
  //       track.stop();
  //     });
  //   }
  // }
}

</script>

<style scoped>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css");

.table {
  background-color: rgb(246, 222, 222);
  width: 660px;
}

.div-left {
  float: left;
}

.div-right {
  float: right;
}

.about-bg {
  padding: 20px 0 100px;
  position: relative;
  background-image: url("../assets/acercade.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.site-heading {
  text-align: center;
  padding: 75px 0 0;
}

span {
  color: #f30b47;
}

.about-left {
  position: relative;
}

.media {
  display: flex;
  align-items: flex-start;
}

.about-left-text {
  background-color: #f30a46;
  width: 45%;
  padding: 80px 58px;
  text-transform: uppercase;
  -webkit-transform: translateY(12%);
  -ms-transform: translateY(12%);
  transform: translateY(12%);
}

.about-left-img {
  width: 55%;
}

.about-left-img img {
  width: 100%;
}

.about-right-text {
  padding: 0px 0 0;
}

.about-right-text h3 {
  font-size: 30px;
  line-height: 40px;
  color: #f30a46;
  font-weight: 500;
  padding-bottom: 10px;
}

.about-right-text p {
  text-align: justify;
}

@media (max-width: 767px) {
  .media {
    display: block;
  }

  .about-left-text {
    width: 100%;
    padding: 40px 10px;
  }

  .about-left-img {
    width: 100%;
  }

  .about-right-text {
    padding: 30px 0 0;
  }
}
</style>
