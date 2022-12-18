<template>
  <div class="web-camera-container">
    <div class="camera-button">
      <button type="button" class="button is-rounded" :@click="toggleCamera">
        <span v-if="!isCameraOpen">open camera</span>
        <span v-else>close camera</span>
      </button>
    </div>

    <div class="camera-loading">
      <ul class="loader-circle">
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>

    <div class="camera-box">
      <div class="camera-shutter">
        <video autoplay></video>
        <canvas></canvas>
      </div>
    </div>


  </div>
</template>


<script>

export default {
  name: 'WebCamera',
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
      }
      else {
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
      navigator.mediaDevices.getUserMedia(constraints).then(stream => {
        this.isLoading = false;
        this.$refs.camera.srcObject = stream
      }).catch(error => {
        this.isLoading = false;
        alert("Browser did not support" + error)
      });
    },
    stopCameraStream() {
      let tracks = this.$refs.camera.srcObject.getTracks();

      tracks.forEach(track => {
        track.stop();
      });
    }
  }
}

</script>


<style>

</style>