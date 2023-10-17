<script setup lang="ts">
import { ref } from "vue";
import roomsData from "../data/rooms";

const rooms = ref(roomsData);
</script>

<template>
  <div>
    <div v-for="room in rooms" :key="room.id">{{ room.name }}</div>
  </div>
</template>

<style scoped></style>
