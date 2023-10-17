<script setup lang="ts"></script>

<template>
  <div>
    <div id="menu">
      <router-link to="/users">Users</router-link>
      <router-link to="/rooms">Rooms</router-link>
    </div>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped>
#menu {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  gap: 2rem;
  background-color: royalblue;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
}

a {
  color: white;
}
</style>
