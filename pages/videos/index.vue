<template>
    <scroll-view
        scroll-y
        @scrolltolower="onLoadMore"
        :style="{ height: windowHeight - customBar - 50 + 'px' }"
        class="video-list"
    >
        <star-tabs
            v-model="current"
            :tabs="tabs"
            @change="changeTab"
            lineHeight="2px"
            lineColor="#d81e06"
            activeColor="#d81e06"
            fixed
            field="name"
            paddingItem="0 14px"
        />
        <view class="video-box">
            <view class="video-left">
                <star-video
                    v-for="(item, index) of datas.left"
                    :key="index"
                    :item="item"
                />
            </view>
            <view class="video-right">
                <star-video
                    v-for="(item, index) of datas.right"
                    :key="index"
                    :item="item"
                />
            </view>
        </view>
        <star-loading v-show="hasmore" />
    </scroll-view>
</template>
<script>
import starTabs from '@/components/star-tabs'
import starVideo from '@/components/star-video'
import starLoading from '@/components/star-loading'
import apis from '@/apis/index'
import { mapState } from 'vuex'
export default {
    components: {
        starVideo,
        starTabs,
        starLoading,
    },
    data() {
        return {
            current: 0,
            tabs: [{ name: '推荐' }],
            videosData: [],
            hasmore: true,
        }
    },
    async onLoad() {
        let categoryRes = await apis.getVideoCategory()
        this.tabs = [...this.tabs, ...categoryRes.data]
        await this.getVideosData()
    },
    computed: {
        ...mapState(['windowHeight', 'customBar']),
        datas() {
            let obj = {
                left: [],
                right: [],
            }
            this.videosData.forEach((ele, index) => {
                if (index % 2 === 0) {
                    obj.right.push(ele)
                } else {
                    obj.left.push(ele)
                }
            })
            return obj
        },
    },
    methods: {
        changeTab(index) {
            this.current = index
            this.hasmore = true
            this.videosData = []
            this.getVideosData()
        },
        onLoadMore() {
            this.getVideosData()
        },
        async getVideosData() {
            let offset = this.videosData.length
            let data = []
            if (this.current === 0) {
                let getRecommendRes = await apis.getRecommendVideos({
                    offset,
                })
                data = getRecommendRes.datas.map((ele) => {
                    return ele.data
                })
                this.hasmore = getRecommendRes.hasmore
            } else {
                let id = this.tabs[this.current].id
                let getVideoRes = await apis.getGroupVideos({ offset, id })
                data = getVideoRes.datas.map((ele) => {
                    return ele.data
                })
                this.hasmore = getVideoRes.hasmore
            }
            this.videosData = this.videosData.concat(data)
        },
    },
}
</script>
<style lang="less" scoped>
.video-list {
    padding: 0 12px;
    box-sizing: border-box;
    background: #f5f5f5;
    .video-box {
        margin-top: 6px;
        box-sizing: border-box;
        display: flex;
        align-items: flex-start;
        width: 100%;
        .video-left,
        .video-right {
            width: calc(100% / 2 - 6px);
        }
        .video-left {
            margin-right: 12px;
        }
    }
}
</style>
