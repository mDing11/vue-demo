<template>
  <div id="app">
    请输入值：
    <input v-model.number="value">
    <button @click="addNumber">添加</button>
    <!-- <TodoList :list="list" v-on:delete-item="onDeleteItem"/> -->
    <TodoList :list="list" @delete-item="onDeleteItem"/>
    <p>共计：{{countTotal}}元</p>
  </div>
</template>

<script>
import TodoList from "./components/TodoList";

export default {
  name: "App",
  components: {
    TodoList
  },
  data: function() {
    return {
      value: "",
      list: []
    };
  },
  methods: {
    addNumber: function() {
      this.list.push(this.value);
      this.value = "";
    },
    onDeleteItem: function(number) {
      this.list = this.list.filter((value, index) => index !== number);
    }
  },
  computed: {
    countTotal: function() {
      return (
        this.list.length &&
        this.list.reduce((value, item) => {
          return value + item;
        })
      );
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
