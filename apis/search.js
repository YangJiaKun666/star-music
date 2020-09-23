import { httpRequest } from './request'
export default {
    // 默认搜索
    defaultSearch: async () => {
        let res = await httpRequest('/search/default', 'GET')
        return res
    },
    // 热搜列表
    hotSearch: async () => {
        let res = await httpRequest('/search/hot/detail', 'GET')
        return res
    },
    // 搜索
    goSearchData: async (data) => {
        let res = await httpRequest('/search', 'GET', data)
        return res
    },
}
