<script setup lang="ts">
const title = "タイトル";
</script>

<template>
  <v-layout>
    <a-header :title="title"></a-header>
    <v-main>
      <slot></slot>
    </v-main>
  </v-layout>
</template>
