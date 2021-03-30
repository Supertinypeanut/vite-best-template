import { GetterTree } from 'vuex'
import { ProjectStore } from '@/types/typing.store'

const getters: GetterTree<
	ProjectStore.ExampleStatus,
	ProjectStore.RootState
> = {
	moneyDouble: state => state.money * 2,
}

export default getters
