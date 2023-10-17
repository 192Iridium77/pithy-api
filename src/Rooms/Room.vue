<script setup lang="ts">
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";
import roomsData from "../data/rooms";
import { Room } from "../types";

let room = ref<Room>();

onMounted(() => {
  const {
    params: { id },
  } = useRoute();

  const found = roomsData.find((room) => {
    return room.id === id;
  });

  if (found) {
    room.value = found;
  }
});
</script>

<template>
  <div>
    <div v-if="room">
      <h1>{{ room.name }}</h1>
    </div>
    <div v-else>Not found.</div>
  </div>
</template>

<style scoped></style>
