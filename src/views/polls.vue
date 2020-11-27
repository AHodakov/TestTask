<template>
  <div class="content">
    <h1>Опросы</h1>
    <div class="nav__polls">
      <router-link exact to="/polls/parametrs">Параметры</router-link>
      <router-link to="/polls/question">Вопросы</router-link>
      <router-link to="/polls/logic">Логика</router-link>
      <router-link to="/polls/conditions">Условия</router-link>
      <router-link to="/polls/respondents">Респонденты</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.nav__polls {
    display: flex;
    justify-content: space-around;
}
.nav__polls a{
  text-decoration: none;
  box-sizing: border-box;
  font-size: 15px;
  color: #238e5e;
  font-weight: 700;
}
.nav__polls a:active{
  color: #238e5e;
}
.nav__polls a:focus{
  color: #0d5736;
  border-bottom:2px solid #0d5736 ;
  
}
</style>