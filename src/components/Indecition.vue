<script setup>
import { ref, watch } from 'vue';
import axios from 'axios'

const question = ref('')
const answer = ref(null)
const img = ref(null)

/* methods */
const getAnswer = async() => {
  try {
    answer.value = 'Pensando'
    const { data } = await axios.get('https://yesno.wtf/api').then( r => r )
    answer.value = data.answer
    img.value = data.image

  } catch (error) {
    console.log(error);
  }
}

/* watchers */
watch(question, async (newQuestion, oldQuestion) => {
  if (!newQuestion.includes('?')) return

  /* todo: fetch api */
  getAnswer()
})

</script>
<template>
  <img :src="img ? img : 'https://via.placeholder.com/250'" alt="bg">
  <div class="bg-dark"></div>

  <div class="indecision-container">
    <input type="text" placeholder="Hazme una pregunta" v-model="question">
    <p>Recuerda terminar con un signo de interrogación</p>

    <div>
      <h2>{{ question }}</h2>
      <h1>{{ answer }}</h1>
    </div>
  </div>
</template>

<style scoped>
img, .bg-dark {
  height: 100vh;
  left: 0px;
  max-height: 100%;
  max-width: 100%;
  position: fixed;
  top: 0px;
  width: 100vw;
}

.bg-dark {
  background-color: rgba(0, 0, 0, 0.4);
}

.indecision-container {
  position: relative;
  z-index: 99;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: auto;
  width: 50%;
  height: 100%;
}

input {
  width: 250px;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
}
input:focus {
  outline: none;
}

p {
  color: white;
  font-size: 20px;
  margin-top: 0px;
}

h1, h2 {
  color: white;
}

h2 {
  margin-top: 150px;
}
</style>