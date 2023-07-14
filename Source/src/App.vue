<script setup lang="ts">
import { ref, provide } from "vue";
import { storeToRefs } from "pinia";
import { useCartStore } from "./stores/cart";


const cartStore = useCartStore();
const { cart } = storeToRefs(cartStore);

const userName = ref("Bob");
provide("userName", userName);
</script>

<template>
  <header>
    <nav>
      <ul>
        <li class="nav-item">
          <img src="./assets/build-a-bot-logo.png" alt="" class="logo" />
          <RouterLink :to="{ name: 'Home' }" class="nav-link">Build-a-Bot</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink :to="{ name: 'Build' }" class="nav-link">Build</RouterLink>
        </li>
        <li class="nav-item cart">
          <RouterLink to="/cart" class="nav-link">Cart</RouterLink>
          <div class="cart-items">{{ cart.length }}</div>
        </li>
      </ul>
    </nav>
  </header>
  <div class="container">
    <asside class="aside">
      <RouterView name="sidebar"> </RouterView>
    </asside>
    <main>
      <RouterView></RouterView>
    </main>
  </div>
</template>

<style>
body {
  background: linear-gradient(to bottom, #555, #999);
  background-attachment: fixed;
}

#app {
  font-family: Avenir, Arial, Helvetica, sans-serif;
  text-align: center;
}
</style>

<style scoped>
main {
  /* margin: 0 auto; */
  padding: 30px;
  background-color: white;
  width: 964px;
  min-height: 300px;
}

header {
  background-color: #999;
  width: 1184px;
  margin: 0 auto;
}

ul {
  padding: 3px;
  display: flex;
}

.nav-item {
  display: inline-block;
  padding: 5px 10px;
  font-size: 22px;
  border-right: 1px solid #bbb;
}

.cart {
  position: relative;
  margin-left: auto;
  border-right: none;
}

.cart-items {
  position: absolute;
  top: -5px;
  right: -9px;
  font-size: 18px;
  width: 20px;
  text-align: center;
  display: inline-block;
  border-radius: 100px;
  background-color: mediumseagreen;
}

.logo {
  vertical-align: middle;
  height: 30px;
  margin-right: 10px;
}

.nav-link {
  text-decoration: none;
  color: inherit;
}

.router-link-active {
  color: white;
}

.container {
  display: flex;
  margin: 10px auto 0 auto;
  justify-content: center;
}

.aside {
  padding: 30px;
  background-color: #aaa;
  width: 100px;
  min-height: 300px;
}
</style>
