import { useStore as baseUseStore } from 'vuex'
import { key } from '@/store'

function useStore() {
	return baseUseStore(key)
}

export { useStore }
