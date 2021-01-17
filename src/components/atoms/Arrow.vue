<template>
  <img
    src="@/assets/icons/arrow.svg"
    :class="$style.arrow"
    v-if="allTodo.length > 0"
    @click="changeComplited"
  />
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["allTodo"]),
  },

  methods: {
    ...mapMutations(["allComplited", "allNotComplited"]),

    changeComplited() {
      if (!this.complited) {
        this.allComplited();
        this.complited = true;
      } else {
        this.allNotComplited();
        this.complited = false;
      }
    },
  },
};
</script>

<style lang="scss" module>
.arrow {
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  position: absolute;
  top: 1.8rem;
  left: 1.5rem;
}
</style>