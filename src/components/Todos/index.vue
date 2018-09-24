<template>
  <div class="todos" v-if="data">
    <div class="todo" v-for="todo in data">
      <h3>{{ todo.title }}</h3>
      <div>{{ todo.text }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Todos',
    props: {
      data: Array
    },
    methods: {
      closeMessage: function () {
        this.open = false
      }
    },
  }
</script>

<style scoped lang="scss">
  .todos {
    display: block;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    .todo {
      flex-basis: 0;
      flex-grow: 1;
      text-align: center;
      background: #fafafa;
      padding: 40px 60px;
      box-sizing: border-box;
      &:nth-child(2) {
        border-left: 1px solid #ccc;
        border-right: 1px solid #ccc;
      }
      h3 {
        text-transform: uppercase;
        margin: 0px 0px 15px;
      }
    }
  }
</style>
