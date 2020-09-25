import { httpRequest } from './request'

export default {
    getSongData: async (data) => {
        let res = await httpRequest('/song/detail', 'GET', data)
        return res
    },
}
