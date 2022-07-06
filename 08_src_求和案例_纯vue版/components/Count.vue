<template>
  <div>
    <h1>当前求和为:{{ sum }}</h1>
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
      sum: 0,
      number: 1,
    };
  },
  methods: {
    decrease() {
      this.sum -= this.number;
    },
    increase() {
      this.sum += this.number;
    },
    oddIncrease() {
      if (this.number % 2) {
        console.log("type:", typeof this.sum, typeof this.number);
        this.sum += this.number;
      }
    },
    delayIncrease() {
      setTimeout(() => {
        this.sum += this.number;
      }, 500);
    },
  },
};
</script>

<style>
button {
  margin-left: 10px;
}
</style>