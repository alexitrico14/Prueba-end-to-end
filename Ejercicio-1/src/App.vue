<template>
  <div id="app">
    <Counter />
  </div>
</template>

<script>
import Counter from './components/Counter.vue';

export default {
  components: {
    Counter,
  },
};
</script>

<style>
/* Estilos globales opcionales */
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  text-align: center;
}
</style>
