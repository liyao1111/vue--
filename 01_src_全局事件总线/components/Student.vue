<template>
  <div>
    <h3>{{ name }}</h3>
    <h3>{{ age }}</h3>
    <button @click="sendStudentName">把学生名给学校</button>
  </div>
</template>

<script>
export default {
  name: "StudentInfo",
  data() {
    return {
      name: "tom",
      age: 29,
    };
  },
  methods: {
    sendStudentName(){
        console.log('student send',this.name)
        this.$bus.$emit('hello',this.name)
    }
  },
};
</script>

<style>
</style>