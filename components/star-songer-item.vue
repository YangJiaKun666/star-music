<template>
    <view
        class="songer-box button-action flex-center"
        @click="goSongerDetail(item.id)"
    >
        <view class="songer-img">
            <image :src="item.img1v1Url" />
        </view>
        <view class="songer-name text-oneline">{{ item.name }}</view>
    </view>
</template>
<script>
export default {
    props: {
        item: Object,
    },
    methods: {
        goSongerDetail(id) {
            console.log(id)
        }
    }
}
</script>
<style lang="less" scoped>
.songer-box {
    margin-bottom: 20rpx;
    padding: 10rpx 0;
    .songer-img {
        height: 80rpx;
        width: 80rpx;
        border-radius: 50%;
        overflow: hidden;
        margin-right: 20rpx;
        image {
            width: 100%;
            height: 100%;
        }
    }
    .songer-name {
        width: calc(100% - 100rpx);
    }
}
</style>
