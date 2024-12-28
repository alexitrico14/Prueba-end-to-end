<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style scoped>
nav {
  display: flex;
  justify-content: center;
  gap: 15px;
  background-color: #9cceff;
  padding: 10px;
  margin-bottom: 20px;
}

.router-link {
  color: white;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;
}

router-link:hover {
  color: #ffcc00;
}

#app {
  font-family: Arial, sans-serif;
  text-align: center;
  color: #333;
}
</style>

