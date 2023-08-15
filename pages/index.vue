<script setup>
import { Auth } from "aws-amplify";
</script>

<template>
  <v-btn @click="Auth.federatedSignIn()">sign in</v-btn>
  <v-btn @click="Auth.signOut()">sign out</v-btn>
</template>
