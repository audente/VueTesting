<template>
  <div id="TablePage">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "TablePage",
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
#TablePage {
  color: inherit;
}

</style>
