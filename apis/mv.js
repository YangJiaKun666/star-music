import { httpRequest } from './request'

export default {
    // 获取最新mv
    getNewMv: async (data) => {
        let res = await httpRequest('/mv/first?limit=10', 'GET', data)
        return res
    },
}
