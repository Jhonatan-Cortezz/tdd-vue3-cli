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
    required: false,
    default: 50
  }
})

const counter = ref(props.start)

/* methods */
const getSquareCounter = () => {
  return counter.value * counter.value
}

const increment = () => counter.value++

const decrement = () => counter.value--

/* computed */
const squareCounter = computed(() => {
  return counter.value * counter.value
})
</script>
<template>
  <h2>{{ props.title }}</h2>
  <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>
  <p data-testid="start">{{ props.start }}</p><!-- el data atribute me sirve mas para hacer la busqueda del elemento en las pruebas -->
  <p>{{ counter }}</p>
  <div class="buttons-container">
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
  </div>
</template>