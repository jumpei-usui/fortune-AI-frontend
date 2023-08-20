<script setup lang="ts">
import { Auth } from "aws-amplify";
</script>

<template>
  <v-btn @click="Auth.federatedSignIn()">sign in</v-btn>
  <v-btn @click="Auth.signOut()">sign out</v-btn>
  <v-btn @click="navigateTo('/secret')">secret</v-btn>
</template>
