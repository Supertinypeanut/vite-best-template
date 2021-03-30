import { InjectionKey } from 'vue'
import { createStore, Store, createLogger } from 'vuex'
import { ProjectStore } from '@/types/typing.store'
import example from './example'

export const key: InjectionKey<Store<ProjectStore.RootState>> = Symbol()

const isProd: boolean = process.env.NODE_ENV === 'production'
export const store = createStore<ProjectStore.RootState>({
	state: {
		count: 0,
	},
	modules: {
		example,
	},
	strict: !isProd,
	plugins: isProd ? [] : [createLogger()],
})
