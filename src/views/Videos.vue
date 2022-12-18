<template>
  <div class="about">
    <header class="about-bg">
      <b-container>
        <b-row>
          <b-col cols="12">
            <div class="site-heading">
              <h1 class="text-white text-uppercase fst-italic">
                Record <span>Session</span>
              </h1>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </header>
    <b-container class="py-5">
      <b-row>
        <div class="col-lg-6">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/7pbZA7ncuq8" title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        </div>
        <div class="col-lg-6">
          <div class="about-right-text">
            <h3>We offer a free first trial class</h3>



            <div class="web-camera-container">
              <div class="camera-button">
                <button type="button" class="button is-rounded"
                  :class="{ 'is-primary': !isCameraOpen, 'is-danger': isCameraOpen }" @click="toggleCamera">
                  <span v-if="!isCameraOpen"><i class="bi bi-webcam" style="font-size: 3rem; "></i>Open Camera</span>
                  <span v-else><i class="bi bi-webcam" style="font-size: 3rem; "></i>Close Camera</span>
                </button>
              </div>

              <div v-show="isCameraOpen && isLoading" class="camera-loading">
                <ul class="loader-circle">
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>

              <div v-if="isCameraOpen" v-show="!isLoading" class="camera-box" :class="{ 'flash': isShotPhoto }">

                <div class="camera-shutter" :class="{ 'flash': isShotPhoto }"></div>

                <video v-show="!isPhotoTaken" ref="camera" :width="450" :height="337.5" autoplay></video>

                <canvas v-show="isPhotoTaken" id="photoTaken" ref="canvas" :width="450" :height="337.5"></canvas>
              </div>

              <div v-if="isCameraOpen && !isLoading" class="camera-shoot">
                <button type="button" class="button" @click="takePhoto">
                  <img src="https://img.icons8.com/material-outlined/50/000000/camera--v2.png">
                </button>
              </div>

              <div v-if="isPhotoTaken && isCameraOpen" class="camera-download">
                <a id="downloadPhoto" download="my-photo.jpg" class="button" role="button" @click="downloadImage">
                  Download
                </a>
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
      isPhotoTaken: false,
      isShotPhoto: false,
      isLoading: false,
      link: '#'
    }
  },

  methods: {
    toggleCamera() {
      if (this.isCameraOpen) {
        this.isCameraOpen = false;
        this.isPhotoTaken = false;
        this.isShotPhoto = false;
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

    takePhoto() {
      if (!this.isPhotoTaken) {
        this.isShotPhoto = true;

        const FLASH_TIMEOUT = 50;

        setTimeout(() => {
          this.isShotPhoto = false;
        }, FLASH_TIMEOUT);
      }

      this.isPhotoTaken = !this.isPhotoTaken;

      const context = this.$refs.canvas.getContext('2d');
      context.drawImage(this.$refs.camera, 0, 0, 450, 337.5);
    },

    downloadImage() {
      const download = document.getElementById("downloadPhoto");
      const canvas = document.getElementById("photoTaken").toDataURL("image/jpeg")
        .replace("image/jpeg", "image/octet-stream");
      download.setAttribute("href", canvas);
    }
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

.about-bg {
  padding: 30px 0 170px;
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
