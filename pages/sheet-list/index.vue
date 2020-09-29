<template>
    <view class="sheet-list">
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
                <image mode="aspectFill" lazy-load :src="playData.coverImgUrl" />
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
        <view class="sheet-box">
            <view class="sheet-plus">
                <view class="button-color button-action plus-button">
                    <star-icon
                        name="folder-open"
                        size="30"
                        :style="{ marginRight: '4px' }"
                    />
                    收藏歌单
                </view>
            </view>
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
        </view>
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
        }
    },
    async onLoad(option) {
        this.id = option.id
        let res = await apis.sheetDetail({ id: this.id })
        this.playData = res.playlist
        uni.setNavigationBarTitle({ title: this.playData.name })
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
        this.loadingSuccess = true
    },
}
</script>

<style lang="less" scoped>
.sheet-list {
    position: relative;
    .sheet-top {
        width: 100%;
        height: 280px;
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
        transform: translateY(-24rpx);
        padding: 24rpx 24rpx 0;
        border-radius: 30rpx 30rpx 0 0;
        background: #fff;
    }
    .sheet-plus {
        height: 70rpx;
        width: 100%;
        display: flex;
        margin-bottom: 10px;
        align-items: center;
        justify-content: flex-end;
        .plus-button {
            overflow: hidden;
            border-radius: 80px;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 70rpx;
            padding: 0 30rpx;
            color: #fff;
        }
    }
}
</style>
