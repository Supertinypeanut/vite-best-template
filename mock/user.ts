import { MockMethod } from 'vite-plugin-mock'
interface Response {
	query: {
		cycle?: string
		id: string
	}
	body: unknown
}
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
