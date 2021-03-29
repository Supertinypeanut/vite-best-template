<template>
  <h1>HOME</h1>
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" @defaultClick="onClick" />
  <button @click="onToSetup">to setup page</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";
import router from "@/routes";

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
  },
  setup() {
    const onClick = () => {
      console.log("default-click");
    };
    const onToSetup = () => {
      router.push({ name: "Setup-Page" });
    };

    return {
      onClick,
      onToSetup,
    };
  },
});
</script>

<style></style>
