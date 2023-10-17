<script setup lang="ts">
import { ref } from "vue";
import roomsData from "../data/rooms";
import { Room } from "../types";
import Card from "../components/Card.vue";

const getRoomLink = (roomId: Room["id"]) => {
  return `room/${roomId}`;
};

const rooms = ref(roomsData);
</script>

<template>
  <div class="center">
    <Card v-for="room in rooms" :key="room.id">
      <router-link :to="getRoomLink(room.id)">{{ room.name }}</router-link>
    </Card>
  </div>
</template>

<style scoped></style>
