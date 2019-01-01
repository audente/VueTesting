<template>
  <EYLayout :title="title">
    <div id="LoginPage">
      <h1>{{ msg }}</h1>
    </div>
  </EYLayout>
</template>

<script>
import EYLayout from "./EYLayout";

export default {
  name: "LoginPage",
  props: {
    title: String,
  },
  data() {
    return {
      msg: "Hello beauty Vue.js!",
      components: {
        EYLayout
      }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
#LoginPage {
  color: inherit;
}

</style>
