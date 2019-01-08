<template>
  <EYLayout :title="title">
    <div id="WelcomePage">
      <div class="row"> <TileComponent :metric="metrics.summary1.amount" :concept="metrics.summary1.name" :detail="metrics.summary1.description" icon="bar-chart-2"></TileComponent> <TileComponent :metric="metrics.summary2.amount" :concept="metrics.summary2.name" :detail="metrics.summary2.description" icon="bar-chart-2"></TileComponent> <TileComponent :metric="metrics.summary3.amount" :concept="metrics.summary3.name" :detail="metrics.summary3.description" icon="bar-chart-2"></TileComponent>
      </div>
      <div class="row">
        <canvas id="main-chart" @click="click">{{ msg }}</canvas>
      </div>
    </div>
  </EYLayout>
</template>

<script>
import EYLayout from "./EYLayout";
import TileComponent from "./TileComponent";
import Chart from "chart.js";


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
      metrics: {
        summary1: {name: "Ingresos", description: "Ingresos Nominales MDP", amount:"$ 13.23"},
        summary2: {name: "ISR", description: "ISR Retenido MDP", amount:"$ 0.32"},
        summary3: {name: "Coef", description: "Coeficiente de Utilidad", amount:"0.04"},
      }
    };
  },
  methods: {
    openChart: function (event) {
        this.$router.push({name:'chart'});
    },
    click: function (event) {
        alert('Hola');
    },
  },
  mounted: function () {
  var ctx = document.getElementById("main-chart");
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
      datasets: [{
        data: [2.567, 4.291, 5.981, 7.549, 8.966, 10.561, 11.652, 13.198],
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: '#007bff',
        borderWidth: 4,
        pointBackgroundColor: '#007bff',
        type: 'bar',
        label: 'Ingresos Acumulados',
      },
      {
        data: [2.567, 1.723, 1.690, 1.568, 1.416, 1.594, 1.091, 1.545],
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: '#ff7bff',
        borderWidth: 8,
        pointBackgroundColor: '#007bff',
        type: 'line',
        label: 'Ingresos Nominales',
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      },
      legend: {
        display: false,
      }
    }
  });
},

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
