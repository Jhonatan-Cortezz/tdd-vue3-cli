<script setup>
import Counter from '@/components/Counter.vue'
</script>
<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Counter title="Entraron" :start="10"/>
  <Counter title="Salieron" :start="5"/>
</template>