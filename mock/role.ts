import { MockMethod } from 'vite-plugin-mock'
import { Response } from './type'

export default [
	{
		url: '/api/quickpay/getMonthlyData',
		method: 'get',
		response: ({ query }: Response) => {
			console.log('id>>>>>>>>', query.cycle)
			return {
				code: 0,
				message: 'ok',
				data: {
					roleName: 'admin',
					roleValue: 'admin',
				},
			}
		},
	},
	{
		url: '/api/getRoleById',
		method: 'get',
		response: ({ query }: Response) => {
			console.log('id>>>>>>>>', query.id)
			return {
				code: 0,
				message: 'ok',
				data: {
					roleName: 'admin',
					roleValue: 'admin',
				},
			}
		},
	},
	{
		url: '/api/testRestful/:id',
		method: 'get',
		response: ({ query }: Response) => {
			console.log('id>>>>>>>>', query.id)
			return {
				code: 0,
				message: 'ok',
				data: {
					roleName: 'admin',
					roleValue: 'admin',
				},
			}
		},
	},
	{
		url: '/api/testRestful/:id',
		method: 'post',
		response: ({ query, body }: Response) => {
			console.log('query>>>>>>>>', query)
			console.log('body>>>>>>>>', body)
			return {
				code: 0,
				message: 'ok',
				data: {
					roleName: 'admin',
					roleValue: 'admin',
				},
			}
		},
	},
] as MockMethod[]
