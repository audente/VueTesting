<template>
  <EYLayout :title="title">
    <template slot="SideBar"><MexichemSideBar></MexichemSideBar></template>
    <div id="TablePage">
      <div class="row">
        <div class="table-responsive">
          <table class="table table-striped table-sm">
            <thead>
              <tr>
                <thead>Hola</thead>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{{ msg }}</td>
              </tr>
            </tbody>
          </table> 
        </div>
      </div>
    </div>
  </EYLayout>
</template>

<script>
import EYLayout from "./EYLayout";
import MexichemSideBar from "./MexichemSideBar";

export default {
  name: "TablePage",
  components: {
    EYLayout, 
    MexichemSideBar,
  },
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
