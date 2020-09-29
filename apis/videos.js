import { httpRequest } from './request'

export default {
    // 获取视频分类标签
    getVideoCategory: async () => {
        let res = await httpRequest('/video/category/list', 'GET')
        return res
    },
    // 获取推荐视频
    getRecommendVideos: async (data) => {
        let res = await httpRequest('/video/timeline/recommend', 'GET', data)
        return res
    },
    // 获取对应标签的视频
    getGroupVideos: async (data) => {
        let res = await httpRequest('/video/group', 'GET', data)
        return res
    },
}
