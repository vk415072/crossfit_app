<!-- eslint-disable prettier/prettier -->
<template>
  <div class="calculator">
    <b-row class="d-flex align-items-center">
      <b-col cols-sm="4" cols-md="4" cols-lg="4">
        <h4 class="cual">What is your IBM?</h4>
        <h3 class="text-uppercase fst-italic">
          Calculate your body mass index
        </h3>
      </b-col>
      <b-col cols-sm="8" cols-md="8" cols-lg="8">
        <div class="row row-cols-lg-auto g-3 align-items-center">
          <div class="col-12">
            <b-form-input
              id="inline-form-input-name"
              v-model="formcalc.weight"
              class="mb-2 mr-sm-2 mb-sm-0 calc"
              placeholder="weight / Kg"
            >
            </b-form-input>
          </div>
          <div class="col-12">
            <b-form-input
              id="inline-form-input-name"
              v-model="formcalc.height"
              class="mb-2 mr-sm-2 mb-sm-0 calc"
              placeholder="height / cm"
            >
            </b-form-input>
          </div>
          <div class="col-12">
            <button class="btn-calc" @click="calculateBmi()">calculate</button>
          </div>
        </div>
        <div class="result-imc" v-if="formcalc.result">
          Your BMI is {{ formcalc.result }} (Kg/m<sup>2</sup>)
        </div>
        <div v-else></div>
      </b-col>
    </b-row>
  </div>
</template>





<script>
export default {
  name: "BmiCalculator",
  data() {
    return {
      formcalc: {
        weight: "",
        height: "",
        result: "",
      },
    };
  },
  methods: {
    calculateBmi() {
      const pes = parseInt(this.formcalc.weight);
      const alt = parseInt(this.formcalc.height) / 100;
      const square = Math.pow(alt, 2);
      const total = pes / square;
      this.formcalc.result = Math.round(total);
      this.formcalc.weight = "";
      this.formcalc.height = "";
    },
  },
};
</script>







<style scoped>
.result-imc {
  width: 70%;
  text-align: center;
  margin: 10px 0;
  color: #d75879;
  font-weight: bold;
  font-size: 20px;
}
</style>
