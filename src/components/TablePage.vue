<template>
  <EYLayout :title="title">
    <template slot="SideBar"><MexichemSideBar></MexichemSideBar></template>
    <div id="TablePage">
      <div class="row">
        <table>
          <tr>
            <thead>Hola</thead>
          </tr>
          <tr>
            <td>{{ msg }}</td>
          </tr>
        </table> 
      </div>
    </div>
  </EYLayout>
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
