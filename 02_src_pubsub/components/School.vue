<template>
  <div>
    <h3>{{ name }}</h3>
    <h3>{{ address }}</h3>
  </div>
</template>

<script>
import PubSub  from "pubsub-js";
export default {
  name: "SchoolInfo",
  data() {
    return {
      name: "SchoolA",
      address: "beijing ",
    };
  },

  mounted() {
    this.pubId = PubSub.subscribe('hello',(msg,data) => { 
      console.log('student收到：',msg,data)
     })
  },
  beforeDestroy(){
    PubSub.unsubscribe(this.pubId)
  }
};
</script>

<style>
</style>