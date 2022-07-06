<template>
  <div class="Category">
    <h3>{{ title }}</h3>
    <slot :games="games"></slot>
    <!-- slot 将数据传给插槽的使用者 -->
  </div>
</template>

<script>
export default {
  name: "Category",
  data() {
    return {
      games: ["lol", "dota", "cod", "dnf"],
    };
  },
  props:['title']
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
.film {
  width: 100%;
}
img {
  width: 100%;
}
</style>