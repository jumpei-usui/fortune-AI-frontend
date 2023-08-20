<script setup lang="ts">
const test = () => {
  return 1;
};
defineExpose({ test });
</script>

<template>
  <v-btn @click="test()">test</v-btn>
</template>
