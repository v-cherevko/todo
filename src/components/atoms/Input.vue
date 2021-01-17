<template>
  <input
    :class="$style.input"
    type="text"
    v-model="todo"
    placeholder="Что должно быть сделано?"
    autocomplete="off"
    @keyup.enter="addTodo"
  />
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      todo: "",
      id: new Date(),
      complited: false,
    };
  },

  methods: {
    ...mapMutations(["createTodo"]),

    addTodo() {
      var value = this.todo;
      if (!value) {
        return;
      }
      this.createTodo({
        title: this.todo,
        complited: false,
        id: this.id++,
      });
      this.todo = "";
    },
  },
};
</script>

<style lang="scss" module>
.input {
  width: 100%;
  outline: none;
  border: none;
  padding: 1.5rem 5rem;
  font-size: 2rem;
  box-shadow: 0 -0.5rem 1rem 0.5rem rgba(0, 0, 0, 0.1);
  &::placeholder {
    opacity: 0.4;
  }
}
</style>