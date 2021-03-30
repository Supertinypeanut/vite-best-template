<template>
	<img alt="Vue logo" src="./assets/logo.png" />
	<router-view #slot="{ Component }">
		<transition name="fade-transform" mode="out-in">
			<component :key="routeComponentKey" :is="Component" />
		</transition>
	</router-view>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
	setup() {
		const routeComponentKey = computed(() => useRoute().name)
		return {
			routeComponentKey,
		}
	},
})
</script>
