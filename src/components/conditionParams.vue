<template>
  <div v-if="this.item.type === 'selected'">
    <label class="params__lable params__wrap" for="params">{{
      this.item.discription
    }}</label>
    <select
      class="params__field"
      name="params"
      v-model="vSelectedField"
      @change="changeField"
    >
      <option disabled>Выберите {{ this.item.discription }}</option>
      <option v-for="(item, index) of this.item.parametrs" :key="index">
        {{ item }}
      </option>
    </select>
  </div>
  <div v-else>
    <label class="params__lable" for="params">{{
      this.item.discription
    }}</label>
    <span class="params__span">от</span>
    <input
      class="params__input"
      type="number"
      name="params"
      min="0"
      max="100"
      v-model="vInput1"
      @change="changeInput1"
    />
    <span class="params__span">до</span>
    <input
      class="params__input"
      type="number"
      name="params"
      min="0"
      max="100"
      v-model="vInput2"
      @change="changeInput2"
    />
  </div>
</template>

<script>
export default {
  props: {
    paramsCounter: {
      type: Number,
    },
    itemId: {
      type: Number,
    },
    paramsObj: {
      type: Object,
    },
    paramsIndex: {
      type: Number,
    },
  },
  data: function () {
    return {
      id: this.itemId,
      indexObj: null,
      indexParams: this.paramsIndex,
      item: this.paramsObj,
      vSelectedField: null,
      vInput1: null,
      vInput2: null,
    };
  },
  methods: {
    changeField(event) {
      const data = event.target.value;
      const index = this.indexObj;
      const id = this.indexParams;
      this.$store.commit("changeParams", { data, index, id });
    },
    changeInput1(event) {
      const type = 1;
      const data = event.target.value;
      const index = this.indexObj;
      const id = this.indexParams;
      this.$store.commit("changeParamsInput", { type, data, index, id });
    },
    changeInput2(event) {
      const type = 2;
      const data = event.target.value;
      const index = this.indexObj;
      const id = this.indexParams;
      this.$store.commit("changeParamsInput", { type, data, index, id });
    },
  },
  computed: {},
  mounted() {
    this.indexObj = this.$store.getters.getIndex(this.id);
  },
};
</script>

<style>
.params__lable {
  width: 300px;
  margin-right: 240px;
  font-size: 20px;
  font-weight: 500;
}
.params__field {
  margin-top: 20px;
  width: 550px;
  height: 35px;
  border-radius: 10px;
}
.params__span {
  margin: 20px 5px;
}
.params__input {
  margin-top: 20px;
  width: 100px;
  height: 25px;
  border-radius: 10px;
}
</style>