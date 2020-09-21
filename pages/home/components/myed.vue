<template>
    <scroll-view scroll-y class="myed-item">
        <!-- 顶部用户信息 -->
        <view class="top-userinfo flex-center">
            <image
                class="avatar"
                src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600593719746&di=af8ac6c88ad848d28d80deb97db7e539&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201901%2F17%2F20190117230425_eofqv.thumb.700_0.jpg"
            />
            <view class="info">
                <view class="name text-oneline action-color">Y__JK</view>
                <view class="lv">Lv.7</view>
            </view>
        </view>
        <!-- 中间按钮 -->
        <view class="center-button flex-center">
            <view class="button-box">
                <!-- <view class="button-icon"> -->
                <star-icon name="play" size="40" class="action-color" />
                <!-- </view> -->
                <view class="button-name">最近播放</view>
            </view>
            <view class="button-box">
                <star-icon name="music" size="40" class="action-color" />
                <view class="button-name">我的关注</view>
            </view>
            <view class="button-box">
                <star-icon name="heartbeat" size="40" class="action-color" />
                <view class="button-name">收藏和赞</view>
            </view>
        </view>
        <!-- 歌单相关 -->
        <star-title title="我的歌单" buttonLabel="管理" />
        <view class="sheet-info">
            <view class="sheet-item flex-center">
                <image
                    class="item-img"
                    src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600593719746&di=af8ac6c88ad848d28d80deb97db7e539&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201901%2F17%2F20190117230425_eofqv.thumb.700_0.jpg"
                />
                <view class="item-info">
                    <view class="info-name text-oneline action-color"
                        >/// V ///</view
                    >
                    <view class="info-count">34首</view>
                </view>
                <view class="item-btn button-action">
                    <star-icon name="ellipsis-v" size="36" />
                </view>
            </view>
        </view>
        <star-title title="收藏歌单" buttonLabel="管理" />
        <view class="sheet-info">
            <view class="sheet-item flex-center">
                <image
                    class="item-img"
                    src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600593719746&di=af8ac6c88ad848d28d80deb97db7e539&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201901%2F17%2F20190117230425_eofqv.thumb.700_0.jpg"
                />
                <view class="item-info">
                    <view class="info-name text-oneline action-color"
                        >游戏必备，起伏不断（推荐随机播放哈哈）</view
                    >
                    <view class="info-count">34首</view>
                </view>
                <view class="item-btn button-action">
                    <star-icon name="ellipsis-v" size="36" />
                </view>
            </view>
        </view>
    </scroll-view>
</template>
<script>
import starIcon from '@/components/star-icon'
import starTitle from '@/components/star-title'
export default {
    components: {
        starIcon,
        starTitle,
    },
    methods: {},
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
            width: calc(100% - 110rpx);
            .name {
                font-weight: bold;
                font-size: 30rpx;
            }
            .lv {
                font-size: 24rpx;
                font-style: italic;
            }
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
