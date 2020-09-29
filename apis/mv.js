import { httpRequest } from './request'

export default {
    // 获取最新mv
    getTopMv: async (data) => {
        let res = await httpRequest('/top/mv', 'GET', data)
        return res
    },
}
