<template>
    <div id="LoginPage">
      <h1 :id="title">{{ title }}</h1>
  <EYLayout :title="title">
      <h1>{{ msg }}</h1>
  </EYLayout>
      <h1>{{ msg }}</h1>
    </div>
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
      msg: "Hello beauty Vue.js!"
      
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
