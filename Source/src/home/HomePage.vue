<script setup lang="ts">
  defineProps<{ msg: string }>();

</script>

<template>
  <div class="home">
    <div>
      <img src="../assets/robot-home.png" class="robot" />
    </div>
    <div class="get-started">
      <RouterLink to="/build">Get started</RouterLink> building your first
      robot!
    </div>
  </div>
</template>

<style scoped>
  .home {
    text-align: center;
  }
  .robot {
    height: 300px;
  }
</style>
