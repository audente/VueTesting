<template>
  <EYLayout :title="title">
    <div id="WelcomePage">
      <h1>{{ msg1 }}</h1>
      <hr />
      <p>{{ msg2 }}</p>
      <p>{{ msg3 }}</p>
      <hr />
      <button type="button" class="btn btn-primary" @click="openChart">Chart</button>
      <button type="button" class="btn btn-primary" @click="openOpenfile">Open File</button>

    </div>
  </EYLayout>
</template>

<script>
import EYLayout from "./EYLayout";

export default {
  name: "WelcomePage",
  props: {
    title: String,
  },
  components: {
    EYLayout,
  },
  data() {
    return {
      msg1: "Llenado de Declaración",
      msg2: "Te ayuda a llenar de forma rápida una declaración con base en la balanza de un cliente.",
      msg3: "Si tienes dudas contacta al equipo de TTDA.",
    };
  },
  methods: {
    openChart: function (event) {
        this.$router.push({name:'chart'});
    },
    openOpenfile: function (event) {
        this.$router.push({name:'openfile'});
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">

h1, 
p {
  text-align: "center";
  vertical-align: "middle";
}

h1,
h2 {
  font-weight: 900;
}

</style>
