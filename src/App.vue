<template>
  <div id="app">
   
      <header>
        <img src="./assets/logo.png" alt="Vue.js PWA" height="45px" width="45px">
        <span id="title">
          ToDo list web
        </span>
        <span id="menu">
          <a href="https://vuejs.org" target="_blank" rel="noopener">login</a>
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
  padding: 0 40px 0 24px;
  background-color: rgb(0, 204, 255);
  color: #ffffff;
}

#title {
  font-size: 20px;
  letter-spacing: .02em;
  font-weight: 500;
  padding-top: px;
}
#menu {
  font-size: 20px;
  letter-spacing: .02em;
  font-weight: 300;
  float: right;
  padding: 15px 0 15px 0;
}
img {
  padding-top: 5px;
}
</style>
