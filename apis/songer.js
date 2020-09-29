import { httpRequest } from './request'

export default {
    // 获取歌手列表
    getSongerList: async (data) => {
        let res = await httpRequest('/artist/list', 'GET', data)
        return res
    },
}
