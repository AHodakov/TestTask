<template>
  <div>
    <p><strong>Добавить опрос</strong></p>

    <condition_card
      v-for="item of this.$store.state.conditionUserList"
      :key="item.id"
      :item="item"
    />

    <div @click="add()" class="respondent_add_condition">
      <p class="text__plus">+</p>
      <p>Нажмите чтобы добавить новые условные выборки</p>
      <p>Все условия связываются между собой логическим И</p>
    </div>
    <div class="respondent_button_wrap">
      <button class="respondent_button_pl respondent_btn">
        ПРОТЕСТИРОВАТЬ
      </button>
      <button
        class="respondent_button_pr respondent_btn"
        @click="pushConditionList"
      >
        ОТПРАВИТЬ
      </button>
    </div>
  </div>
</template>

<script>
import condition_card from "../../components/condition_card.vue";

export default {
  components: { condition_card },
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    add() {
      let obj = {
        id: this.counter,
        tag: `Условие ${this.$store.state.conditionUserList.length + 1}`,
        name: "",
        discription: "null",
        parametrs: [],
      };
      this.$store.commit("addConditionToList", obj);
      this.counter += 1;
    },
    pushConditionList() {
      this.$store.dispatch("pushServer");
    },
  },
};
</script>

<style scoped>
.respondent_button_wrap {
  margin: 0 -20px;
  display: flex;
  width: 104%;
  justify-content: space-between;
  padding: 25px 0;
  background-color: #42b983;
}
.respondent_btn {
  outline: none;
  border-radius: 10px;
  padding: 15px;
  width: 150px;
  border: none;
  color: #0d5736;
  background-color: #fff;
  cursor: pointer;
  transition:  color 0.3s, background-color 0.3s; 
}
.respondent_btn:hover {
  color: #fff;
  background-color: rgb(37, 132, 89);
  transition: color 0.3s, background-color 0.3s; 
}

.respondent_add_condition {
  margin: 10px;
  padding: 5px;
  text-align: center;
  border: 1px solid black;
  border-radius: 15px;
  cursor: pointer;
  box-shadow: 0px 4px 5px 2px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s;
}
.respondent_add_condition:active {
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.05);
  transition: box-shadow 0.3s;
}
.respondent_button_pl {
  margin-left: 50px;
}
.respondent_button_pr {
  margin-right: 50px;
}
.text__plus {
  margin: 0;
  font-size: 50px;
  font-weight: 700;
}
</style>