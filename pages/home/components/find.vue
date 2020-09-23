<template>
    <scroll-view scroll-y class="find-item">
        <view v-if="isLodingSuccess">
            <!-- 轮播图 -->
            <swiper
                class="swiper-box"
                autoplay
                :interval="3000"
                circular
                indicator-dots
            >
                <swiper-item v-for="(item, index) in bannerData" :key="index">
                    <image
                        @click="selectDetail(item.targetId)"
                        class="swiper-item"
                        :src="item.pic"
                    />
                </swiper-item>
            </swiper>
            <!-- 每日推荐，歌单，歌手 -->
            <view class="find-tags flex-center">
                <view class="tags-box">
                    <view class="tags-icon">
                        <star-icon
                            name="eercast"
                            size="42"
                            :style="{ color: '#fff' }"
                        />
                    </view>
                    <view class="tags-name">每日推荐</view>
                </view>
                <view class="tags-box">
                    <view class="tags-icon">
                        <star-icon
                            name="file-text"
                            size="38"
                            :style="{ color: '#fff' }"
                        />
                    </view>
                    <view class="tags-name">歌单</view>
                </view>
                <view class="tags-box">
                    <view class="tags-icon">
                        <star-icon
                            name="youtube-play"
                            size="42"
                            :style="{ color: '#fff' }"
                        />
                    </view>
                    <view class="tags-name">MV</view>
                </view>
                <view class="tags-box">
                    <view class="tags-icon">
                        <star-icon
                            name="microphone"
                            size="42"
                            :style="{ color: '#fff' }"
                        />
                    </view>
                    <view class="tags-name">歌手</view>
                </view>
            </view>
            <!-- 歌单推荐 -->
            <star-title title="懂你的精选歌单" buttonLabel="查看更多" />
            <view class="recommend flex-center">
                <star-song-sheet
                    v-for="(item, index) of sheetData"
                    :item="item"
                    :key="index"
                />
            </view>
            <!-- 歌曲推荐 -->
            <star-title title="精选歌曲，值得聆听" buttonLabel="全部播放" />
            <view>
                <star-song-item
                    v-for="(item, index) of songData"
                    :item="item"
                    :key="index"
                    @click-item="clickItem"
                />
            </view>
        </view>
        <star-loading v-else />
    </scroll-view>
</template>
<script>
import starIcon from '@/components/star-icon'
import starTitle from '@/components/star-title'
import starSongSheet from '@/components/star-song-sheet'
import starSongItem from '@/components/star-song-item'
import starLoading from '@/components/star-loading'
import apis from '@/apis/index'
export default {
    components: {
        starIcon,
        starSongSheet,
        starTitle,
        starSongItem,
        starLoading
    },
    props: {
        isRendering: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        isLodingSuccess() {
            if (this.bannerData && this.sheetData && this.songData) {
                return true
            } else {
                return false
            }
        },
    },
    watch: {
        isRendering: {
            handler(val) {
                if (val) {
                    this.getFindData()
                }
            },
            immediate: true,
        },
    },
    data() {
        return {
            bannerData: null,
            sheetData: null,
            songData: null,
        }
    },
    methods: {
        async getFindData() {
            if (!this.bannerData) {
                // 获取轮播图
                let bannerRes = await apis.getFindBannerData({ type: 1 })
                this.bannerData = bannerRes.banners
            }
            if (!this.sheetData) {
                // 获取推荐歌单
                let recommendRes = await apis.getFindRecommendData({ limit: 6 })
                this.sheetData = recommendRes.result
            }
            if (!this.songData) {
                // 获取推荐歌曲
                let songRes = await apis.getFindSongData()
                this.songData = songRes.result
            }
        },
        selectDetail(item) {
            console.log(item)
        },
        clickItem(id) {
            uni.navigateTo({
                url: `/pages/play/index?id=${id}`,
            })
        },
    },
}
</script>
<style lang="less" scoped>
.find-item {
    padding: 0 12px;
}
.swiper-box {
    height: 260rpx;
    margin-bottom: 9px;
}
.find-item /deep/ .uni-swiper-dot {
    width: 12rpx;
    height: 12rpx;
    margin-right: 24rpx;
}
.swiper-item {
    height: 100%;
    width: 100%;
    border-radius: 12rpx;
}
.recommend {
    overflow-x: hidden;
    flex-wrap: wrap;
    width: 100%;
    box-sizing: border-box;
}
.find-tags {
    justify-content: space-around;
    margin: 24rpx 0;
    .tags-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        .tags-icon {
            width: 76rpx;
            height: 76rpx;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background: #464646;
        }
        .tags-name {
            font-size: 20rpx;
            margin-top: 10rpx;
        }
    }
}
</style>
