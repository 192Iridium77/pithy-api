<script setup lang="ts"></script>

<template>
  <div class="card">
    <slot> </slot>
  </div>
</template>

<style scoped>
.card {
  padding: 1rem;
  border: 1px solid silver;
  border-radius: 0.25rem;
  min-width: 25%;
}
</style>
