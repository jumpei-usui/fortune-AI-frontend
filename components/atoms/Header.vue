<script setup lang="ts">
const props = defineProps({ title: String });
</script>

<template>
  <v-app-bar color="primary">
    <v-app-bar-title>{{ props.title }}</v-app-bar-title>
  </v-app-bar>
</template>
