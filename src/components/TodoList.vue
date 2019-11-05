<template>
  <ul>
    <li v-for="(item,index) in list" :key="item">
      <!-- <TodoItem :item="item" :index="index" v-on:delete-item="$emit('delete-item',index)"/> -->
      <TodoItem :item="item" :index="index" v-on="$listeners"/>
    </li>
  </ul>
</template>

<script>
import TodoItem from "./TodoItem";
export default {
  name: "TodoList",
  components: {
    TodoItem
  },
  props: {
    list: Array
  }
};
</script>
