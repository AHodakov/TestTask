<template>
  <div class="conditions__wrap">
    <label class="conditions__lable" for="selection">{{ item.tag }}</label>
    <select
      class="conditions__field"
      name="selection"
      v-model="vSelectedField"
      @change="changeField"
    >
      <option disabled>Выберите условие</option>
      <option v-for="item of this.selectionValue" :key="item.index">
        {{ item }}
      </option>
    </select>
    <div v-if="this.paramsObj !== null">
      <ConditionParams
        v-for="(item, index) of this.paramsKey"
        :key="item"
        :paramsObj="paramsObj"
        :itemId="id"
        :paramsIndex="index"
      />
      <button class="conditions__btn__green" @click="incParam">добавить</button>
    </div>
    <div class="conditions__btn__wrap">
      <button class="conditions__btn__red" @click="removeConditionFromUserlist">УДАЛИТЬ УСЛОВИЕ</button>
    </div>
  </div>
</template>

<script>
import ConditionParams from "./conditionParams.vue";

export default {
  components: { ConditionParams },

  props: {
    item: {
      type: Object,
    },
  },
  data() {
    return {
      id: this.item.id,
      selectionValue: [],
      vSelectedField: null,
      FieldParams: null,
      paramsObj: null,
      paramsKey: [],
      counter: 0,
    };
  },
  methods: {
    changeField(event) {
      let item = this.$store.getters.getConditionsParams(event.target.value);
      if (item !== undefined && event.target.value !== "Выберите условие") {
        this.paramsKey = [];
        this.$store.commit(
          "clearParams",
          this.$store.getters.getIndex(this.id)
        );
        this.paramsKey.push(this.counter);
        this.paramsObj = item;
        item.id = this.item.id;
        this.counter += 1;
        this.$store.commit("addConditionParamsToList", item);
      } else {
        this.paramsObj = null;
      }
    },
    incParam() {
      if (this.paramsObj.type == "input") {
        let params = { from: "", to: "" };
        this.paramsKey.push(this.counter++);
        let index = this.$store.getters.getIndex(this.item.id);
        this.$store.commit("addParams", { params, index });
      } else {
        let params = "";
        this.paramsKey.push(this.counter++);
        let index = this.$store.getters.getIndex(this.item.id);
        this.$store.commit("addParams", { params, index });
      }
    },
    removeConditionFromUserlist() {
      this.$store.commit("removeConditionToList", this.item.id);
    },
  },
  computed: {},
  mounted() {},

  created() {
    this.selectionValue = this.$store.getters.getConditionsValue;
  },
};
</script>

<style>
.conditions__wrap {
  position: relative;
  padding: 30px;
  background-color: #bceadf;
  margin: 1px -20px;
  border: 1px solid #0d5736;
  width: 98%;
}
.conditions__lable {
  margin-right: 150px;
  font-size: 25px;
  font-weight: 700;
}
.conditions__field {
  width: 600px;
  height: 40px;
  border-radius: 10px;
}
.conditions__btn__wrap {
  display: flex;
  justify-content: flex-end;
}
.conditions__btn__red {
  margin: 20px 50px;
  outline: none;
  border-radius: 10px;
  padding: 15px;
  width: 200px;
  border: none;
  color: #c11717;
  border: 1px solid #c11717;
  background-color: #fff;
  cursor: pointer;
  transition:  color 0.3s, background-color 0.3s; 
}
.conditions__btn__red:hover {
  color: #fff;
  background-color: #c11717;
  transition: color 0.3s, background-color 0.3s; 
}
.conditions__btn__green {
  position: absolute;
  margin: 20px 50px;
  outline: none;
  border-radius: 10px;
  padding: 15px;
  width: 200px;
  border: none;
  color: #0d5736;
  border: 1px solid #0d5736;
  background-color: #fff;
  cursor: pointer;
  transition:  color 0.3s, background-color 0.3s; 
}
.conditions__btn__green:hover {
  color: #fff;
  background-color: #0d5736;
  transition: color 0.3s, background-color 0.3s; 
}
</style>