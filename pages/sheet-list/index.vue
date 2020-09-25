<template>
    <view class="sheet-list">
        <query-header
            :title="title"
            color="#fff"
            :image="playData.coverImgUrl"
            :opacity="opacity"
        >
            <template #rightButton>
                <view class="button-action">
                    <star-icon
                        name="plus"
                        size="40"
                        :style="{ color: '#fff' }"
                    />
                </view>
            </template>
        </query-header>
        <view class="sheet-top flex-center">
            <star-blur
                class="sheet-bg"
                :params="{
                    width: '100%',
                    height: '100%',
                    image: playData.coverImgUrl,
                    blur: 'xl',
                }"
            />
            <view class="left-img">
                <image :src="playData.coverImgUrl" />
            </view>
            <view class="right-info">
                <view class="right-info__name text-towline">{{
                    playData.name
                }}</view>
                <view class="right-info__decs text-towline">{{
                    playData.description
                }}</view>
            </view>
        </view>
        <scroll-view scroll-y class="sheet-box">
            <star-song-item
                v-for="(item, index) of listData"
                :key="index"
                :item="item"
            >
                <template #rightIcon>
                    <view @click.stop class="check-box">
                        <star-icon name="ellipsis-v" size="34" />
                    </view>
                </template>
            </star-song-item>
            <star-loading v-show="!loadingSuccess" />
        </scroll-view>
    </view>
</template>
<script>
import starBlur from '@/components/helang-blur'
import queryHeader from '@/components/query-header'
import starIcon from '@/components/star-icon'
import starSongItem from '@/components/star-song-item'
import starLoading from '@/components/star-loading'
import apis from '@/apis/index'
export default {
    components: {
        starBlur,
        queryHeader,
        starIcon,
        starSongItem,
        starLoading,
    },
    data() {
        return {
            id: 0,
            playData: {},
            listData: [],
            loadingSuccess: true,
			opacity: 0,
			title: '歌单'
        }
    },
    async onLoad(option) {
        console.log('option', option)
        this.id = option.id
        let res = await apis.sheetDetail({ id: this.id })
        this.playData = res.playlist
        let taskIds = this.playData.trackIds.map((ele) => {
            return ele.id
        })
        this.loadingSuccess = false
        let songRes = await apis.getSongData({ ids: taskIds.join(',') })
        let singleData = songRes.songs.map((ele) => {
            return {
                id: ele.id,
                name: ele.name,
                hideImg: true,
                song: {
                    alias: ele.alia,
                    artists: ele.ar,
                    album: ele.al,
                },
            }
        })
        this.listData = singleData
        console.log(this.loadingSuccess)
        this.loadingSuccess = true
    },
    onPageScroll(detail) {
        if (detail.scrollTop > 180) {
            this.opacity = 1
			this.title = this.playData.name
        } else {
            this.opacity = 0
			this.title =  '歌单'
        }
    },
}
</script>

<style lang="less" scoped>
.sheet-list {
    position: relative;
    .sheet-top {
        width: 100%;
        height: 240px;
        position: relative;
        padding: 0 60rpx;
        box-sizing: border-box;
        .sheet-bg {
            position: absolute;
            top: 0;
            left: 0;
        }
        .left-img {
            width: 200rpx;
            height: 200rpx;
            border-radius: 12rpx;
            overflow: hidden;
            margin-right: 30rpx;
            image {
                width: 100%;
                height: 100%;
            }
        }
        .right-info {
            width: calc(100% - 230rpx);
            &__name {
                font-size: 32rpx;
                font-weight: bold;
                color: #fff;
            }
            &__decs {
                font-size: 24rpx;
                margin-top: 20rpx;
                color: #bababa;
            }
        }
    }
    .sheet-box {
        box-sizing: border-box;
        transform: translateY(-24rpx);
        padding: 24rpx 24rpx 0;
        border-radius: 30rpx 30rpx 0 0;
        background: #fff;
    }
}
.button-action {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
