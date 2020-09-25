import { httpRequest } from './request'

export default {
    // 歌单详情
    sheetDetail: async (data) => {
        console.log('sheetDetail', data)
        let res = await httpRequest('/playlist/detail', 'GET', data)
        return res
    },
}
