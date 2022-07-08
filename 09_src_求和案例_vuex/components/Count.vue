<template>
  <div>
    <h1>当前求和为:{{ $store.state.sum }}</h1>
    <h1>大和为:{{this.$store.getters.bigSum}}</h1>
    <select v-model="number">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button @click="decrease">-</button>
    <button @click="increase">+</button>
    <button @click="oddIncrease">当前求和为奇数再加</button>
    <button @click="delayIncrease">等一等再加</button>
  </div>
</template>

<script>
export default {
  name: "Count",
  data() {
    return {
      number: 1,
    };
  },
  methods: {
    decrease() {
      this.$store.dispatch("dec", this.number);
    },
    increase() {
      this.$store.dispatch("inc", this.number);
    },
    oddIncrease() {
      this.$store.dispatch("odd", this.number);
    },
    delayIncrease() {
      this.$store.dispatch("delay", this.number);
    },
  },
};
</script>

<style>
button {
  margin-left: 10px;
}
</style>