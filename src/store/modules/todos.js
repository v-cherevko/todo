export default {
  state: () => ({
    list: [],
  }),

  mutations: {
    createTodo(state, newTodo) {
      state.list.unshift(newTodo);
    },

    deleteTodo(state, todo) {
      state.list.splice(state.list.indexOf(todo), 1);
    },

    changeTodoValue(state, todo) {
      state.list = state.list.map((t) => {
        if (t.id === todo.id) {
          return todo;
        }
        return t;
      });
    },

    deleteComplited(state) {
      state.list = state.list.filter((item) => (item = !item.complited));
    },

    allComplited(state) {
      state.list.map((item) => {
        if (!item.complited) {
          item.complited = true;
        }
      });
    },

    allNotComplited(state) {
      state.list.map((item) => {
        if (item.complited) {
          item.complited = false;
        }
      });
    },
  },

  getters: {
    allTodo(state) {
      return state.list;
    },
    activeTodo(state) {
      return state.list.filter((item) => (item = !item.complited));
    },
    complitedTodo(state) {
      return state.list.filter((item) => (item = item.complited));
    },
  },
};
