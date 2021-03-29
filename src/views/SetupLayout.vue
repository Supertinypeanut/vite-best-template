<template>
  <h1>SETUP</h1>
  <HelloWorldSetup
    msg="Hello Vue 3 + TypeScript + Vite"
    @setupClick="onSetupClick"
  />
  <button @click="onToHome">to Home page</button>
</template>

<script setup lang="ts">
// <script setup> https://github.com/vuejs/rfcs/pull/227
import HelloWorldSetup from "@/components/HelloWorld-setup.vue";
import router from "@/routes";

const onSetupClick = () => {
  console.log("setup-click");
};

const onToHome = () => {
  router.push("/");
};
</script>
