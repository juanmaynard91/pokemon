<template>
  <div id="chart">
    <apexchart type="bar" height="350" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script setup>
import { computed } from "vue"

const props = defineProps({
  stats: Array
})

const series = computed(()=>{
  return [{ name: "Estadistica", data: props.stats }]
})

const chartOptions = {
  chart: { type: "bar", height: 350 },
  plotOptions: {
    bar: { borderRadius: 4, horizontal: true },
  },
  dataLabels: { enabled: false },
  xaxis: {
    categories: [ "HP", "Ataque", "Defensa", "Ataque Especial", "Defensa Especial", "Velocidad" ],
  },
};
</script>

<style>
</style>