<script setup lang="ts">
import { signInWithRedirect, signOut } from "aws-amplify/auth";
</script>

<template>
  <div>
    <v-btn @click="signInWithRedirect({ provider: 'Google' })">sign in</v-btn>
    <v-btn @click="signOut">sign out</v-btn>
    <v-btn @click="navigateTo('/test')">test</v-btn>
    <v-btn @click="navigateTo('/secret')">secret</v-btn>
  </div>
</template>
