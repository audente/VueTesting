<template>
  <EYLayout :title="title">
    <template slot="SideBar"><MexichemSideBar></MexichemSideBar></template>
    <div id="TablePage">
      <div class="row">
        <div class="table-responsive">
          <table class="table table-striped table-sm">
            <thead>
              <tr>
                <th v-for="headname in table.head">{{ headname }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="rowcontent in table.body">
                <td v-for="colcontent in rowcontent">{{ colcontent }}</td>
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
      table: {
        head: ["Concepto", "Enero", "Febrero"],
        body: [
          ["Ingresos Nominales", "$2,567,173,390", "$1,723,991,281",],
          ["Ingresos Acumulados", "$2,567,173,390", "$4,291,164,672",],
          ["Coeficiente", "0.02", "$0.02",],
        ] 
      }
      
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
