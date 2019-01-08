<template>
  <EYLayout :title="title">
    <div id="ChartPage">
      <canvas id="testChart"></canvas>
    </div>
  </EYLayout>
</template>

<script>
import EYLayout from "./EYLayout";

export default {
  name: "ChartPage",
  components: {
    EYLayout, 
  },
  props: {
    title: String,
  },
  data() {
    drawChart();
    return {
      msg: "Hello beauty Vue.js!"
      
    };
  },
  methods: {
    f: drawChart() {
      var ctx = document.getElementById("ChartPage");
      var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          datasets: [{
            data: [15339, 21345, 18483, 24003, 23489, 24092, 12034],
            lineTension: 0,
            backgroundColor: 'transparent',
            borderColor: '#007bff',
            borderWidth: 4,
            pointBackgroundColor: '#007bff'
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: false
              }
            }]
          },
          legend: {
            display: false,
          }
        }
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
#ChartPage {
  color: inherit;
}

</style>
