<template>
    <div>
      <h2>Componente Hijo</h2>
      <input v-model="inputText" type="text" placeholder="Escribe algo..." />
      <button @click="sendText">Enviar al padre</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Child',
    data() {
      return {
        inputText: '',
      };
    },
    methods: {
      sendText() {
        this.$emit('send-text', this.inputText);
        this.inputText = '';
      },
    },
  };
  </script>
  
  <style scoped>
  h2 {
    color: #ff6600;
  }
  input {
    padding: 5px;
    margin-right: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  button {
    padding: 5px 10px;
    background-color: #004d99;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  button:hover {
    background-color: #ffcc00;
  }
  </style>
  