<template>
  <div class="Category">
    <h3>{{title}}</h3>
    <!-- 定义一个挖槽(挖个坑，等待组件使用者填充) -->
    <slot>我是默认值，使用者未传递具体结构时我会出现</slot>
    <ul>
      <li v-for="(item, index) of listData" :Key="index">
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Category",
  data() {
    return {};
  },
  props: ['title'],
};
</script>

<style>
.Category {
  width: 200px;
  height: 400px;
  background-color: skyblue;
  border: 1px blue solid;
}
h3 {
  text-align: center;
  background-color: orange;
}
.film{
  width: 100%;
}
</style>