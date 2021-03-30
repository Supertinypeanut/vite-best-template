import { Module } from 'vuex'
import { ProjectStore } from '@/types/typing.store'

const example: Module<ProjectStore.ExampleStatus, ProjectStore.RootState> = {
	namespaced: true,
	state: {
		money: 1,
	},
}

export default example
