<template>
  <div>
    <h1>人员列表</h1>
    <input type="text" placeholder="输入姓名" v-model='name'/>
    <button @click="add">添加</button>
    <ol>
      <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
    </ol>
    <h3>上方组件的求和为:{{sum}}</h3>
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
import { mapState } from 'vuex'
export default {
    name:'Person',
    data() {
      return {
        name:''
      }
    },
    computed:{
      ...mapState('personAbout',['personList']),
      ...mapState('countAbout',['sum'])
    },
    methods:{
      add(){
        const personObj = {id:nanoid(),name:this.name}
        this.$store.commit('personAbout/ADD_PERSON',personObj)
        console.log(personObj)
      }
    }
}
</script>

<style>
</style>