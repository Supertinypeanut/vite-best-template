import { Module } from 'vuex'
import { ProjectStore } from '@/types/typing.store'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

const example: Module<ProjectStore.ExampleStatus, ProjectStore.RootState> = {
	namespaced: true,
	state: {
		money: 1,
	},
	mutations,
	getters,
	actions,
}

export default example
