<template>
  <div>
    <h1>当前求和为:{{ sum }}</h1>
    <h1>大和为:{{ bigSum }}</h1>
    <h2>我在{{ school }}学习，学习{{ subject }}</h2>

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
import { mapState,mapGetters } from "vuex";
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
  computed: {
    // 靠程序员自己写计算属性
    // sum() {
    //   return this.$store.state.sum;
    // },

    // school() {
    //   return this.$store.state.school;
    // },
    // subject() {
    //   return this.$store.state.subject;
    // },
    // bigSum() {
    //   return this.$store.getters.bigSum;
    // },
    // 借助mapstate生成计算属性，从state中读取数据(对象写法)
    // ...mapState({ sum: "sum", school: "school", subject: "subject" }),
    // 借助mapstate生成计算属性，从state中读取数据(数组写法)
    ...mapState(['sum','subject','school']),
    // 使用mapGetter申城计算属性，从getter中读取数据
    ...mapGetters(['bigSum']),
  },
  mounted() {
    const x = mapState({
      sum: "sum",
      school: "school",
      subject: "subject",
    });
    console.log("x", x);
  },
};
</script>

<style>
button {
  margin-left: 10px;
}
</style>