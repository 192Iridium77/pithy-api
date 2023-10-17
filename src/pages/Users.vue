<script setup lang="ts">
import { ref } from "vue";
import usersData from "../data/users";

const users = ref(usersData);
</script>

<template>
  <div>
    <div v-for="user in users" :key="user.id">{{ user.name }}</div>
  </div>
</template>

<style scoped></style>
