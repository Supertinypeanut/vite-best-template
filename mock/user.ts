import { MockMethod } from 'vite-plugin-mock'
import { Response } from './type'

export default [
	{
		url: '/api/createUser',
		method: 'post',
		response: ({ body }: Response) => {
			console.log('body>>>>>>>>', body)
			return {
				code: 0,
				message: 'ok',
				data: null,
			}
		},
	},
] as MockMethod[]
