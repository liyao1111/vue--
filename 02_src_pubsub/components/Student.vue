<template>
  <div>
    <h3>{{ name }}</h3>
    <h3>{{ age }}</h3>
    <button @click="sendStudentName">把学生名传给school</button>
  </div>
</template>

<script>
import PubSub from "pubsub-js";
export default {
  name: "StudentInfo",
  data() {
    return {
      name: "tom",
      age: 29,
    };
  },
  methods: {
    sendStudentName() {
     PubSub.publish('hello',this.name);
    },
  },
};
</script>

<style>
</style>