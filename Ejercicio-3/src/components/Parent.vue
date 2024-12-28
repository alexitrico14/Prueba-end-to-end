<template>
    <div>
      <h1>Componente Padre</h1>
      <p>Texto recibido del hijo: {{ receivedText }}</p>
      <Child @send-text="handleText" />
    </div>
  </template>
  
  <script>
  import Child from './Child.vue';
  
  export default {
    name: 'Parent',
    components: {
      Child,
    },
    data() {
      return {
        receivedText: '',
      };
    },
    methods: {
      handleText(text) {
        this.receivedText = text;
      },
    },
  };
  </script>
  
  <style scoped>
  h1 {
    color: #004d99;
  }
  p {
    font-size: 16px;
    font-weight: bold;
    color: #333;
  }
  </style>
  