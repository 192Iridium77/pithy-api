<script setup lang="ts">
import { ref } from "vue";
import usersData from "../data/users";
import Card from "../components/Card.vue";

const users = ref(usersData);
</script>

<template>
  <div class="center">
    <Card v-for="user in users" :key="user.id">{{ user.name }}</Card>
  </div>
</template>

<style></style>
