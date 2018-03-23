<template>
  <div id="app">
    <header>
      <span>ToDo list
        <img src="./assets/logo.png" alt="Vue.js PWA" height="45px" width="45px">
        <a class="login" href="https://vuejs.org" target="_blank" rel="noopener">login</a>
      </span>
    </header>
    
    <main>
      
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: rgb(0, 204, 255);
  color: #ffffff;
}

header span {
  display: inline;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 500;
  box-sizing: border-box;
  
}
</style>
