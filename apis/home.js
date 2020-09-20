import { httpRequest } from './request'

export default {
    // 发现-->轮播
    getFindBannerData: async (data) => {
        let res = await httpRequest('/banner', 'GET', data)
        return res
    },
    // 发现-->推荐歌单
    getFindRecommendData: async (data) => {
        let res = await httpRequest('/personalized', 'GET', data)
        return res
    },
    // 发现-->推荐歌曲
    getFindSongData: async()=>{
        let res = await httpRequest('/personalized/newsong','GET')
        return res
    }
}
