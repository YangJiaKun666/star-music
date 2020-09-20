<template>
    <view class="find-item">
        <!-- 轮播图 -->
        <swiper
            class="swiper-box"
            autoplay
            :interval="3000"
            circular
            indicator-dots
        >
            <swiper-item v-for="(item, index) in info" :key="index">
                <image
                    @click="selectDetail(item)"
                    class="swiper-item"
                    :src="item"
                    mode="aspectFill"
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
            <star-song-sheet v-for="(item, index) of 6" :key="index" />
        </view>
        <!-- 歌曲推荐 -->
        <star-title title="精选歌曲，值得聆听" buttonLabel="全部播放" />
        <view>
            <star-song-item v-for="(item, index) of 6" :key="index" />
        </view>
    </view>
</template>
<script>
import starIcon from '@/components/star-icon'
import starTitle from '@/components/star-title'
import starSongSheet from '@/components/star-song-sheet'
import starSongItem from '@/components/star-song-item'
import starVideo from '@/components/star-video'
export default {
    components: {
        starIcon,
        starSongSheet,
        starTitle,
        starSongItem,
        starVideo,
    },
    data() {
        return {
            info: [
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600592455688&di=e68f4dc72bfce47737ffd1e45d14381b&imgtype=0&src=http%3A%2F%2Fpic.3h3.com%2Fup%2F2016-11%2F20161118163145985980.jpg',
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600592521576&di=2c109ca996a161273455609c3f192e54&imgtype=0&src=http%3A%2F%2F01.minipic.eastday.com%2F20170928%2F20170928112618_d41d8cd98f00b204e9800998ecf8427e_6.jpeg',
                'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1524344612,772100959&fm=26&gp=0.jpg',
            ],
        }
    },
    computed: {
        translate() {
            console.log(this.prevMove, this.recomMove)
            return this.prevMove + this.recomMove
        },
    },
    methods: {
        selectDetail(item) {
            console.log(item)
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
