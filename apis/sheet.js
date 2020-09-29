import { httpRequest } from './request'

export default {
    // 精品歌单
    sheetList: async (data) => {
        let res = await httpRequest('/top/playlist/highquality', 'GET', data)
        return res
    },
    // 歌单详情
    sheetDetail: async (data) => {
        let res = await httpRequest('/playlist/detail', 'GET', data)
        return res
    },
}
