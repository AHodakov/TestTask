<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/polls">Опросы</router-link>
      <router-link to="/users">Пользователи</router-link>
      <router-link to="/blackList">Черные списки</router-link>
      <router-link to="/callCenter">Колл-центер</router-link>
      <p class="nav__qestion">?</p>
    </div>

    <div class="main">
      <Header />
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from "./components/header.vue";

export default {
  components: { Header },
  created() {
    this.$store.dispatch("loadDTO");
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  width: 1250px;
  margin: 0 auto;
}

#nav {
  border: 1px solid black;
  border-radius: 15px;
  padding-top: 50px;
  padding: 5px;
  max-height: 90vh;
}

#nav a {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 70px;
  margin: 10px;
  font-weight: bold;
  color: #2c3e50;
  border-radius: 20px;
  border: 1px solid #fff;
  transition: border 0.15s, color 0.3s 
}
#nav a:hover {
border: 1px solid #42b983;
color: #42b983;
transition: border 0.15s, color 0.3s ;
}

#nav a.router-link-exact-active {
  color: #42b983;
  background-color: #e1f0e9;
}
.nav__qestion {
  cursor: pointer;
  margin: 50px 50px;
  font-size: 35px;
  color: #fff;
  background-color: #42b983;
  border: 1px solid #42b983;
  width: 70px;
  border-radius: 50%;
  transition: background-color 0.3s, color 0.3s ;
}
.nav__qestion:hover{
  background-color:  #fff;;
  color:  #42b983;
  border: 1px solid #42b983;
  transition: background-color 0.3s, color 0.3s ;
}
.main {
  width: 100%;
}
</style>
