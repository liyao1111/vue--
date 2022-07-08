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
    <button @click="decrease(number)">-</button>
    <button @click="increase(number)">+</button>
    <button @click="oddIncrease(number)">当前求和为奇数再加</button>
    <button @click="delayIncrease(number)">等一等再加</button>
  </div>
</template>

<script>
import { mapState,mapGetters,mapMutations,mapActions } from "vuex";
export default {
  name: "Count",
  data() {
    return {
      number: 1,
    };
  },
  methods: {
    // decrease() {
    //   this.$store.commit("DEC", this.number);
    // },
    // increase() {
    //   this.$store.commit("INC", this.number);
    // },
    // 借助mapMutations生成对应的方法，方法中会调用commit去联系mutations（对象写法）
    ...mapMutations({increase:'INC',decrease:'DEC'}),
    /*------------------------------------------------------------------------------*/ 
    // oddIncrease() {
    //   this.$store.dispatch("odd", this.number);
    // },
    // delayIncrease() {
    //   this.$store.dispatch("delay", this.number);
    // },
    // 借助mapActions生成对应方法，方法会调用dispatch去联系actions
    ...mapActions({oddIncrease:'odd',delayIncrease:'delay'})

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