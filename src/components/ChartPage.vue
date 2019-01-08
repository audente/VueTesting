<template>
  <EYLayout :title="title">
    <div id="ChartPage">
      <canvas id="testChart"></canvas>
    </div>
  </EYLayout>
</template>

<script>
export default {
  name: "ChartPage",
  components: { },
  props: {
    title: String,
  },
  data() {
    return {
      msg: "Hello beauty Vue.js!"
      
    };
  },

methods: {
    f: function (event) {},
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
#ChartPage {
  color: inherit;
}

</style>
