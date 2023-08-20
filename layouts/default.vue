<script setup lang="ts">
const title = "タイトル";
</script>

<template>
  <v-app>
    <atoms-header :title="title"></atoms-header>
    <v-main>
      <slot></slot>
    </v-main>
  </v-app>
</template>
