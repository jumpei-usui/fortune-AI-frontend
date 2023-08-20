<script setup lang="ts">
interface Props {
  title: string;
}

const props = defineProps<Props>();
</script>

<template>
  <v-app-bar color="primary">
    <v-app-bar-title>{{ props.title }}</v-app-bar-title>
  </v-app-bar>
</template>
