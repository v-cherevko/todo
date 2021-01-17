<template>
  <div :class="$style.header">
    <Arrow />
    <Input />
  </div>
</template>

<script>
import Arrow from "@/components/atoms/Arrow";
import Input from "@/components/atoms/Input";
export default {
  components: {
    Arrow,
    Input,
  },
};
</script>

<style lang="scss" module>
.header {
  position: relative;
}
</style>