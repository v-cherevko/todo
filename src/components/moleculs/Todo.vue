<template>
  <div
    :class="[
      $style.todo,
      {
        [$style.complited]: todo.complited,
        [$style.edited]: todo == editedTodo,
      },
    ]"
  >
    <input
      :class="$style.checkbox"
      type="checkbox"
      v-model="checked"
      @change="changeComplited"
    />
    <div :class="$style.castomCheckbox">
      <img
        src="@/assets/icons/plus.svg"
        :class="$style.ok"
        v-if="this.todo.complited"
      />
    </div>
    <div :class="$style.flex" @dblclick="editTodo">
      <span :class="$style.text">
        {{ todo.title }}
        <span :class="$style.line" v-if="this.todo.complited"></span>
      </span>
      <img
        src="@/assets/icons/plus.svg"
        :class="$style.close"
        @click="deleteOneTodo"
      />
    </div>
    <input
      :class="$style.edit"
      type="text"
      v-todo-focus="todo == editedTodo"
      :value="todo.title"
      @change="changeTitle"
      @blur="changeTitle"
    />
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  props: {
    todo: Object,
  },

  data() {
    return {
      editedTodo: null,
      checked: null,
    };
  },

  methods: {
    ...mapMutations(["deleteTodo", "changeTodoValue"]),

    deleteOneTodo() {
      this.deleteTodo(this.todo);
    },

    editTodo() {
      this.editedTodo = this.todo;
    },

    changeTitle(e) {
      if (!this.editedTodo) {
        return;
      }
      this.editedTodo = null;
      if (e.target.value) {
        this.changeTodoValue({
          id: this.todo.id,
          title: e.target.value,
          complited: this.todo.complited,
        });
      }
    },

    changeComplited() {
      this.changeTodoValue({
        id: this.todo.id,
        title: this.todo.title,
        complited: this.checked,
      });
    },
  },

  directives: {
    "todo-focus": function (el, binding) {
      if (binding.value) {
        el.focus();
      }
    },
  },
};
</script>

<style lang="scss" module>
.todo {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  font-size: 1.5rem;
  color: rgb(39, 36, 36);
  background: white;
  border-top: 1px solid rgb(216, 206, 206);

  .checkbox {
    width: 2rem;
    height: 2rem;
    position: absolute;
    left: 1.5rem;
    z-index: 2;
    opacity: 0;
    cursor: pointer;
  }

  .castomCheckbox {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 1.5rem;
    border: 1px solid gray;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;

    .ok {
      width: 1rem;
      height: 1rem;
    }
  }

  .flex {
    margin: 0rem 3rem 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:hover {
      .close {
        display: block;
      }
    }

    .text {
      position: relative;

      .line {
        position: absolute;
        left: 0;
        top: 1.2rem;
        width: 100%;
        height: 2px;
        background: gray;
      }
    }

    .close {
      display: none;
      cursor: pointer;
      width: 1rem;
      height: 1rem;
      fill: gray;
      transform: rotate(45deg);
    }
  }

  .edit {
    display: none;
  }
}

.complited {
  box-shadow: none;

  .flex {
    opacity: 0.4;
  }
}

.edited {
  .checkbox {
    display: none;
  }

  .castomCheckbox {
    display: none;
  }

  .flex {
    display: none;
  }

  .edit {
    box-shadow: 0 0.15rem 0.5rem 0.15rem rgba(0, 0, 0, 0.1);
    outline: none;
    border: none;
    width: 100%;
    height: 2rem;
    display: block;
  }
}
</style>