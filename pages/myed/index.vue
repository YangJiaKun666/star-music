<template>
    <view class="myed-item">
        <view v-if="isLodingSuccess">
            <!-- 顶部用户信息 -->
            <view class="top-userinfo flex-center">
                <image lazy-load class="avatar" :src="userInfo.avatarUrl" />
                <view class="info">
                    <view class="name text-oneline action-color">{{
                        userInfo.nickname
                    }}</view>
                    <view class="lv">Lv.{{ level }}</view>
                </view>
                <view class="info-btn">
                    <star-icon name="angle-double-right" size="40" />
                </view>
            </view>
            <!-- 中间按钮 -->
            <view class="center-button flex-center">
                <view class="button-box">
                    <star-icon name="play" size="40" class="action-color" />
                    <view class="button-name">最近播放</view>
                </view>
                <view class="button-box">
                    <star-icon name="music" size="40" class="action-color" />
                    <view class="button-name">我的关注</view>
                </view>
                <view class="button-box">
                    <star-icon
                        name="heartbeat"
                        size="40"
                        class="action-color"
                    />
                    <view class="button-name">收藏和赞</view>
                </view>
            </view>
            <!-- 歌单相关 -->
            <star-title title="我的歌单" buttonLabel="管理" />
            <view class="sheet-info">
                <view
                    class="sheet-item flex-center"
                    v-for="(item, index) of mySheet"
                    :key="index"
                >
                    <image lazy-load class="item-img" :src="item.coverImgUrl" />
                    <view class="item-info">
                        <view class="info-name text-oneline action-color">
                            {{ item.name }}
                        </view>
                        <view class="info-count">{{ item.trackCount }}首</view>
                    </view>
                    <view class="item-btn button-action">
                        <star-icon name="ellipsis-v" size="36" />
                    </view>
                </view>
            </view>
            <star-title title="收藏歌单" buttonLabel="管理" />
            <view class="sheet-info">
                <view
                    class="sheet-item flex-center"
                    v-for="(item, index) of recomSheet"
                    :key="index"
                >
                    <image lazy-load class="item-img" :src="item.coverImgUrl" />
                    <view class="item-info">
                        <view class="info-name text-oneline action-color">
                            {{ item.name }}
                        </view>
                        <view class="info-count">{{ item.trackCount }}首</view>
                    </view>
                    <view class="item-btn button-action">
                        <star-icon name="ellipsis-v" size="36" />
                    </view>
                </view>
            </view>
        </view>
        <star-loading v-else />
    </view>
</template>
<script>
import starIcon from '@/components/star-icon'
import starTitle from '@/components/star-title'
import starLoading from '@/components/star-loading'
import apis from '@/apis/index'
export default {
    components: {
        starIcon,
        starTitle,
        starLoading,
    },
    data() {
        return {
            level: 0,
            userInfo: null,
            mySheet: [],
            recomSheet: [],
        }
    },
    computed: {
        isLodingSuccess() {
            if (
                this.userInfo &&
                this.mySheet.length !== 0 &&
                this.recomSheet.length !== 0
            ) {
                return true
            } else {
                return false
            }
        },
    },
    async onShow() {
        let uid = this.$store.state.userInfo.userId
        let userInfoRes = await apis.getUserInfo({ uid })
        this.level = userInfoRes.level
        this.userInfo = userInfoRes.profile
        let playListRes = await apis.getUserSheet({ uid, limit: 9999 })
        playListRes.playlist.forEach((ele) => {
            if (ele.ordered) {
                this.recomSheet.push(ele)
            } else {
                this.mySheet.push(ele)
            }
        })
    },
}
</script>
<style lang="less" scoped>
.myed-item {
    padding: 0 12px;
    .top-userinfo {
        padding: 20rpx;
        height: 90rpx;
        .avatar {
            width: 90rpx;
            height: 90rpx;
            border-radius: 50%;
            margin-right: 20rpx;
        }
        .info {
            padding: 4rpx 0;
            box-sizing: border-box;
            height: 90rpx;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: calc(100% - 150rpx);
            .name {
                font-weight: bold;
                font-size: 30rpx;
            }
            .lv {
                font-size: 24rpx;
                font-style: italic;
            }
        }
        .info-btn {
            width: 40rpx;
            line-height: 90rpx;
            text-align: center;
        }
    }
    .center-button {
        margin: 30rpx 0;
        justify-content: space-around;
    }
    .button-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        .button-icon {
            width: 76rpx;
            height: 76rpx;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background: #464646;
        }
        .button-name {
            font-size: 24rpx;
            margin-top: 10rpx;
        }
    }
    .sheet-info {
        .sheet-item {
            height: 90rpx;
            margin-bottom: 20px;
            .item-img {
                height: 90rpx;
                width: 90rpx;
                border-radius: 12rpx;
                margin-right: 20rpx;
            }
            .item-info {
                width: calc(100% - 150rpx);
                .info-name {
                    font-size: 30rpx;
                }
                .info-count {
                    font-size: 20rpx;
                    margin-top: 10rpx;
                }
            }
            .item-btn {
                width: 40rpx;
                text-align: center;
                line-height: 90rpx;
            }
        }
    }
}
</style>
