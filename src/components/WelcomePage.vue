<template>
  <EYLayout :title="title">
    <div id="WelcomePage">
      <div class="row">
        <TileComponent metric="$ 12.1" concept="Ingresos" detail="Ingresos Nominales MDP" icon="circle"></TileComponent>
        <TileComponent metric="$ 12.2" concept="Ingresos" detail="Ingresos Nominales MDP" icon="circle"></TileComponent>
      </div>
      <div class="row">
        <TileComponent metric="$ 12.3" concept="Ingresos" detail="Ingresos Nominales MDP" icon="circle"></TileComponent>
      </div>
    </div>
  </EYLayout>
</template>

<script>
import EYLayout from "./EYLayout";
import TileComponent from "./TileComponent";

export default {
  name: "WelcomePage",
  props: {
    title: String,
  },
  components: {
    EYLayout,
    TileComponent,
  },
  data() {
    return {
      msg1: "Llenado de Declaración",
    };
  },
  methods: {
    openChart: function (event) {
        this.$router.push({name:'chart'});
    }
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
