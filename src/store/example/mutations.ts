import { MutationTree } from 'vuex'
import { ProjectStore } from '@/types/typing.store'

export enum EXAMPLE_MUTATION_TYPE {
	CHANGE_MONEY = 'CHANGE_MONEY',
}

const mutations: MutationTree<ProjectStore.ExampleStatus> = {
	[EXAMPLE_MUTATION_TYPE.CHANGE_MONEY]: (state, payload) => {
		state.money = payload
	},
}

export default mutations
