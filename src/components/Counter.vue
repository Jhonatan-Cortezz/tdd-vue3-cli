<script setup>
import { ref, computed } from 'vue'
const counter = ref(5)

const getSquareCounter = () => {
  console.log('getSquareCounter');
  return counter.value * counter.value
}

const squareCounter = computed(() => {
  console.log('computedSquereCounter');
  return counter.value * counter.value
})
</script>
<template>
  <h2>Counter</h2>
  <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>
  <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>
  <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>
  <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>
  <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>
  <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>
  <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>
</template>