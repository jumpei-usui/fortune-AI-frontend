<script setup lang="ts">
const title = "タイトル";
</script>

<template>
  <v-layout>
    <atoms-header :title="title"></atoms-header>
    <v-main>
      <v-container class="ma-4">
        <slot></slot>
      </v-container>
    </v-main>
  </v-layout>
</template>
