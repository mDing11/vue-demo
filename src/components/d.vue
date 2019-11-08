<template>
    <div>
        订单

          请输入值：
    <input v-model.number="value">
    <button @click="addNumber">添加</button>
    <!-- <TodoList :list="list" v-on:delete-item="onDeleteItem"/> -->
    <TodoList :list="list" @delete-item="onDeleteItem"/>
    <p>共计：{{countTotal}}元</p>
    </div>
</template>

<script>
import TodoList from "./TodoList";

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