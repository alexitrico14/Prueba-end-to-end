<template>
    <div>
      <h1>Contador: {{ counter }}</h1>
      <button @click="decrement">-</button>
      <button @click="increment">+</button>
    </div>
  </template>
  
  <script>
  import { mapState, mapActions } from 'vuex';
  
  export default {
    computed: {
      ...mapState(['counter']),
    },
    methods: {
      ...mapActions(['increment', 'decrement']),
    },
  };
  </script>
  
  <style scoped>
  button {
    margin: 5px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
  }
  </style>
  