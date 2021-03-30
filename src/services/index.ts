import { HttpClient } from '@/utils'
import ServiceAuto from './services.auto'

const api = import.meta.env.VITE_APP_API_PATH as string

const http = new HttpClient(api)

const projectService = new ServiceAuto(http)


export {
	projectService,
	ServiceAuto
}
