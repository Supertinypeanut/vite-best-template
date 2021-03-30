import { ActionTree } from 'vuex'
import { ProjectStore } from '@/types/typing.store'
import { EXAMPLE_MUTATION_TYPE } from './mutations'

const actions: ActionTree<
	ProjectStore.ExampleStatus,
	ProjectStore.RootState
> = {
	[EXAMPLE_MUTATION_TYPE.CHANGE_MONEY]: ({ commit }, payload) => {
		commit(EXAMPLE_MUTATION_TYPE.CHANGE_MONEY, payload)
	},
}

export default actions
