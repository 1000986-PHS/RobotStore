<template>
  <div>
    <h1>Browse Parts</h1>
    <ul class="menu">
      <li>
        <RouterLink :to="{ name: 'BrowseHeads' }">
            Heads
        </RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'BrowseArms' }">
            Arms
        </RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'BrowseTorsos' }">
            Torsos
        </RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'BrowseBases' }">
            Bases
        </RouterLink>
      </li>
    </ul>
    <RouterView></RouterView>
  </div>
</template>

<script lang="ts">
  export default {
    name: "BrowseParts",
  };
</script>

<style scoped>
  h1 {
    text-align: center;
  }
  .menu {
    display: flex;
    justify-content: space-around;
    margin: 0 100px;
    font-size: 20px;
  }
  ul {
    list-style-type: none;
  }
  a {
    color: palevioletred;
  }
</style>
