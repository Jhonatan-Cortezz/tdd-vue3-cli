<script setup>
import { ref, computed } from 'vue'

/* props */
const props = defineProps({
  title: {
    type: String,
    required: false,
    default: 'None'
  },
  start: {
    type: Number,
    required: true
  }
})

const counter = ref(props.start)

/* methods */
const getSquareCounter = () => {
  console.log('getSquareCounter');
  return counter.value * counter.value
}

const increment = () => counter.value++

const decrement = () => counter.value--

/* computed */
const squareCounter = computed(() => {
  console.log('computedSquereCounter');
  return counter.value * counter.value
})
</script>
<template>
  <h2>{{ props.title }}</h2>
  <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>
  <div>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
  </div>
</template>