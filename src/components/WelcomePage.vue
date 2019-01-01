<template>
  <div class="WelcomePage">
    <h1>{{ msg1 }}</h1>
    <hr />
    <p>{{ msg2 }}</p>
    <p><small>{{ msg3 }}</small></p>
  </div>
</template>

<script>
export default {
  name: "WelcomePage",
  data() {
    return {
      msg1: "Llenado de Declaración"
      msg2: "Te ayuda a llenar de forma rápida una declaración con base en la balanza de un clinte."
      msg3: "Si tienes dudas contacta al equipo de TTDA."
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">

.WelcomePage {
  text-align: "center";
  vertical-align: "middle";
}

h1,
h2 {
  font-weight: 900;
}

</style>
