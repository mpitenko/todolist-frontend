<template>
  <div>
    <ol>

      <input 
        type="checkbox"
        v-model="isCompletedTasks"
        v-on:change = "reDetermineDispayProperty(todos)">

      <input 
        type="text"
        v-model="newitem"
        placeholder="отредактируй меня"
        v-on:keyup.enter="onPressEnter($event)">

      <button v-on:click="onClickOk">OK</button>

      <todo-item
        v-for="item in todos"
        v-bind:todo="item"
        v-bind:key="item.id"
        v-on:remove="removeItem"
        v-on:ondblclickemit = 'onDblClickMethod'
        v-on:updateemit = 'update'
        v-on:clickoniscompletedemit = 'clickoniscompletedemit'>
      </todo-item>

      <div>
        <input type="radio" id="Choice1"
         name="TodosChoise" value="All" v-model="picked" v-on:change = 'onchangeradio1(todos)'>
        <label for="Choice1">All</label>

        <input type="radio" id="Choice2"
         name="TodosChoise" value="Active" v-model="picked" v-on:change = 'onchangeradio1(todos)'>
        <label for="Choice2">Active</label>

        <input type="radio" id="Choice3"
         name="TodosChoise" value="Completed" v-model="picked" v-on:change = 'onchangeradio1(todos)'>
        <label for="Choice3">Completed</label>
      </div>

      <span>Выбрано: {{ picked }}</span> 

    </ol>
  </div>
</template>

<script>
import TodoItem from '../classes/TodoItem.js'
import TodoItemComponent from './TodoItem.vue'

export default {
  components: {
    TodoItem: TodoItemComponent
  },
  data () {
    return {
      todos: [],
      newitem: '',
      isCompletedTasks: false,
      picked: ''
    }
  },
  methods: {
    onPressEnter: function() {
      this.createItem(this.newitem, this.isCompletedTasks);
    },
    onClickOk: function() {
      this.createItem(this.newitem, this.isCompletedTasks);
    },

    clearInput: function() {
      this.newitem = '';
    },
    createItem: function(newItemName, InisCompletedTasks) {
      if (!newItemName) return;
      const newitemvar = new TodoItem({text: newItemName, isCompleted: false, isEdition: false}, InisCompletedTasks);
      this.todos.push(newitemvar);
      this.clearInput();
    },
    removeItem: function(todo) {
      this.todos.splice(this.todos.indexOf(todo), 1);
    },
    onDblClickMethod: function(todo) {
      todo.isEdition = !todo.isEdition;
    },
    update: function(todo) {
      todo.isEdition = !todo.isEdition;
    },
    reDetermineDispayProperty: function (todos) {
      if (this.isCompletedTasks) {
          todos.forEach(function(item, i, arr) {
               if (todos[i].isCompleted) {
                  todos[i].isDisplay = true;
               }
               else {
                  todos[i].isDisplay = false;
               };
          })}
     else {
          todos.forEach(function(item, i, arr) { 
             if (todos[i].isCompleted) {
                todos[i].isDisplay = false;
             }
             else {
                todos[i].isDisplay = true;
             }
          });
      };
    },
    clickoniscompletedemit: function(todo) {
      todo.isDisplay = !todo.isDisplay;
    },
    onchangeradio1: function(todos) {
      if (this.picked == 'All') {
           todos.forEach(function(item, i, arr) {
           todos[i].isDisplay = true;
          });
      }
      else if (this.picked == 'Active') {
           this.isCompletedTasks = false;
           this.reDetermineDispayProperty(todos);

      }
      else if (this.picked == 'Completed') {
           this.isCompletedTasks = true;
           this.reDetermineDispayProperty(todos);
      }
    }
   }
}
</script>
