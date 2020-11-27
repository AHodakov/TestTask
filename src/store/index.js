import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    conditions: [],
    conditionUserList: [],
  },
  getters: {
    getConditionsValue: (state) => {
      return state.conditions.map((item) => item.name);
    },
    getConditionsParams: (state) => (target) => {
      let find = state.conditions.find((el) => el.name === target);
      if (find) {
        return find;
      }
    },
    getIndex: (state) => (id) => {
      let find = state.conditionUserList.find((el) => el.id === id);
      return state.conditionUserList.indexOf(find);
    },
  },
  mutations: {
    loadConditions(state, data) {
      state.conditions = data;
    },
    addConditionToList(state, data) {
      state.conditionUserList.push(data);
    },
    addConditionParamsToList(state, data) {
      state.conditionUserList.forEach((el) => {
        if (el.id === data.id) {
          el.name = data.name;
          el.discription = data.discription;
          el.parametrs.push({});
        }
      });
    },
    addParams(state, { params, index }) {
      state.conditionUserList[index].parametrs.push(params);
    },
    changeParams(state, { data, index, id }) {
      state.conditionUserList[index].parametrs[id] = data;
    },
    changeParamsInput(state, { type, data, index, id }) {
      if (type == 1) {
        state.conditionUserList[index].parametrs[id].from = data;
      } else {
        state.conditionUserList[index].parametrs[id].to = data;
      }
    },
    removeConditionToList(state, data) {
      let find = state.conditionUserList.find((el) => el.id === data);
      state.conditionUserList.splice(state.conditionUserList.indexOf(find), 1);
      state.conditionUserList.forEach((el, i) => {
        let n = i + 1;
        el.tag = 'Условие ' + n;
      });
    },
    clearParams(state, index) {
      state.conditionUserList[index].parametrs = [];
    },
  },
  actions: {
    loadDTO({ commit }) {
      axios
        .get('/api/conditions')
        .then((res) => {
          commit('loadConditions', res.data);
        })
        .catch((err) => {
          console.log('Ошибка запроса СЕРВЕРА!');
          console.log(err);
        });
    },
    pushServer() {
      axios
        .post('/api/addConditionList', this.state.conditionUserList)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log('Ошибка ОТПРАВКИ на сервер!');
          console.log(err);
        });
      this.state.conditionUserList = [];
    },
  },
  modules: {},
});
