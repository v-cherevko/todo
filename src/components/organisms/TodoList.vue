<template>
  <div :class="$style.container">
    <h1 :class="$style.title">Задачи</h1>
    <div :class="$style.wrapper">
      <Header />
      <div :class="$style.todoList">
        <Todo v-for="todo in filterTodos" :key="todo.id" :todo="todo" />
        <Footer
          :filter="filter"
          @all="all"
          @active="active"
          @complited="complited"
          v-if="allTodo.length"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/moleculs/Header";
import Todo from "@/components/moleculs/Todo";
import Footer from "@/components/moleculs/Footer";

import { mapGetters } from "vuex";

export default {
  components: {
    Header,
    Todo,
    Footer,
  },

  data() {
    return {
      filter: "all",
    };
  },

  computed: {
    ...mapGetters(["allTodo", "activeTodo", "complitedTodo"]),

    filterTodos() {
      var result;
      if (this.filter === "all") {
        return (result = this.allTodo);
      } else if (this.filter === "active") {
        return (result = this.activeTodo);
      } else if (this.filter === "complited") {
        return (result = this.complitedTodo);
      }
      return result;
    },
  },

  methods: {
    all() {
      this.filter = "all";
    },
    active() {
      this.filter = "active";
    },
    complited() {
      this.filter = "complited";
    },
  },
};
</script>

<style lang="scss" module>
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    font-size: 5rem;
    margin: 0 0 2rem;
    color: rgba(175, 47, 47, 0.15);
  }

  .wrapper {
    width: 50%;

    .todoList {
      width: 100%;
      height: 100%;
      box-shadow: 0 1rem 1rem 0.5rem rgba(0, 0, 0, 0.1);
    }
  }
}
</style>