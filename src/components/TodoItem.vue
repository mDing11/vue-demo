
<template>
  <p>
    金额{{index+1}}：
    {{item}}元
    <!-- <button v-on:click="$emit('delete-item',index)">删除</button> -->
    <button @click="onDelete(index)">删除</button>
  </p>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    item: Number,
    index: Number
  },
  methods: {
    onDelete: function(index) {
       this.$emit("delete-item",index)
    }
  }
};
</script>




