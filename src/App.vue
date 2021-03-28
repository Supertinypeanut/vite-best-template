<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" @defaultClick="onClick" />
  <hello-world-setup
    msg="Hello Vue 3 + TypeScript + Vite"
    @setupClick="onSetupClick"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "comps/HelloWorld.vue";
import HelloWorldSetup from "comps/HelloWorld-setup.vue";

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
    HelloWorldSetup,
  },
  setup() {
    const onClick = () => {
      console.log("default-click");
    };
    const onSetupClick = () => {
      console.log("setup-click");
    };

    return {
      onClick,
      onSetupClick,
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
