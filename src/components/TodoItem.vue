<template>
<li v-if="todo.isDisplay">
    <div v-if="!todo.isEdition">
        <input 
          type="checkbox"
          v-model="todo.isCompleted"
          v-on:click="clickOnIsCompleted(todo)">

          <span v-on:dblclick="onDblClick(todo)"> {{ todo.text }} </span>
        <button @click="remove(todo)"> -</button>
    </div>
    <div v-if="todo.isEdition">
        <input type="text" v-model="todo.text" />
        <button @click="update(todo)">Save</button>
    </div>
</li>
</template>


<script>
export default {
  name: 'todo-item',
  props: ['todo'],
  mounted () {},
  methods: {
    remove: function (todo) {
        this.$emit('remove', todo);
    },
    onDblClick: function(todo) {
        this.$emit('ondblclickemit', todo);
        
    },
    update: function (todo) {
        this.$emit('updateemit', todo);
    },
    clickOnIsCompleted: function (todo) {
        this.$emit('clickoniscompletedemit', todo);
    }
  }
}
</script>

<style></style>